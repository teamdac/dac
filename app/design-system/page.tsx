"use client";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function DesignSystemPage() {
  const colors = {
    Primary: {
      "50": "#eff6ff",
      "100": "#dbeafe",
      "200": "#bfdbfe",
      "300": "#93c5fd",
      "400": "#60a5fa",
      "500": "#3b82f6",
      "600": "#2563eb",
      "700": "#1d4ed8",
      "800": "#1e40af",
      "900": "#1e3a8a",
    },
    Secondary: {
      "50": "#f8fafc",
      "100": "#f1f5f9",
      "200": "#e2e8f0",
      "300": "#cbd5e1",
      "400": "#94a3b8",
      "500": "#64748b",
      "600": "#475569",
      "700": "#334155",
      "800": "#1e293b",
      "900": "#0f172a",
    },
    Success: {
      "500": "#22c55e",
      "600": "#16a34a",
    },
    Warning: {
      "500": "#f59e0b",
      "600": "#d97706",
    },
    Error: {
      "500": "#ef4444",
      "600": "#dc2626",
    },
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-2">DAC Design System</h1>
        <p className="text-gray-600 mb-12">
          Complete design tokens and component showcase
        </p>

        {/* COLORS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Colors</h2>
          <div className="space-y-12">
            {Object.entries(colors).map(([colorName, shades]) => (
              <div key={colorName}>
                <h3 className="text-xl font-semibold mb-4">{colorName}</h3>
                <div className="grid grid-cols-5 gap-4">
                  {Object.entries(shades).map(([shade, hex]) => (
                    <div key={shade} className="text-center">
                      <div
                        className="w-full h-24 rounded-lg mb-2 border border-gray-200"
                        style={{ backgroundColor: hex }}
                      ></div>
                      <p className="text-sm font-mono">{shade}</p>
                      <p className="text-xs text-gray-500">{hex}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">H1 - Hero Title (48px)</h1>
              <p className="text-sm text-gray-500">Bold, 1.2 line height</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">H2 - Section Title (36px)</h2>
              <p className="text-sm text-gray-500">Bold, 1.25 line height</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">H3 - Subsection (28px)</h3>
              <p className="text-sm text-gray-500">Bold, 1.3 line height</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">H4 - Card Title (20px)</h4>
              <p className="text-sm text-gray-500">Bold, 1.4 line height</p>
            </div>
            <div>
              <p className="text-lg">Body Large (18px) - Regular weight</p>
              <p className="text-sm text-gray-500">1.5 line height</p>
            </div>
            <div>
              <p className="text-base">Body Regular (16px) - Regular weight</p>
              <p className="text-sm text-gray-500">1.5 line height</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Body Small (14px) - Regular weight</p>
              <p className="text-xs text-gray-500">1.5 line height</p>
            </div>
          </div>
        </section>

        {/* BUTTONS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Buttons</h2>
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <Button size="sm">Small Button</Button>
                <Button size="md">Medium Button</Button>
                <Button size="lg">Large Button</Button>
                <Button disabled>Disabled Button</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Secondary Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <Button variant="secondary" size="sm">
                  Small Button
                </Button>
                <Button variant="secondary" size="md">
                  Medium Button
                </Button>
                <Button variant="secondary" size="lg">
                  Large Button
                </Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Outline Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <Button variant="outline" size="sm">
                  Small Button
                </Button>
                <Button variant="outline" size="md">
                  Medium Button
                </Button>
                <Button variant="outline" size="lg">
                  Large Button
                </Button>
              </div>
            </div>

            {/* Full Width */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Full Width Button</h3>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold mb-2">Card Title</h3>
              <p className="text-gray-600">
                This is a standard card component with padding and subtle shadow.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-2">Another Card</h3>
              <p className="text-gray-600">
                Cards are perfect for organizing content into contained sections.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-2">Third Card</h3>
              <p className="text-gray-600">
                Use cards to highlight key information and create visual hierarchy.
              </p>
            </Card>
          </div>
        </section>

        {/* SPACING */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Spacing Scale</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-20 font-mono text-sm">xs (4px)</span>
              <div className="bg-primary-500 h-4" style={{ width: "4px" }}></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 font-mono text-sm">sm (8px)</span>
              <div className="bg-primary-500 h-4" style={{ width: "8px" }}></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 font-mono text-sm">md (16px)</span>
              <div className="bg-primary-500 h-4" style={{ width: "16px" }}></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 font-mono text-sm">lg (24px)</span>
              <div className="bg-primary-500 h-4" style={{ width: "24px" }}></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 font-mono text-sm">xl (32px)</span>
              <div className="bg-primary-500 h-4" style={{ width: "32px" }}></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 font-mono text-sm">2xl (48px)</span>
              <div className="bg-primary-500 h-4" style={{ width: "48px" }}></div>
            </div>
          </div>
        </section>

        {/* FORMS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Form Elements</h2>
          <Card className="max-w-md">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Button fullWidth>Sign in</Button>
            </div>
          </Card>
        </section>

        {/* STATUS COLORS */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Status Colors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-green-50 border-green-200">
              <div
                className="w-12 h-12 rounded-full mb-4"
                style={{ backgroundColor: "#22c55e" }}
              ></div>
              <h3 className="text-lg font-semibold text-green-900">Success</h3>
              <p className="text-sm text-green-700">#22c55e</p>
            </Card>
            <Card className="bg-yellow-50 border-yellow-200">
              <div
                className="w-12 h-12 rounded-full mb-4"
                style={{ backgroundColor: "#f59e0b" }}
              ></div>
              <h3 className="text-lg font-semibold text-yellow-900">Warning</h3>
              <p className="text-sm text-yellow-700">#f59e0b</p>
            </Card>
            <Card className="bg-red-50 border-red-200">
              <div
                className="w-12 h-12 rounded-full mb-4"
                style={{ backgroundColor: "#ef4444" }}
              ></div>
              <h3 className="text-lg font-semibold text-red-900">Error</h3>
              <p className="text-sm text-red-700">#ef4444</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}