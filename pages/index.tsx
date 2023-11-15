import { ExamsScoreForm } from "@/components/exams-score-forms";
import { prisma } from "@/prisma/prisma";
import { Exam } from "@/types";
import { Container, Text } from "@mantine/core";
import { GetServerSideProps } from "next";

export default function Home({ exams }: { exams: Exam[] }) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        gap: "32px",
      }}
    >
      <Text
        fz={64}
        fw={900}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        Введите свои баллы ЕГЭ
      </Text>
      <ExamsScoreForm exams={exams} />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const exams = await prisma.examSubject.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      minScore: true,
      type: true,
    },
  });
  return { props: { exams: exams ?? [] } };
};
