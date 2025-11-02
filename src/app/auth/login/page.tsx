
"use client";

// "use client";

import { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthActions } from "@/hooks/useAuthActions";
import React, { useState } from "react";
import { Heart, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
    const search = useSearchParams();
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
      const res = await login(email, password);

      // setLoading(false);

      if (!res?.ok) {
        setErr("Invalid email or password" || res?.error);
        console.log(res?.error)
        setLoading(false);
        return;
      }

      // optional navigation after successful login
      // router.replace(callbackUrl);

      // Get the redirect URL from query params or default to home
      const from = search.get("from") || "/dashboard"; 
      router.push(from);
      router.refresh();

      return;
    } catch (e: any) {
      console.error("Login exception:", e);
      setErr(e?.message || "Login failed");
      setLoading(false);
    }
  }

  const leftBg =
    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCy8lYkqiKpkUgSGAr8LIqPzFBTdTMuhNrAitxgMZ6CuNgtKiObhpnj_-JXoQQ1nw6Kq2GQ8AAOpIdPYSfFH-Vbi3aBlhrKuiashMJI-RPjSl2RTwGS13f7LO5d78HTm5MMivpbV48AA2yhno_hZyLC8K7LMcBFOp6NUMEm4t4J2mVkUsiLWQFz8Lul2IoKYOq3gyxRvHP1Um9ZNKftA87r3l2E8xHN8HMqjap-vXENA_0SBoTmxcN30xymCIYazXrouW223xsqyjg")';

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
                aria-label="Soft focus image of pink and white peonies arranged elegantly for a wedding."
                style={{ backgroundImage: leftBg }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Right form panel */}
            <div className="flex w-full flex-col items-center justify-center bg-login-light p-6 lg:w-1/2">
              <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center text-center">
                  <Heart
                    className="h-12 w-12 text-login-primary"
                    aria-hidden="true"
                  />
                  <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.033em] text-[#181113]">
                    Welcome Back
                  </h1>
                  <p className="mt-2 text-base text-[#181113]">
                    Log in to your account to continue planning your big day.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <form className="flex flex-col gap-4">
                    {/* Email */}
                    <label className="flex flex-col">
                      <p className="pb-2 text-base font-medium text-[#181113]">
                        Email Address
                      </p>
                      {/* <input
                        type="email"
                        placeholder="Enter your email address"
                        className="form-input h-14 rounded-lg border border-[#e5dcdf] bg-white p-[15px] text-base text-[#181113] placeholder:text-[#886370] focus:border-login-primary focus:outline-0 focus:ring-0"
                      /> */}

                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // className="w-full border rounded p-2"
                        className="form-input h-14 rounded-lg border border-[#e5dcdf] bg-white p-[15px] text-base text-[#181113] placeholder:text-[#886370] focus:border-login-primary focus:outline-0 focus:ring-0"
                        placeholder="Enter your email address"
                        required
                      />
                    </label>

                    {/* Password */}
                    <div className="flex flex-col">
                      <div className="flex items-baseline justify-between">
                        <p className="pb-2 text-base font-medium text-[#181113]">
                          Password
                        </p>
                        <a
                          className="text-sm font-medium text-login-primary hover:underline"
                          href="#"
                        >
                          Forgot Password
                        </a>
                      </div>

                      <div className="relative flex w-full items-stretch">
                        {/* <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="form-input h-14 w-full rounded-lg border border-[#e5dcdf] bg-white p-[15px] text-base text-[#181113] placeholder:text-[#886370] focus:border-login-primary focus:outline-0 focus:ring-0"
                        /> */}

                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          // className="w-full border rounded p-2"
                          className="form-input h-14 w-full rounded-lg border border-[#e5dcdf] bg-white p-[15px] text-base text-[#181113] placeholder:text-[#886370] focus:border-login-primary focus:outline-0 focus:ring-0"
                          placeholder="Enter your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((s) => !s)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#886370]"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          title={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <Eye className="h-5 w-5" />
                          ) : (
                            <EyeOff className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {err ? <p className="text-sm text-red-600">{err}</p> : null}
                  </form>

                  {/* Submit */}
                  <button
                    className="flex w-full items-center justify-center rounded-lg bg-[#f7bacf] px-4 py-3.5 text-base font-bold text-[#181113] transition-colors hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-login-primary focus-visible:ring-offset-2 focus-visible:ring-offset-login-light cursor-pointer"
                    type="submit"
                    disabled={loading}
                    onClick={onSubmit}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>

                  <p className="text-center text-sm text-[#181113]">
                    Planning your big day{" "}
                    <a
                      className="font-bold text-login-primary hover:underline"
                      href={'/auth/register'}
                    >
                      Create an account
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



