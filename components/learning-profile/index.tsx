import { Card, Container, Flex, Text } from "@mantine/core";
import type { FC, ReactNode } from "react";
import type { LearningProfile as LearningProfileType } from "@/types";
import styles from "./learning-direction.module.css";

export interface LearningProfileProps {
  learningProfile: LearningProfileType;
}

export const LearningProfile: FC<LearningProfileProps> = ({
  learningProfile,
}) => {
  const mandatoryExams = learningProfile.exams
    .filter((item) => item.type === "mandatory")
    .flatMap((item) => item.exam);
  const electiveExams = learningProfile.exams
    .filter((item) => item.type === "elective")
    .flatMap((item) => item.exam.title)
    .join(" / ");
  return (
    <Flex direction="row" gap={16} justify="space-between">
      <Flex direction="column" gap={8}>
        <Text fz={18} fw={600}>
          Экзамены
        </Text>
        <Flex direction="column" gap={4}>
          {mandatoryExams.map((item) => (
            <Text key={item.id} fz={18} fw={400}>
              {item.id}. {item.title}
            </Text>
          ))}
          <Text fz={18} fw={400}>
            {mandatoryExams.length + 1}. {electiveExams}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
