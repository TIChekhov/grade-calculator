import { useForm, useWatch } from "react-hook-form";
import styles from "./exams-score-form.module.css";
import { Button, Grid, Text, TextInput } from "@mantine/core";
import type { Exam } from "@/types";
import { useState, type FC, Fragment } from "react";
import { useRouter } from "next/router";

interface ExamsScoreFormProps {
  exams: Exam[];
}

export const ExamsScoreForm: FC<ExamsScoreFormProps> = ({ exams }) => {
  const formDefaultValue = exams.map((exam) => ({
    ...exam,
    yourScore: null,
  }));
  const firstAdditionalExamIndex = exams.findIndex(
    (exam) => exam.type === "additional",
  );
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
    mode: "onSubmit",
  });

  const scores = useWatch({
    control,
    name: "exams",
    defaultValue: formDefaultValue,
  });

  const disabled = scores.filter((item) => item.yourScore).length < 2;

  const onSubmit = (data: {
    exams: (Exam & { yourScore: number | null })[];
  }) => {
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
      <Grid align="flex-start">
        {exams.map((item, index) => (
          <Fragment key={item.id}>
            {firstAdditionalExamIndex === index && (
              <Grid.Col span={8}></Grid.Col>
            )}
            <Grid.Col span={{ base: 12, xs: 6, 1920: 4 }}>
              <TextInput
                w="100%"
                size="xl"
                radius="md"
                type="text"
                placeholder={`От ${item.minScore} до 100`}
                maxLength={3}
                labelProps={{
                  pb: "4px",
                }}
                label={
                  <Text fz={18} fw={400}>
                    {item.title}
                  </Text>
                }
                description={item.description}
                error={errors?.exams?.[index]?.yourScore?.message}
                {...register(`exams.${index}.yourScore` as const, {
                  validate: (value: string | null) => {
                    if (value) {
                      const parsedValue = parseInt(value, 10);
                      if (!parsedValue) {
                        return "Введите корректное значение баллов";
                      }
                      if (parsedValue < item.minScore) {
                        return "Не набрано минимальное количество баллов";
                      }
                    }
                  },
                })}
              />
            </Grid.Col>
          </Fragment>
        ))}
      </Grid>
      <Button
        size="xl"
        radius="md"
        type="submit"
        loading={loading}
        disabled={disabled}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        Искать
      </Button>
    </form>
  );
};
