import { ExamsScoreForm } from "@/components/exams-score-form";
import { Layout } from "@/components/layout";
import { prisma } from "@/prisma/prisma";
import type { Exam } from "@/types";
import type { GetServerSideProps } from "next/types";

export default function Index({ exams }: { exams: Exam[] }) {
  return (
    <Layout title="Введите свои баллы ЕГЭ">
      <ExamsScoreForm exams={exams} />
    </Layout>
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
