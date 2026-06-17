import { User } from "@/lib/types";

export const mockUser: User = {
  id: "user-123",
  email: "student@example.com",
  fullName: "Alex Johnson",
  university: "Not selected yet",
  creditsEarned: 6,
  enrollments: [
    {
      id: "enrollment-1",
      courseId: "1",
      status: "completed",
      testScore: 82,
      completedDate: "2024-03-15",
    },
    {
      id: "enrollment-2",
      courseId: "2",
      status: "in-progress",
    },
  ],
};