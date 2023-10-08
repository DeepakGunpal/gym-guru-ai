import { fetchExercise } from "@/controller/public";
import { connectToDB } from "@/utils/db";
import { ObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: ObjectId } }
) {
  await connectToDB();
  return fetchExercise(params);
}

export async function PUT() {
  return NextResponse.json("Hello from User PUT requet!");
}

export async function PATCH() {
  return NextResponse.json("Hello from User PATCH requet!");
}
