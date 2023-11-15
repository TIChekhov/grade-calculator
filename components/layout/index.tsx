import { Container, Text } from "@mantine/core";
import type { FC, ReactNode } from "react";
import styles from "./layout.module.css";

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <Container className={styles.layout}>
      <Text
        fz={64}
        fw={900}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        {title}
      </Text>
      {children}
    </Container>
  );
};
