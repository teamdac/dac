import type { Course, User, Enrollment } from "./types";

const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const API_URL = "https://api.airtable.com/v0";

async function fetchTable(table: string, params = ""): Promise<any[]> {
  if (!API_KEY || !BASE_ID) {
    throw new Error("Missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID in .env.local");
  }
  const url = `${API_URL}/${BASE_ID}/${encodeURIComponent(table)}${params}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Airtable error ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data.records ?? [];
}

function toCourse(record: any): Course {
  const f = record.fields ?? {};
  return {
    id: record.id,
    title: f["Course Name"] ?? "Untitled Course",
    description: f["Description"] ?? "",
    creditsEarned: f["Credits Value"] ?? 0,
    priceCents: 0,
    duration: f["Schedule"] ?? "",
    imageUrl: "",
    passingScore: 70,
  };
}

function toUser(record: any): User {
  const f = record.fields ?? {};
  const registered: string[] = f["Courses Registered"] ?? [];
  const enrollments: Enrollment[] = registered.map((courseId, i) => ({
    id: `${record.id}-${i}`,
    courseId,
    status: f["Enrollment Status"] === "Completed" ? "completed" : "active",
    enrolledDate: record.createdTime ?? new Date().toISOString(),
  }));
  return {
    id: record.id,
    email: f["Email"] ?? "",
    fullName: f["Student Name"] ?? "",
    creditsEarned: Array.isArray(f["Credits Earned"]) ? f["Credits Earned"].length : 0,
    enrollments,
  };
}

export async function getCourses(): Promise<Course[]> {
  const records = await fetchTable("Courses");
  return records.map(toCourse);
}

export async function getCourseById(id: string): Promise<Course | null> {
  const courses = await getCourses();
  return courses.find((c) => c.id === id) ?? null;
}

export async function getUser(): Promise<User | null> {
  const records = await fetchTable("Students");
  if (records.length === 0) return null;
  return toUser(records[0]);
}
