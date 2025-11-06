"use client";
import { useQueryClient } from "@tanstack/react-query";
import { signIn, signOut } from "next-auth/react";

type CurrentUser = { id: string; name: string | null; email: string } | null;

export function useAuthActions() {
  const queryclient = useQueryClient();

  async function login(email: string, password: string) {
    // optimistic UI, optional, safe to remove if you do not want it
    // if (opts?.optimisticName) {
    // //   queryclient.setQueryData(["currentUser"], { user: { id: "temp", email, name: opts.optimisticName } });
    // queryclient.setQueryData(["currentUser"], { id: "temp", email, name: opts.optimisticName } as const);

    // }

    queryclient.setQueryData<CurrentUser>(["currentUser"], {
        id: "temp",
        email,
        name: email.split("@")[0] || null,
      });
  

    const res = await signIn("credentials", { email, password, redirect: false });
    if (!res?.ok) {
      // ⬅ revert immediately on failure, don't wait for invalidate
      queryclient.setQueryData<CurrentUser>(["currentUser"], null);
      return res;
    }

    // Wait a bit for NextAuth to set the session cookie properly
    await new Promise(resolve => setTimeout(resolve, 100));

    // Now invalidate to fetch real data
    // OLDD
    // await queryclient.invalidateQueries({ queryKey: ["currentUser"] });

    // Force refetch to get real user data
    await queryclient.invalidateQueries({ 
      queryKey: ["currentUser"],
      refetchType: 'active' 
    });
    
    // Give it a moment to refetch
    // await new Promise(resolve => setTimeout(resolve, 100));

    
    return res;
  }

  async function logout() {
    // // Set to null immediately for instant UI feedback
    // queryclient.setQueryData<CurrentUser>(["currentUser"], null);

    //     // Sign out from NextAuth
    // await signOut({ redirect: false });
    

    // // Invalidate to ensure fresh state
    // await queryclient.invalidateQueries({ queryKey: ["currentUser"] });

    queryclient.removeQueries({ queryKey: ["currentUser"] }); // drop cache
  await signOut({ redirect: false });
  // no invalidate that could trigger a refetch
  }

  return { login, logout };
}
