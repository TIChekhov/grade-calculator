"use client";

import styles from "./page.module.css";
import { Container, Text } from "@mantine/core";
import { ExamsScoreForm } from "@/components/exams-score-form";

export default function Home() {
  return (
    <Container className={styles.main}>
      <Text
        fz={64}
        fw={900}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        Введите свои баллы ЕГЭ
      </Text>
      <ExamsScoreForm />
    </Container>
  );
}
