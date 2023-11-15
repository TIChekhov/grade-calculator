import { useForm } from "react-hook-form";
import styles from "./exams-score-form.module.css";
import { Button, SimpleGrid, TextInput } from "@mantine/core";
import { Exam } from "@/types";

export const ExamsScoreForm = ({ exams }: { exams: Exam[] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      exams: exams.map((item) => ({
        ...item,
        yourScore: null,
      })),
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: {
    exams: (Exam & { yourScore: number | null })[];
  }) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid spacing={32} cols={{ base: 1, sm: 2, lg: 3 }}>
        {exams.map((item, index) => (
          <TextInput
            w="100%"
            size="xl"
            radius="md"
            key={item.id}
            type="text"
            placeholder={`От ${item.minScore} до 100`}
            maxLength={3}
            label={item.title}
            error={errors?.exams?.[index]?.yourScore?.message}
            {...register(`exams.${index}.yourScore` as const, {
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
