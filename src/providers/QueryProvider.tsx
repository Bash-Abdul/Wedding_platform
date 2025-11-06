// src/providers/QueryProvider.tsx
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());
  return <SessionProvider><QueryClientProvider client={client}>{children} {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}</QueryClientProvider></SessionProvider>;
}
