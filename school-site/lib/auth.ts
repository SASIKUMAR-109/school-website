import {Pool} from "pg";
import { betterAuth } from "better-auth";
const url = process.env.DATABASE_URL;       

if (!url) {                            
  throw new Error('DATABASE_URL is missing');
}
if (!process.env.BETTER_AUTH_SECRET) {
    throw new Error('BETTER_AUTH_SECRET is missing')
}
export const auth = betterAuth({
  database: new Pool({ connectionString: url }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: process.env.ALLOW_ADMIN_SEED !== "true",
  },
  baseURL: process.env.BETTER_AUTH_URL,
});