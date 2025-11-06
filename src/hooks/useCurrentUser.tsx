"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

type CurrentUser = {
  id: string,
  name: string | null,
  email: string,
} | null;

export function useCurrentUser() {
  return useQuery<CurrentUser>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      try {
        const { data } = await api.get("/api/user");
        return (data.user ?? null) as CurrentUser;
      } catch {
        // not logged in or other error, keep UI calm
        return null;
      }
    },
    // initialData: null,                 // prevents loading flash
    refetchOnMount: false,             // you control refresh via invalidate
    refetchOnWindowFocus: true,       // optional calm
    staleTime: 5 * 60 * 1000,          // 5 min "fresh"
    gcTime: 30 * 60 * 1000,            // keep cache 30 min before garbage-collect
    retry: 0,                          // logged-out won't succeed on retry 
  });
}
