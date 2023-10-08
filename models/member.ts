import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    fullName: String,
    username: String,
    email: String,
    phone: String,
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ["male", "female", "lgbtq"],
    },
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
    membershipStatus: String,
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
  },
  { timestamps: true }
);

const Member = mongoose.models.member || mongoose.model("member", MemberSchema);

export default Member;
