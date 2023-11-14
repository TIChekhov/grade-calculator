import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";
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
      <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
    </QueryClientProvider>
  );
}
