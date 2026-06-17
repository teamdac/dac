import { Course } from "@/lib/types";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "College Algebra",
    description:
      "Master fundamental algebra concepts including equations, polynomials, and functions. Earn 3 college credits.",
    creditsEarned: 3,
    priceCents: 9999,
    duration: "8 weeks",
    imageUrl: "/images/algebra.jpg",
    passingScore: 70,
  },
  {
    id: "2",
    title: "English Composition I",
    description:
      "Develop critical writing skills through essays, research papers, and peer review. Earn 3 college credits.",
    creditsEarned: 3,
    priceCents: 9999,
    duration: "10 weeks",
    imageUrl: "/images/english.jpg",
    passingScore: 70,
  },
  {
    id: "3",
    title: "Introduction to Psychology",
    description:
      "Explore human behavior, cognition, and mental processes. Earn 3 college credits.",
    creditsEarned: 3,
    priceCents: 12999,
    duration: "12 weeks",
    imageUrl: "/images/psychology.jpg",
    passingScore: 65,
  },
  {
    id: "4",
    title: "US History: 1865-Present",
    description:
      "Survey modern American history from Reconstruction to the present. Earn 4 college credits.",
    creditsEarned: 4,
    priceCents: 11999,
    duration: "12 weeks",
    imageUrl: "/images/history.jpg",
    passingScore: 70,
  },
  {
    id: "5",
    title: "Biology I: General Biology",
    description:
      "Comprehensive study of cellular and molecular biology, genetics, and evolution. Earn 4 college credits.",
    creditsEarned: 4,
    priceCents: 14999,
    duration: "14 weeks",
    imageUrl: "/images/biology.jpg",
    passingScore: 70,
  },
  {
    id: "6",
    title: "Economics Principles",
    description:
      "Fundamentals of micro and macroeconomics, supply/demand, and market structures. Earn 3 college credits.",
    creditsEarned: 3,
    priceCents: 9999,
    duration: "10 weeks",
    imageUrl: "/images/economics.jpg",
    passingScore: 70,
  },
];

export function getCourseById(id: string): Course | undefined {
  return mockCourses.find((course) => course.id === id);
}