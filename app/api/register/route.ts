import { NextResponse } from "next/server";
import { mockUsers } from "@/lib/mockData";

export async function POST(req: Request) {
  const { username, fullName, password } = await req.json();

  if (!username || !fullName || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // check if user already exists
  const existingUser = mockUsers.find((u) => u.username === username);

  if (existingUser) {
    return NextResponse.json(
      { error: "Username already exists" },
      { status: 409 }
    );
  }

  // create new user (mock)
  const newUser = {
    id: mockUsers.length + 1,
    username,
    full_name: fullName,
    password,
  };

  mockUsers.push(newUser);

  return NextResponse.json({
    id: newUser.id,
    fullName: newUser.full_name,
  });
}