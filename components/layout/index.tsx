import { AppShell, Container, Flex, Text } from "@mantine/core";
import type { FC, ReactNode } from "react";
import { Header } from "../header";
import styles from "./layout.module.css";

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <AppShell>
      <AppShell.Header h={48}>
        <Header />
      </AppShell.Header>
      <AppShell.Main pt={80}>
        <Container size="xl" className={styles.layout}>
          <Flex align="center" direction="row" justify="space-between">
            {/* <CheckhovIcon
              width="64px"
              height="64px"
              fill={scheme === "dark" ? "white" : "black"}
            /> */}
            <Text
              fz={{ base: 32, xs: 40, sm: 48, md: 64 }}
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "blue", deg: 90 }}
            >
              {title}
            </Text>
          </Flex>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
