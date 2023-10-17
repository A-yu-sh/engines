import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import EngineMODEL from "@/models/EngineMODEL";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { name, email } = await request.json();
  await CONNECT_MONGO_DB();
  await EngineMODEL.create({ name, email });
  return NextResponse.json({ message: "user Registered" });
}

export async function GET() {
  await CONNECT_MONGO_DB();
  const res = await EngineMODEL.find();
  return NextResponse.json({ res });
}
