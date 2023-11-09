import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export const fetchUser = async (req: NextRequest, { id }: { id: string }) => {
  try {
    const user = await User.findById(id);
    return NextResponse.json({ status: true, data: user });
  } catch (error: any) {
    console.log("🚀 ~ file: user.ts:10 ~ fetchUser ~ error:", error?.message);
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const updateUser = async (req: NextRequest, { id }: { id: string }) => {
  try {
    const data = await req.json();
    console.log("🚀 ~ file: user.ts:10 ~ fetchUser ~ data:", data);
    const setter = { ...data };
    const user = await User.findByIdAndUpdate(id, setter, { new: true });
    return NextResponse.json({ status: true, data: user });
  } catch (error: any) {
    console.log("🚀 ~ file: user.ts:10 ~ fetchUser ~ error:", error?.message);
    return NextResponse.json({ status: 400, message: error?.message });
  }
};

export const inviteUser = async (req: NextRequest, { id }: { id: string }) => {
  try {
    const data = await req.json();
    console.log("🚀 ~ file: user.ts:10 ~ fetchUser ~ data:", data);
    return NextResponse.json({ status: true, message: "Invited" });
  } catch (error: any) {
    console.log("🚀 ~ file: user.ts:10 ~ fetchUser ~ error:", error?.message);
    return NextResponse.json({ status: 400, message: error?.message });
  }
};
