"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export function Header() {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/(auth)");

  if (isAuthPage) return null;

  const isDashboard = pathname?.includes("/dashboard");

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <nav className="container flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-primary-600">
          DAC
        </Link>

        <div className="flex gap-6 items-center">
          {isDashboard ? (
            <>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-primary-600 transition"
              >
                Courses
              </Link>
              <Link
                href="/dashboard/credits"
                className="text-gray-700 hover:text-primary-600 transition"
              >
                My Credits
              </Link>
              <Link
                href="/dashboard/settings"
                className="text-gray-700 hover:text-primary-600 transition"
              >
                Settings
              </Link>
              <Button variant="secondary" size="sm">
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/courses"
                className="text-gray-700 hover:text-primary-600 transition"
              >
                Courses
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Get started</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}