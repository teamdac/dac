export interface User {
  id: string;
  email: string;
  name: string;
  creditsEarned: number;
  enrollments: Enrollment[];
}

export interface Enrollment {
  id: string;
  courseId: string;
  status: "in-progress" | "completed" | "failed";
  enrolledDate: string;
  testScore?: number;
  completedDate?: string;
}

export const mockUser: User = {
  id: "user-1",
  email: "student@example.com",
  name: "Alex Johnson",
  creditsEarned: 6,
  enrollments: [
    {
      id: "enrollment-1",
      courseId: "1",
      status: "completed",
      enrolledDate: "2024-03-01",
      testScore: 82,
      completedDate: "2024-03-15",
    },
    {
      id: "enrollment-2",
      courseId: "2",
      status: "in-progress",
      enrolledDate: "2024-06-01",
    },
  ],
};