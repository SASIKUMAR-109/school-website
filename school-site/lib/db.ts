import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL;       

if (!url) {                            
  throw new Error('connection failed');
}

export const sql = neon(url);          