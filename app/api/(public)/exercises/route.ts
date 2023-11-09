import { createExercise, fetchExercises } from "@/controller/exercise";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectToDB();
  return fetchExercises();
}

export async function POST(req: NextRequest) {
  await connectToDB();
  return createExercise(req);
}

export async function PUT() {
  return NextResponse.json("Hello from User PUT requet!");
}

export async function PATCH() {
  return NextResponse.json("Hello from User PATCH requet!");
}
