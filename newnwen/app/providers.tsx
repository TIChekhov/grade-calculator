"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRef } from "react";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { MantineProvider } from "@mantine/core";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5 * 1000,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient.current}>
      <ReactQueryStreamedHydration>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
