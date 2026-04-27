import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  const { username, fullName, password } = await req.json();

  if (!username || !fullName || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existingUser = await sql`
    SELECT id FROM users WHERE username = ${username}
  `;

  if (existingUser.length > 0) {
    return NextResponse.json(
      { error: "Username already exists" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const users = await sql`
    INSERT INTO users (username, full_name, password_hash)
    VALUES (${username}, ${fullName}, ${hashedPassword})
    RETURNING id, full_name
  `;

  const user = users[0];

  return NextResponse.json({
    id: user.id,
    fullName: user.full_name,
  });
}