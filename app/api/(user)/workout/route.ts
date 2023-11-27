import { createWorkoutPlan, fetchWorkoutPlan } from "@/controller/exercise";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectToDB();
  return fetchWorkoutPlan(req);
}

export async function POST(req: NextRequest) {
  await connectToDB();
  return createWorkoutPlan(req);
}

export async function PUT() {
  return NextResponse.json("Hello from User PUT request!");
}

export async function PATCH() {
  return NextResponse.json("Hello from User PATCH request!");
}
