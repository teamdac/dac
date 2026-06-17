"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "My Courses" },
    { href: "/dashboard/credits", label: "My Credits" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-6">
          <Link href="/" className="text-2xl font-bold text-blue-600 mb-8 block">
            DAC
          </Link>

          <nav className="space-y-2 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition ${
                  pathname === item.href
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-gray-200">
            <Button fullWidth variant="secondary">
              Sign out
            </Button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}