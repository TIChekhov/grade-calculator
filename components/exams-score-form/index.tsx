"use client";

import styles from "./exams-score-form.module.css";
import { useForm } from "react-hook-form";
import { useGetExamSubjects } from "@/hooks/query/use-get-exam-subjects";
import { Button, SimpleGrid, TextInput } from "@mantine/core";

export const ExamsScoreForm = () => {
  const { data } = useGetExamSubjects();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      yourScore: data.map(() => 0),
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: { yourScore: number[] }) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid spacing={32} cols={{ base: 1, sm: 2, lg: 3 }}>
        {data.map((item, index) => (
          <TextInput
            w="100%"
            size="xl"
            radius="md"
            key={item.id}
            type="text"
            placeholder={`От ${item.minScore} до 100`}
            maxLength={3}
            label={item.title}
            error={errors?.yourScore?.[index]?.message}
            {...register(`yourScore.${index}` as const, {
              required: "error message",
              minLength: {
                value: 2,
                message: "error message",
              },
              maxLength: {
                value: 3,
                message: "error message",
              },
            })}
          />
        ))}
      </SimpleGrid>
      <Button
        size="xl"
        radius="md"
        type="submit"
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        Искать
      </Button>
    </form>
  );
};
