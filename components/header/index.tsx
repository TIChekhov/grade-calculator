import ArrowRightIcon from "@/public/arrow-right.svg";
import TgpiLogo from "@/public/tgpi-logo.svg";
import {
  ActionIcon,
  Anchor,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { FC } from "react";
import styles from "./header.module.css";

const mainLinks = [
  {
    link: "https://sites.google.com/view/priemka-tgpi/%D0%B1%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D0%B8%D0%B0%D1%82?authuser=0",
    label: "Бакалавриат",
  },
  {
    link: "https://sites.google.com/view/priemka-tgpi/%D0%BC%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0?authuser=0",
    label: "Магистратура",
  },
  { link: "https://aspirantura.tgpi.ru/", label: "Аспирантура" },
  {
    link: "https://sites.google.com/view/priemka-tgpi/%D0%BF%D1%80%D0%BE%D1%84%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F?authuser=0",
    label: "Профориентация",
  },
  { link: "https://tgpi.ru/contacts", label: "Контакты" },
];

export const Header: FC = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box className={styles.header}>
        <Container px={32} size="xl" className={styles.inner}>
          <Link href="/">
            <ActionIcon
              color="gray"
              radius="xs"
              title="Лого"
              aria-label="logo-button"
              variant="transparent"
              w={123}
              h={60}
            >
              <TgpiLogo width={123} height={60} />
            </ActionIcon>
          </Link>
          <Group visibleFrom="md" gap={8} justify="flex-end">
            <Group gap={0}>
              {mainLinks.map((item, index) => (
                <Anchor<"a">
                  href={item.link}
                  key={item.label}
                  className={styles.mainLink}
                >
                  {item.label}
                </Anchor>
              ))}
            </Group>

            <Link href="https://pk.rsue.ru/">
              <Button
                size="sm"
                radius="lg"
                type="submit"
                color="blue"
                title="Подать документы"
                aria-label="send-documents-button"
              >
                Подать документы
              </Button>
            </Link>
          </Group>
          <Burger
            aria-label="menu"
            title="Меню"
            opened={opened}
            onClick={toggle}
            className={styles.burger}
            size="md"
            hiddenFrom="md"
          />
        </Container>
      </Box>
      <Drawer
        title={
          <ActionIcon
            color="gray"
            radius="xs"
            title="Лого"
            aria-label="logo-button"
            variant="transparent"
            w={123}
            h={60}
          >
            <TgpiLogo width={123} height={60} />
          </ActionIcon>
        }
        opened={opened}
        onClose={toggle}
        padding={24}
        overlayProps={{
          opacity: 0.5,
        }}
        classNames={{ content: styles.drawerContent }}
        size="md"
        withCloseButton
      >
        <Flex h="100%" direction="column" gap={32} justify="space-between">
          <Flex direction="column">
            {mainLinks.map((item, index) => (
              <Anchor<"a">
                px={0}
                href={item.link}
                key={item.label}
                className={styles.mainLink}
              >
                {item.label}
                <ArrowRightIcon />
              </Anchor>
            ))}
          </Flex>
          <Link className={styles.bottom} href="https://pk.rsue.ru/">
            <Button
              title="Подать документы"
              aria-label="send-documents-button"
              w="100%"
              size="md"
              radius="lg"
              type="submit"
              color="blue"
            >
              Подать документы
            </Button>
          </Link>
        </Flex>
      </Drawer>
    </>
  );
};
