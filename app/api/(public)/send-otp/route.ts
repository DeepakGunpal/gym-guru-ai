import { sendOtp } from "@/controller/public";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();
  return sendOtp(req);
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ status: true, message: "Test Passed" });
}
