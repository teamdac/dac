"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { mockUser } from "@/lib/mock";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Settings saved:", formData);
    alert("Settings saved!");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <Card className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Profile information</h2>
        <div className="space-y-4">
          <Input
            label="Full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Button onClick={handleSave}>Save changes</Button>
        </div>
      </Card>

      <Card className="border-red-200 bg-red-50">
        <h2 className="text-xl font-bold text-red-900 mb-4">Danger zone</h2>
        <p className="text-red-700 mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
          Delete account
        </Button>
      </Card>
    </div>
  );
}