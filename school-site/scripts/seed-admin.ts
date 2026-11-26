// scripts/seed-admin.ts
import { auth } from "../lib/auth";

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is missing in .env.local`);
  }
  return value;
}

async function main() {
  const name = required("ADMIN_NAME");
  const email = required("ADMIN_EMAIL");
  const password = required("ADMIN_PASSWORD");

  await auth.api.signUpEmail({
    body: { name, email, password },
  });

  console.log(`Admin created: ${email}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });