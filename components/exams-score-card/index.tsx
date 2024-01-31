import type { Exam } from "@/types";
import { Card, Text, TextInput } from "@mantine/core";
import { type FC } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./exams-score-card.module.css";

export interface FormExam extends Exam {
  yourScore: string | null;
}

interface ExamsScoreCardProps {
  exam: Exam;
  index: number;
  error?: string;
  register: UseFormRegister<{
    exams: FormExam[];
  }>;
}

const validate = (value: string | null, minScore: number) => {
  if (value) {
    const parsedValue = parseInt(value, 10);
    if (!parsedValue || parsedValue > 100) {
      return "Введите корректное значение баллов";
    }
    if (parsedValue < minScore) {
      return "Не набрано минимальное количество баллов";
    }
  }
};

export const ExamsScoreCard: FC<ExamsScoreCardProps> = ({
  exam,
  index,
  error,
  register,
}) => {
  return (
    <Card
      className={styles.card}
      shadow="lg"
      padding={16}
      radius="xl"
      withBorder
    >
      <Text fz={18} fw={600}>
        {exam.title}
      </Text>
      <TextInput
        w="100%"
        size="md"
        radius="lg"
        type="text"
        aria-label={exam.title}
        placeholder={`От ${exam.minScore} до 100`}
        maxLength={3}
        descriptionProps={{
          pb: "24px",
          mt: "-24px",
        }}
        description={exam.description}
        error={error}
        {...register(`exams.${index}.yourScore` as const, {
          validate: (value) => validate(value, exam.minScore),
        })}
      />
    </Card>
  );
};
