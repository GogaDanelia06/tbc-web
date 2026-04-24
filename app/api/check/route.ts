import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const users = await sql`SELECT * FROM users`;
  const accounts = await sql`SELECT * FROM accounts`;
  return NextResponse.json({ users, accounts });
}