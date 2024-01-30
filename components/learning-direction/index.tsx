import { Accordion, Card, Text } from "@mantine/core";
import type { FC } from "react";
import type { LearningDirection as LearningDirectionType } from "@/types";
import { LearningProfile } from "../learning-profile";

export interface LearningDirectionProps {
  learningDirection: LearningDirectionType;
}

export const LearningDirection: FC<LearningDirectionProps> = ({
  learningDirection,
}) => {
  return (
    <Card padding="lg" radius="md" withBorder>
      <Text fz={18} fw={900}>
        {learningDirection.title}
      </Text>
      <Accordion
        variant="filled"
        radius="md"
        styles={{
          content: {
            padding: 0,
          },
        }}
      >
        {learningDirection.learningProfile.map((item) => (
          <Accordion.Item p={0} key={item.id} value={item.id.toString()}>
            <Accordion.Control fz={18} p={0}>
              {item.title}
            </Accordion.Control>
            <Accordion.Panel>
              <LearningProfile learningProfile={item} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Card>
  );
};
