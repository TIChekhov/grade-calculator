import type { Exam } from "@/types";
import { Button, SimpleGrid, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useState, type FC } from "react";
import { useForm, useWatch } from "react-hook-form";
import { ExamsScoreCard, FormExam } from "../exams-score-card";
import styles from "./exams-score-form.module.css";

interface ExamsScoreFormProps {
  exams: Exam[];
}

const findExamIndex = (id: number, exams: Exam[]) => {
  return exams.findIndex((exam) => exam.id === id);
};

export const ExamsScoreForm: FC<ExamsScoreFormProps> = ({ exams }) => {
  const formDefaultValue: FormExam[] = exams.map((exam) => ({
    ...exam,
    yourScore: null,
  }));
  const mainExams = exams.filter((exam) => exam.type === "main");
  const additionalExams = exams.filter((exam) => exam.type === "additional");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      exams: formDefaultValue,
    },
    mode: "onBlur",
  });

  const scores = useWatch({
    control,
    name: "exams",
    defaultValue: formDefaultValue,
  });

  const disabled = scores.filter((item) => item.yourScore).length < 2;

  const onSubmit = (data: { exams: FormExam[] }) => {
    setLoading(true);
    router.push({
      pathname: "/calculate",
      query: {
        exams: data.exams
          .filter((item) => item.yourScore)
          .map((exam) => exam.id.toString()),
      },
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Text fz={24} fw={500}>
        Общие предметы
      </Text>
      <SimpleGrid
        className={styles.grid}
        cols={{ base: 1, sm: 2, md: 3, xl: 4 }}
        spacing={24}
      >
        {mainExams.map((item) => (
          <ExamsScoreCard
            key={item.id}
            exam={item}
            index={findExamIndex(item.id, exams)}
            error={
              errors?.exams?.[findExamIndex(item.id, exams)]?.yourScore?.message
            }
            register={register}
          />
        ))}
      </SimpleGrid>
      <Text fz={24} fw={500}>
        Предметы где экзамен проводится ВУЗом самостоятельно
      </Text>
      <SimpleGrid
        className={styles.grid}
        cols={{ base: 1, sm: 2, md: 3, xl: 4 }}
        spacing={24}
      >
        {additionalExams.map((item) => (
          <ExamsScoreCard
            key={item.id}
            exam={item}
            index={findExamIndex(item.id, exams)}
            error={
              errors?.exams?.[findExamIndex(item.id, exams)]?.yourScore?.message
            }
            register={register}
          />
        ))}
      </SimpleGrid>
      <Button
        w={{
          base: "calc(100%)",
          sm: "calc(50% - 12px)",
          md: "calc(33% - 12px)",
          xl: "calc(25% - 12px)",
        }}
        size="lg"
        radius="lg"
        type="submit"
        loading={loading}
        disabled={disabled}
        color="blue"
      >
        Искать
      </Button>
    </form>
  );
};
