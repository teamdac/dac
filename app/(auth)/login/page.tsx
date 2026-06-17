"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card } from "@/components/Card";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log("Logged in:", formData);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <Card>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Sign in</h1>
        <p className="text-gray-600">Welcome back to DAC</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Remember me</span>
          </label>
          <Link href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button fullWidth loading={loading}>
          Sign in
        </Button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline font-semibold">
          Create one
        </Link>
      </p>
    </Card>
  );
}