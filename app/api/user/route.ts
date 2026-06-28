import { NextResponse } from "next/server";
import { getUser } from "@/lib/airtable";

export async function GET() {
  try {
    const user = await getUser();
    return NextResponse.json(user);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
