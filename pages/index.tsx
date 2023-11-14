import { MyButton } from "@/components/button";
import { ExamsScoreForm } from "@/components/exams-score-forms";
import { Container, Text } from "@mantine/core";

export default function Home() {
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
      <MyButton />
      {/* <ExamsScoreForm /> */}
    </Container>
  );
}
