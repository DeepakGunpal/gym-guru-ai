import mongoose from "mongoose";

const workoutPlanSchema = new mongoose.Schema(
  {
    name: String, // Name of the workout plan
    description: String, // Description of the workout plan
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trainer", // Reference to the trainer who created the plan
    },
    exercises: [
      {
        exercise: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "exercise", // Reference to exercises included in the plan
        },
        sets: Number, // Number of sets for the exercise
        reps: Number, // Number of repetitions per set
        restBetweenSets: Number, // Rest duration between sets (in seconds)
      },
    ],
    duration: Number, // Duration of the workout plan (in minutes)
    daysPerWeek: Number, // Number of days per week the plan is intended to be followed
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const WorkoutPlan =
  mongoose.models.workoutplan ||
  mongoose.model("workoutplan", workoutPlanSchema);

export default WorkoutPlan;
