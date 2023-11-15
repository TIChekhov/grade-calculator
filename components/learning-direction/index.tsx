import { Accordion, Card, Container, Text } from "@mantine/core";
import type { FC, ReactNode } from "react";
import type { LearningDirection as LearningDirectionType } from "@/types";
import styles from "./learning-direction.module.css";
import { LearningProfile } from "../learning-profile";

export interface LearningDirectionProps {
  learningDirection: LearningDirectionType;
}

export const LearningDirection: FC<LearningDirectionProps> = ({
  learningDirection,
}) => {
  return (
    <Card padding="lg" radius="md" withBorder>
      <Text fz={18} fw={600}>
        {learningDirection.title}
      </Text>
      <Accordion variant="filled" radius="md">
        {learningDirection.learningProfile.map((item) => (
          <Accordion.Item p={0} key={item.id} value={item.id.toString()}>
            <Accordion.Control p={0}>{item.title}</Accordion.Control>
            <Accordion.Panel>
              <LearningProfile learningProfile={item} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Card>
  );
};
