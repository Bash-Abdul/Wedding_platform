"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthActions } from "@/hooks/useAuthActions";

export default function LoginPage() {
  const router = useRouter();
//   const search = useSearchParams();
  const callbackUrl = "/";

  const { login } = useAuthActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      const res = await login(email, password, {
        optimisticName: email.split("@")[0] || "You",
      });

      setLoading(false);

      if (!res?.ok) {
        setErr("Invalid email or password");
        
        return;
      }

      // optional navigation after successful login
      router.replace(callbackUrl);
    } catch (e: any) {
      setErr(e?.message || "Login failed");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm space-y-4 border rounded-lg p-6"
      >
        <h1 className="text-xl font-semibold text-center">Sign in</h1>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Your password"
            required
          />
        </div>

        {err ? <p className="text-sm text-red-600">{err}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded border p-2 font-medium"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-xs text-center text-gray-500">
          Trouble signing in? Check your credentials and try again.
        </p>
      </form>
    </main>
  );
}
