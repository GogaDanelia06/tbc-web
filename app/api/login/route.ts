import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const users = await sql`
    SELECT * FROM users WHERE username = ${username}
  `;

  const user = users[0];

  if (!user) {
    return NextResponse.json({ error: "Invalid user" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password_hash);

  if (!valid) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  return NextResponse.json({
    id: user.id,
    fullName: user.full_name,
  });
}