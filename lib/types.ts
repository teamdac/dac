export interface Course {
  id: string;
  title: string;
  description: string;
  creditsEarned: number;
  priceCents: number;
  duration: string;
  imageUrl: string;
  passingScore: number;
}

export interface Enrollment {
  id: string;
  courseId: string;
  status: "active" | "completed" | "in-progress";
  enrolledDate: string;
  completedDate?: string;
  testScore?: number;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  university?: string;
  creditsEarned: number;
  enrollments: Enrollment[];
}

export interface TestResult {
  id: string;
  score: number;
  passed: boolean;
  dateTaken: string;
  courseTitle: string;
}