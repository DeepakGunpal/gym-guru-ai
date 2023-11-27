import { fetchExercise } from "@/controller/exercise";
import { connectToDB } from "@/utils/db";
import { ObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: ObjectId } }
) {
  await connectToDB();
  return fetchExercise(params);
}

export async function PUT() {
  return NextResponse.json("Hello from User PUT request!");
}

export async function PATCH() {
  return NextResponse.json("Hello from User PATCH request!");
}
