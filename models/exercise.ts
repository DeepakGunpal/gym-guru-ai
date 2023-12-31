import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    targetedBodyPart: {
      type: String,
      enum: [
        "chest",
        "tricep",
        "shoulder",
        "back",
        "bicep",
        "leg",
        "abs",
        "traps",
        "rear delt",
      ],
    },
    reps: {
      noob: [Number],
      beginner: [Number],
      intermediate: [Number],
      advanced: [Number],
      elite: [Number],
      freak: [Number],
    },
    type: {
      type: String,
      enum: ["Body Weight", "External Weight"],
    },
    image: String,
    difficultyLevel: {
      type: String,
      enum: ["noob", "beginner", "intermediate", "advanced", "elite", "freak"],
    },
    equipmentNeeded: String,
    muscleGroupsTargeted: [String],
    variations: [String],
    notesAndTips: String,
    caloriesBurned: String,
    tagsOrCategories: [String],
    userRatings: [
      {
        userId: mongoose.Schema.Types.ObjectId,
        rating: Number,
        review: String,
      },
    ],
    videoTutorials: String,
    safetyPrecautions: [String],
  },
  { timestamps: true }
);

const Exercise =
  mongoose.models.exercise || mongoose.model("exercise", ExerciseSchema);

export default Exercise;
