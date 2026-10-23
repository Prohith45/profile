/**
 * SMTP Email Service Verification Script for Next.js 15
 * 
 * Verifies Nodemailer SMTP authentication against smtp.gmail.com:465 / :587
 * Supports reading from .env.local or interactive command-line setup.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const nodemailer = require('nodemailer');

const envPath = path.resolve(__dirname, '.env.local');

// Helper to parse key-value pairs from .env format
function parseEnv(content) {
  const result = {};
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      // Remove surrounding quotes if present
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      result[key] = val;
    }
  }
  return result;
}

// Helper to write/update .env.local cleanly
function saveEnvLocal(emailUser, emailPass) {
  let existingContent = '';
  if (fs.existsSync(envPath)) {
    existingContent = fs.readFileSync(envPath, 'utf8');
  }

  const cleanPass = emailPass.replace(/\s+/g, '');
  const cleanUser = emailUser.trim();

  let lines = existingContent ? existingContent.split(/\r?\n/) : [];
  let userUpdated = false;
  let passUpdated = false;

  lines = lines.map((line) => {
    if (line.trim().startsWith('EMAIL_USER=')) {
      userUpdated = true;
      return `EMAIL_USER=${cleanUser}`;
    }
    if (line.trim().startsWith('EMAIL_PASS=')) {
      passUpdated = true;
      return `EMAIL_PASS=${cleanPass}`;
    }
    return line;
  });

  if (!userUpdated) {
    lines.push(`EMAIL_USER=${cleanUser}`);
  }
  if (!passUpdated) {
    lines.push(`EMAIL_PASS=${cleanPass}`);
  }

  fs.writeFileSync(envPath, lines.join('\n').trim() + '\n', 'utf8');
  console.log(`\x1b[32m[OK]\x1b[0m Saved clean credentials to ${envPath}`);
}

async function verifySmtp(user, pass) {
  const cleanPass = pass.replace(/\s+/g, '');
  const cleanUser = user.trim();

  console.log(`\n\x1b[36m[INFO]\x1b[0m Testing SMTP connection with Gmail...`);
  console.log(`\x1b[36m[INFO]\x1b[0m Target Host: smtp.gmail.com:465 (SSL)`);
  console.log(`\x1b[36m[INFO]\x1b[0m Account:     ${cleanUser}`);
  console.log(`\x1b[36m[INFO]\x1b[0m Password:    [${cleanPass.length} chars, masked]`);

  // Create Nodemailer Transporter with explicit Gmail host config
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: cleanUser,
      pass: cleanPass,
    },
    tls: {
      rejectUnauthorized: true,
    },
    connectionTimeout: 15000,
  });

  try {
    await transporter.verify();
    console.log(`\n\x1b[32m=========================================================\x1b[0m`);
    console.log(`\x1b[32m[SUCCESS] SMTP Authentication Successful!\x1b[0m`);
    console.log(`\x1b[32m=========================================================\x1b[0m`);
    console.log(`The provided Google App Password is valid and authorized.`);
    console.log(`Your Next.js portfolio (/api/contact) is ready to transmit signals!\n`);
    return true;
  } catch (error) {
    console.log(`\n\x1b[31m=========================================================\x1b[0m`);
    console.log(`\x1b[31m[FAILED] SMTP Authentication Failed!\x1b[0m`);
    console.log(`\x1b[31m=========================================================\x1b[0m`);
    console.error(`Error Code:    ${error.code || 'UNKNOWN'}`);
    console.error(`Error Message: ${error.message}\n`);

    if (error.responseCode === 535 || error.message.includes('BadCredentials') || error.message.includes('Username and Password not accepted')) {
      console.log(`\x1b[33m[DIAGNOSTIC GUIDANCE]:\x1b[0m`);
      console.log(`1. Make sure you are using a 16-character Google "App Password", NOT your personal Gmail account password.`);
      console.log(`2. To generate a Google App Password:`);
      console.log(`   - Visit: https://myaccount.google.com/apppasswords`);
      console.log(`   - Ensure 2-Step Verification is turned ON for your account.`);
      console.log(`   - Name the app "Portfolio Contact Form" and copy the 16-character code.`);
      console.log(`   - Ensure spaces are removed (e.g. 'abcd efgh ijkl mnop' -> 'abcdefghijklmnop').\n`);
    }
    return false;
  }
}

// Prompt utility
function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function main() {
  console.log(`\x1b[35m=== Automated Next.js 15 Email Service Verifier ===\x1b[0m\n`);

  // Check command line arguments first: node verify-email.js <user> <pass>
  const args = process.argv.slice(2);
  let user = args[0];
  let pass = args[1];

  if (user && pass) {
    saveEnvLocal(user, pass);
    const ok = await verifySmtp(user, pass);
    process.exit(ok ? 0 : 1);
  }

  // Check if .env.local exists
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf8');
    const parsed = parseEnv(raw);
    user = parsed.EMAIL_USER;
    pass = parsed.EMAIL_PASS;

    if (user && pass && pass !== 'your_16_char_google_app_password') {
      console.log(`\x1b[32m[FOUND]\x1b[0m Found credentials in .env.local`);
      const ok = await verifySmtp(user, pass);
      process.exit(ok ? 0 : 1);
    }
  }

  // If not found or placeholder, ask user interactively
  console.log(`No active credentials found in .env.local.\n`);
  const inputEmail = await prompt(`Enter Gmail Address (e.g. papanarohith45@gmail.com): `);
  const inputPass = await prompt(`Enter 16-character Google App Password: `);

  if (!inputEmail || !inputPass) {
    console.error(`\x1b[31m[ERROR]\x1b[0m Both Email and App Password are required.`);
    process.exit(1);
  }

  saveEnvLocal(inputEmail, inputPass);
  const ok = await verifySmtp(inputEmail, inputPass);
  process.exit(ok ? 0 : 1);
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
