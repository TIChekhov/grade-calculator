import { prisma } from "@/lib/prisma";
import { useEffect, useState } from "react";

export const useGetExamSubjects = () => {
  const [data, setData] = useState<
    {
      id: number;
      title: string;
      description: string;
      minScore: number;
      type: string;
    }[]
  >([]);

  useEffect(() => {
    const populate = async () => {
      const data = await prisma.examSubject.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          minScore: true,
          type: true,
        },
      });
      setData(data ?? []);
    };
    void populate();
  }, []);

  return { data };
};
