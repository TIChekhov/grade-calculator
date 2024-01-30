import { Badge, Flex, Text, Group } from "@mantine/core";
import type { FC } from "react";
import type { LearningProfile as LearningProfileType } from "@/types";

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
    .flatMap((item) => item.exam);
  return (
    <Flex direction="column" gap={16} justify="space-between">
      <Group gap={8}>
        {mandatoryExams.map((item) => (
          <Badge
            key={item.id}
            style={{ textTransform: "none" }}
            color="blue"
            size="lg"
          >
            {item.title}
          </Badge>
        ))}
        {electiveExams.map((item) => (
          <Badge
            key={item.id}
            style={{ textTransform: "none" }}
            variant="default"
            size="lg"
          >
            {item.title}
          </Badge>
        ))}
      </Group>
      <Text style={{ whiteSpace: "pre-line" }} fz={18} fw={400}>
        {learningProfile.description}
      </Text>
    </Flex>
  );
};
