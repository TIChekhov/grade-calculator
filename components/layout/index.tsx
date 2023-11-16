import { AppShell, Container, Flex, Text } from "@mantine/core";
import type { FC, ReactNode } from "react";
import styles from "./layout.module.css";
import CheckhovIcon from "@/public/safari-pinned-tab.svg";
import { useColorScheme } from "@mantine/hooks";

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  const scheme = useColorScheme();
  return (
    <AppShell>
      <AppShell.Main>
        <Container className={styles.layout}>
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
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
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
