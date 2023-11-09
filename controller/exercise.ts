import ExerciseModel from "@/models/exercise";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongoose";
import UserModel from "@/models/user";

export const fetchExercise = async ({ id }: { id: ObjectId }) => {
  try {
    const exercise = await ExerciseModel.findById(id);
    return NextResponse.json(exercise);
  } catch (error: any) {
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const fetchExercises = async () => {
  try {
    const exercises = await ExerciseModel.find();
    return NextResponse.json(exercises);
  } catch (error: any) {
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const createExercise = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const exercise = await ExerciseModel.create(data);
    console.log(
      "🚀 ~ file: public.ts:8 ~ createExercise ~ exercise:",
      exercise
    );
    return NextResponse.json(exercise);
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ createExercise ~ error:",
      error?.message
    );
    return NextResponse.json({ status: 400, message: error?.message });
  }
};
