import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return NextResponse.json(
    {
      keywords:
        "Robotic Pool Cleaners, Automatic Pool Vacuum, Best Robotic Skimmer",
    },
    { status: 200 }
  );
}
