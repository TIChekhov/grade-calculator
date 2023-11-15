import { prisma } from "@/prisma/prisma";
import type { NextApiRequest, NextApiResponse } from "next/types";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { exams } = req.body as { exams: { id: number }[] };
  const learningProfiles = await prisma.learningProfile.findMany({
    where: {
      exams: {
        some: {
          examId: { in: exams?.map((exam) => exam.id) },
        },
      },
    },
    select: {
      id: true,
    },
  });
  const learningDirections = await prisma.learningDirection.findMany({
    where: {
      learningProfile: {
        some: {
          id: {
            in: learningProfiles?.map((learningProfile) => learningProfile.id),
          },
        },
      },
    },
    select: {
      id: true,
      title: true,
      description: true,
      learningProfile: {
        select: {
          id: true,
          title: true,
          description: true,
          exams: {
            select: {
              type: true,
              exam: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                  type: true,
                },
              },
            },
          },
        },
      },
    },
  });
  res.json({ learningDirections });
}
