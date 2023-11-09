import mongoose from "mongoose";
import bcrypt from "bcrypt";

const otpSchema = new mongoose.Schema(
  {
    number: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, index: { expires: 300 } }, //todo delete after 5 minutes
  },
  { timestamps: true }
);

const Otp = mongoose.models.otp || mongoose.model("otp", otpSchema);

//todo hash otp before saving
otpSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.otp = await bcrypt.hash(this.otp, salt);
  next();
});

export default Otp;
