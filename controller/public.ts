import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/models/user";
import OtpModel from "@/models/otpModel";
import bcrypt from "bcrypt";
import GymModel from "@/models/gym";
import mongoose from "mongoose";

export const signIn = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const user = await UserModel.findOne(data);
    return NextResponse.json(user);
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ createExercise ~ error:",
      error?.message
    );
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const signUp = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const user = await UserModel.create(data);
    return NextResponse.json(user);
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ createExercise ~ error:",
      error?.message
    );
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

function generateOTP() {
  // Generate a random number between 1000 and 9999
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp.toString(); // Convert the number to a string
}

export const sendOtp = async (req: NextRequest) => {
  try {
    const data = await req.json();
    console.log("🚀 ~ file: public.ts:43 ~ sendOtp ~ data:", data);
    const user = await UserModel.findOne(data);
    console.log("🚀 ~ file: public.ts:45 ~ sendOtp ~ user:", user);

    if (!user) {
      return NextResponse.json({ status: 400, message: "User Not Found" });
    }

    const headers = new Headers({
      "Content-Type": "application/json",
      authorization: process.env.SMS_KEY as string,
    });
    console.log("🚀 ~ file: public.ts:38 ~ sendOtp ~ headers:", headers);

    // Example usage
    const otp = generateOTP();
    console.log("Random OTP:", otp);

    const sendSms = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers,
      body: JSON.stringify({
        route: "otp",
        variables_values: otp,
        numbers: data?.number,
      }),
    }).then((res) => res.json());
    console.log("🚀 ~ file: public.ts:52 ~ sendOtp ~ sendSms:", sendSms);

    if (sendSms?.return) {
      const salt = await bcrypt.genSalt(10);
      await OtpModel.create({
        ...data,
        otp: await bcrypt.hash(otp, salt),
      });
      return NextResponse.json({ status: 200, body: "Otp Sent Successfully" });
    }

    return NextResponse.json(
      { status: false, message: "Failed To Send Otp" },
      { status: 400 }
    );
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ createExercise ~ error:",
      error?.message
    );
    return NextResponse.json(
      { status: false, message: error?.message },
      { status: 400 }
    );
  }
};

export const verifyOtp = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { number, otp } = data;
    //todo verify otp
    const otps = await OtpModel.find({ number }).lean();
    if (otps.length === 0) throw new Error("Otp Expired");

    //todo verify the latest otp by taking last saved doc with provided number
    const lastOTP = otps[otps.length - 1];
    const verifyOtp = await bcrypt.compare(otp, lastOTP.otp);
    if (!verifyOtp) throw new Error("Incorrect otp");
    await OtpModel.deleteMany({ number });

    return NextResponse.json({ status: 200, message: "OTP Verified" });
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ createExercise ~ error:",
      error?.message
    );
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const fetchAllGym = async () => {
  try {
    const gyms = await GymModel.find().lean();
    return NextResponse.json(gyms);
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ createExercise ~ error:",
      error?.message
    );
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const fetchGym = async (req: NextRequest, { id }: { id: string }) => {
  try {
    const gym = await GymModel.findById(new mongoose.Types.ObjectId(id)).lean();
    return NextResponse.json({ status: true, data: gym });
  } catch (error: any) {
    console.log(
      "🚀 ~ file: public.ts:10 ~ createExercise ~ error:",
      error?.message
    );
    return NextResponse.json({ status: 400, message: error?.message });
  }
};
