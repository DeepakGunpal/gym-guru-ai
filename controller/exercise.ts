import ExerciseModel from "@/models/exercise";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongoose";
import UserModel from "@/models/user";
import WorkoutPlanModel from "@/models/workoutPlan";
import { getQueryParams } from "@/utils/helper";

export const fetchExercise = async ({ id }: { id: ObjectId }) => {
  try {
    const exercise = await ExerciseModel.findById(id);
    return NextResponse.json(exercise);
  } catch (error: any) {
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const fetchExercises = async (req: NextRequest) => {
  try {
    const queryParams = getQueryParams(req.nextUrl.searchParams);

    const exercises = await ExerciseModel.find(queryParams)
      .select(queryParams?.select?.toString())
      .lean();
    return NextResponse.json({
      status: true,
      count: exercises.length,
      data: exercises,
    });
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

export const fetchWorkoutPlan = async (req: NextRequest) => {
  try {
    const queryParams = getQueryParams(req.nextUrl.searchParams);

    const workoutPlan = await WorkoutPlanModel.find(queryParams)
      .populate({
        path: "exercises.exercise",
        select: queryParams?.eSelect,
      })
      .select(queryParams?.select)
      .lean();

    return NextResponse.json({
      status: true,
      count: workoutPlan?.length,
      data: workoutPlan,
    });
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ fetchWorkoutPlans ~ error:",
      error?.message
    );
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const createWorkoutPlan = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const workoutPlan = await WorkoutPlanModel.create(data);
    console.log(
      "🚀 ~ file: public.ts:8 ~ createWorkoutPlan ~ workoutPlan:",
      workoutPlan
    );
    return NextResponse.json(workoutPlan);
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ createWorkoutPlan ~ error:",
      error?.message
    );
    return NextResponse.json({ status: 400, message: error?.message });
  }
};
