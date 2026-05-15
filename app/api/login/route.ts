import { NextResponse } from "next/server";
import { mockUsers } from "@/lib/mockData";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { error: "Missing username or password" },
      { status: 400 }
    );
  }

  const user = mockUsers.find((u) => u.username === username);

    if (!user) {
  return NextResponse.json(
    { error: "Invalid username or password" },
    { status: 401 }
  );
}

const passwordValid = await bcrypt.compare(password, user.password_hash);

if (!passwordValid) {
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({
    success: true,
    user: {
      id: user.id,
      fullName: user.full_name,
    },
  });

res.cookies.set("userId", String(user.id), {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: process.env.NODE_ENV === "development" ? 60 * 60 : 60 * 60 * 24,
});

  return res;
}