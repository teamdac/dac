import { NextResponse } from "next/server";
import { getCourses } from "@/lib/airtable";

export async function GET() {
  try {
    const courses = await getCourses();
    return NextResponse.json(courses);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
