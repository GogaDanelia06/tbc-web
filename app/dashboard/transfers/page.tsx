import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TransfersClient from "./TransfersClient";

export default async function TransfersPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    redirect("/");
  }

  return <TransfersClient userId={Number(userId)} />;
}