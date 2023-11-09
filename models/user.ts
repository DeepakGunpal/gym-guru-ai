import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    number: { type: String, required: true, unique: true },
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    type: {
      type: String,
      enum: ["user", "trainer", "admin"],
      default: "user",
    },
    access: [String],
    fitnessGoals: [String],
    fitnessLevel: String,
    preferredWorkoutTypes: [String],
    workoutHistory: [
      {
        date: Date,
        exerciseId: mongoose.Schema.Types.ObjectId,
        sets: Number,
        reps: Number,
        weightUsed: Number,
      },
    ],
    usershipStatus: String,
    paymentHistory: [
      {
        date: Date,
        amount: Number,
        description: String,
      },
    ],
    profilePicture: String,
    socialMediaLinks: [String],
    emergencyContact: {
      name: String,
      relationship: String,
      phone: String,
    },
    medicalInformation: {
      allergies: [String],
      medicalConditions: [String],
      medications: [String],
    },
    fitnessAssessment: {
      weight: Number,
      height: Number,
      bodyFatPercentage: Number,
      maxWeightLifted: Number,
      fitnessScore: Number,
    },
    fitnessPlan: {
      workoutPlans: [mongoose.Schema.Types.ObjectId],
      nutritionPlan: String,
    },
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: String, default: null },
  },
  { timestamps: true }
);

const User = mongoose.models.user || mongoose.model("user", UserSchema);

export default User;
