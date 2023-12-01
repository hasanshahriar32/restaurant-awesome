import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  await connect();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("User already exists", { status: 422 });
  }
  const NewUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    const user = await NewUser.save();
    // dis select password
    user.password = undefined;
    return new NextResponse(user, {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
