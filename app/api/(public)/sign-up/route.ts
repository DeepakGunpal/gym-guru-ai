import { signUp } from "@/controller/public";
import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();
  return signUp(req);
}
