import { Layout } from "@/components/layout";
import { LearningDirection } from "@/components/learning-direction";
import { prisma } from "@/prisma/prisma";
import type { LearningDirection as LearningDirectionType } from "@/types";
import { Grid } from "@mantine/core";
import type { GetServerSideProps } from "next/types";

export default function Calculated({
  learningDirections,
}: {
  learningDirections: LearningDirectionType[];
}) {
  return (
    <Layout title="Направления подготовки">
      <Grid align="flex-start" grow>
        {learningDirections.map((learningDirection) => (
          <Grid.Col maw="100%" key={learningDirection.id}>
            <LearningDirection learningDirection={learningDirection} />
          </Grid.Col>
        ))}
      </Grid>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  if (!req.query?.exams || req.query.exams.length < 3) {
    return {
      notFound: true,
    };
  }
  const exams = req.query.exams as string[];
  const learningProfiles = await prisma.learningProfile.findMany({
    where: {
      exams: {
        some: {
          examId: { in: exams?.map((exam) => parseInt(exam, 10)) },
        },
      },
    },
    select: {
      id: true,
      exams: {
        select: {
          type: true,
          examId: true,
        },
      },
    },
  });
  const filteredLearningProfiles = learningProfiles?.filter(
    (learningProfile) => {
      const mandatoryExams = learningProfile.exams.filter(
        (exam) => exam.type === "mandatory",
      );
      const queryExamsOnMandatoryExams = mandatoryExams.filter((exam) =>
        exams.includes(exam.examId.toString()),
      );
      return mandatoryExams.length === queryExamsOnMandatoryExams.length;
    },
  );
  const learningDirections = await prisma.learningDirection.findMany({
    where: {
      learningProfile: {
        some: {
          id: {
            in: filteredLearningProfiles?.map(
              (learningProfile) => learningProfile.id,
            ),
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
  return { props: { learningDirections: learningDirections ?? [] } };
};
