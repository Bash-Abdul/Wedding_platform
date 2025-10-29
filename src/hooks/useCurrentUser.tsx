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
    staleTime: 1000 * 60 * 5,
    retry: 1, 
  });
}
