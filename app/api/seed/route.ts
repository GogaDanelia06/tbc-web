import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    // USERS
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        full_name TEXT NOT NULL
      )
    `;

    // ACCOUNTs
    await sql`
      CREATE TABLE IF NOT EXISTS accounts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        name TEXT,
        balance NUMERIC,
        currency TEXT
      )
    `;

    // TRANSACTIONS
    await sql`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        title TEXT,
        amount TEXT,
        date TEXT
      )
    `;

    // HASH PASSWORD
    const password = await bcrypt.hash("123456", 10);

    // INSERT USER
    const user = await sql`
      INSERT INTO users (username, password_hash, full_name)
      VALUES ('goga', ${password}, 'Goga Danelia')
      ON CONFLICT (username) DO NOTHING
      RETURNING id
    `;

    // get user id
    const userId =
      user[0]?.id ||
      (
        await sql`SELECT id FROM users WHERE username='goga'`
      )[0].id;

    // INSERT ACCOUNT
    await sql`
      INSERT INTO accounts (user_id, name, balance, currency)
      VALUES (${userId}, 'TBC CARD', 935.10, 'GEL')
      ON CONFLICT DO NOTHING
    `;

    // INSERT TRANSACTIONS
    await sql`
      INSERT INTO transactions (user_id, title, amount, date)
      VALUES
      (${userId}, 'OPIUMI, TBILISI', '-5.60₾', '24 Apr 2026'),
      (${userId}, 'APPLE.COM', '-0.69$', '23 Apr 2026')
      ON CONFLICT DO NOTHING
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}