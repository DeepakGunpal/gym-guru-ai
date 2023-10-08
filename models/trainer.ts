import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    phone: String,
    bio: String,
    certifications: [String],
    specialties: [String],
    experienceYears: Number,
    availability: [String],
    servicesOffered: [String],
    pricePerSession: Number,
    languagesSpoken: [String],
    reviews: [
      {
        memberId: mongoose.Schema.Types.ObjectId,
        rating: Number,
        review: String,
      },
    ],
    profilePicture: String,
    socialMediaLinks: [String],
    website: String,
    location: String,
  },
  { timestamps: true }
);

const Trainer =
  mongoose.models.trainer || mongoose.model("trainer", TrainerSchema);

export default Trainer;
