import mongoose from "mongoose";

const GymSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    number: { type: String, required: true, unique: true },
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
        memberId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        rating: Number,
        review: String,
      },
    ],
    profilePicture: String,
    instagram: String,
    facebook: String,
    website: String,
    location: String,
  },
  { timestamps: true }
);

const Gym = mongoose.models.gym || mongoose.model("gym", GymSchema);

export default Gym;
