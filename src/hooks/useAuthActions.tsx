"use client";
import { useQueryClient } from "@tanstack/react-query";
import { signIn, signOut } from "next-auth/react";

export function useAuthActions() {
  const queryclient = useQueryClient();

  async function login(email: string, password: string, opts?: { optimisticName?: string }) {
    // optimistic UI, optional, safe to remove if you do not want it
    // if (opts?.optimisticName) {
    // //   queryclient.setQueryData(["currentUser"], { user: { id: "temp", email, name: opts.optimisticName } });
    // queryclient.setQueryData(["currentUser"], { id: "temp", email, name: opts.optimisticName } as const);

    // }

    queryclient.setQueryData(["currentUser"], {
        id: "temp",
        email,
        name: email.split("@")[0] || null,
      });
  

    const res = await signIn("credentials", { email, password, redirect: false });
    await queryclient.invalidateQueries({ queryKey: ["currentUser"] });
    return res;
  }

  async function logout() {
    await signOut({ redirect: false });
    queryclient.setQueryData(["currentUser"], null);
    queryclient.invalidateQueries({ queryKey: ["currentUser"] });
    // await queryclient.invalidateQueries({ queryKey: ["currentUser"] });
  }

  return { login, logout };
}
