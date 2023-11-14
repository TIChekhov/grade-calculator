import { prisma } from "@/lib/prisma";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetExamSubjects = () => {
  const { data, isError, isLoading } = useSuspenseQuery({
    queryKey: ["exam-subjects"],
    queryFn: async () =>
      await prisma.examSubject.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          minScore: true,
          type: true,
        },
      }),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return {
    data: data ?? [],
    isError,
    isLoading,
  };
};
