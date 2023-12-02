import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export async function GET() {
  const session = [];
  // const session = await getServerSession(authOptions);
  console.log(session);
  return NextResponse.json({ session });
}
