import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TransferTemplatesClient from "./TransferTemplatesClient";

export default async function TransferTemplatesPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    redirect("/");
  }

  return <TransferTemplatesClient userId={Number(userId)} />;
}