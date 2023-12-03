import User from "@/models/User";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password, name } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  await connect();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("User already exists", { status: 422 });
  }
  const newUser = new User({
    email,
    password: hashedPassword,
    name,
  });

  try {
    const user = await newUser.save();
    user.password = undefined;
    return new NextResponse(user, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
