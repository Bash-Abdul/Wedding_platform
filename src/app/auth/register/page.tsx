"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Heart, Eye, EyeOff } from "lucide-react";
import { api } from "@/lib/axios";
import { useAuthActions } from "@/hooks/useAuthActions";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [names, setNames] = useState(""); // "Alex & Jordan" or full name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const search = useSearchParams();
  const { login } = useAuthActions();

  const leftBg =
    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaCKgstbESgMwdKC8damunV4ebIOzIfOB2EqLAAECA16a7HvaXz1WLvsBuxlUFoyTEf5s-fB-O5OKLvgVgEI-QVyzhkCLteOHrqQwyJkvM7tUCItSvx03wsvF53S_qLkWirf0Tu0aqWPcHZcEGcX83RTr0rjB2xVnNiqUmdQklrXXwdTfoXraPF5Q6RG-Sh_ypwCAJX-lI9fAlyer4tJXUDczOtKBhNRl1BZlEOXkWi_92OKI_34NTX6dQ4w4msmURHqRu__ciTWM")';

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      const payload = {
        name: names?.trim() || null,
        email,
        password, // your API should hash on server
      };

      // 1) Create the account
      await api.post("/api/auth/register", payload);

      // 2) Auto-login for smooth UX
      const res = await login(payload.email, password);
      if (!res?.ok) {
        setErr(res?.error || "Sign up succeeded but auto login failed");
        setLoading(false);
        return;
      }

      // 3) Redirect (preserve ?from= for deep links)
      const from = search.get("from") || "/dashboard";
      router.push(from);
      router.refresh();
    } catch (e: any) {
      setErr(e?.message || "Could not create your account");
      setLoading(false);
    }
  }

  return (
    <div className="font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-login-light overflow-x-hidden">
        <main className="grow">
          <div className="flex min-h-screen">
            {/* Left visual panel */}
            <div className="relative hidden w-1/2 flex-col items-center justify-center lg:flex">
              <div
                className="absolute inset-0 h-full w-full bg-center bg-no-repeat bg-cover"
                role="img"
                aria-label="A beautifully set wedding dinner table with floral arrangements and candles."
                style={{ backgroundImage: leftBg }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Right form panel */}
            <div className="flex w-full flex-col items-center justify-center bg-login-light p-6 lg:w-1/2">
              <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center text-center">
                  <Heart className="h-12 w-12 text-blush" aria-hidden="true" />
                  <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.033em] text-[#181113]">
                    Begin Your Forever
                  </h1>
                  <p className="mt-2 text-base text-[#181113]">
                    Create your free wedding website and manage your guests in one place.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    {/* Names */}
                    <label className="flex flex-col">
                      <p className="pb-2 text-base font-medium text-[#181113]">Your Names</p>
                      <input
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        placeholder="Alex & Jordan"
                        className="form-input h-14 rounded-lg border border-[#e5dcdf] bg-white p-[15px] text-base text-[#181113] placeholder:text-[#886370] focus:border-login-primary focus:outline-0 focus:ring-0"
                      />
                    </label>

                    {/* Email */}
                    <label className="flex flex-col">
                      <p className="pb-2 text-base font-medium text-[#181113]">Email</p>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="form-input h-14 rounded-lg border border-[#e5dcdf] bg-white p-[15px] text-base text-[#181113] placeholder:text-[#886370] focus:border-login-primary focus:outline-0 focus:ring-0"
                      />
                    </label>

                    {/* Password */}
                    <div className="flex flex-col">
                      <p className="pb-2 text-base font-medium text-[#181113]">Create Password</p>
                      <div className="relative flex w-full items-stretch">
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          required
                          minLength={8}
                          className="form-input h-14 w-full rounded-lg border border-[#e5dcdf] bg-white p-[15px] text-base text-[#181113] placeholder:text-[#886370] focus:border-login-primary focus:outline-0 focus:ring-0"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((s) => !s)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#886370]"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          title={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    {err ? <p className="text-sm text-red-600">{err}</p> : null}

                    {/* Submit */}
                    <button
                      className="mt-2 flex w-full items-center justify-center rounded-lg bg-blush px-4 py-3.5 text-base font-bold text-[#181113] transition-colors hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-login-primary focus-visible:ring-offset-2 focus-visible:ring-offset-login-light cursor-pointer disabled:opacity-60"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Creating account..." : "Create My Account"}
                    </button>
                  </form>

                  {/* Socials (optional, wire later) */}
                  <div className="flex items-center my-6">
                    <hr className="grow border-t border-black/10" />
                    <span className="mx-4 text-sm text-[#886370]">or</span>
                    <hr className="grow border-t border-black/10" />
                  </div>

                  <div className="flex flex-row gap-4">
                    <button
                      type="button"
                      className="flex cursor-pointer items-center justify-center w-full gap-3 rounded-lg h-12 px-6 border border-black/10 bg-white text-[#181113] text-base font-medium hover:bg-black/5 transition-colors"
                    >
                      {/* Replace with actual OAuth later */}
                      <span>Google</span>
                    </button>
                    <button
                      type="button"
                      className="flex cursor-pointer items-center justify-center w-full gap-3 rounded-lg h-12 px-6 border border-black/10 bg-white text-[#181113] text-base font-medium hover:bg-black/5 transition-colors"
                    >
                      <span>Apple</span>
                    </button>
                  </div>

                  <p className="text-center text-sm text-[#181113]">
                    Already have an account?{" "}
                    <a className="font-bold text-login-primary hover:underline" href="/auth/login">
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* /Right form panel */}
          </div>
        </main>
      </div>
    </div>
  );
}
