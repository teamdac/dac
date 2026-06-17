import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button fullWidth>Go to homepage</Button>
          </Link>
          <Link href="/courses">
            <Button fullWidth variant="outline">Browse courses</Button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Need help? <a href="#" className="text-blue-600 hover:underline">Contact support</a></p>
        </div>
      </div>
    </div>
  );
}