import { useFieldArray, useForm } from "react-hook-form";
import { useGetExamSubjects } from "@/hooks/query/use-get-exam-subjects";
import { Button, SimpleGrid, TextInput } from "@mantine/core";

export const ExamsScoreForm = () => {
  const { data, isLoading, isError } = useGetExamSubjects();

  const {
    register,
    control,
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
    <>
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
            name={`yourScore.${index}`}
          />
        ))}
      </SimpleGrid>
      <Button
        onClick={() => console.log("hrererer")}
        size="xl"
        type="submit"
        radius="md"
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        Искать
      </Button>
    </>
  );
};
