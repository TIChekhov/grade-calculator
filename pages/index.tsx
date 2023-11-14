import { Button, Container, SimpleGrid, Text, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { useGetExamSubjects } from "@/hooks/query/use-get-exam-subjects";

export default function Home() {
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
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        gap: "32px",
      }}
    >
      <button onClick={() => console.log("hello world")}>efwefefwfwwfe</button>
      <Text
        fz={64}
        fw={900}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        Введите свои баллы ЕГЭ
      </Text>
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
        onClick={() => onSubmit({ yourScore: [0] })}
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        Искать
      </Button>
    </Container>
  );
}
