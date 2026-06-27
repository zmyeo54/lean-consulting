import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple hardcoded credentials check
    if (username === "admin" && password === "admin") {
      // Store login state in sessionStorage
      sessionStorage.setItem("adminLoggedIn", "true");
      sessionStorage.setItem("adminUsername", username);
      setLocation("/admin/blog");
    } else {
      setError("Invalid username or password");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] py-12 px-4">
      <Card className="w-full max-w-md p-8 border-2 border-[#E6DFD5]">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#1A1513] mb-2">Admin Login</h1>
          <p className="text-[#6B6158]">Access the blog CMS</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-[#1A1513] mb-2">
              Username
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="border-2 border-[#E6DFD5] focus:border-[#D4AF37]"
              disabled={isLoading}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-[#1A1513] mb-2">
              Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="border-2 border-[#E6DFD5] focus:border-[#D4AF37]"
              disabled={isLoading}
              required
            />
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white font-semibold py-2.5 rounded-lg transition-all"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 rounded-lg bg-[#FAF7F2] border-2 border-[#E6DFD5]">
          <p className="text-xs font-semibold text-[#1A1513] mb-2">Demo Credentials:</p>
          <p className="text-xs text-[#6B6158]">
            <strong>Username:</strong> admin
          </p>
          <p className="text-xs text-[#6B6158]">
            <strong>Password:</strong> admin
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setLocation("/")}
            className="text-sm text-[#8b0000] hover:text-[#6b0000] font-medium transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </Card>
    </div>
  );
}
