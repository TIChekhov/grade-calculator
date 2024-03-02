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
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./header.module.css";

const mainLinks = [
  {
    link: "https://sites.google.com/view/priemka-tgpi",
    label: "Приёмная комиссия",
  },
  { link: "https://tgpi.ru/", label: "Сайт института" },
];

export const Header: FC = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  const isMainPage = router.asPath === "/";

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
              w={207}
              h={60}
            >
              <TgpiLogo width={207} height={60} />
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

            {!isMainPage && (
              <Link href="/">
                <Button
                  size="sm"
                  radius="lg"
                  type="submit"
                  color="blue"
                  variant="outline"
                  title="В калькулятор"
                  aria-label="calculator-button"
                >
                  В калькулятор
                </Button>
              </Link>
            )}
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
            w={207}
            h={60}
          >
            <TgpiLogo width={207} height={60} />
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
          {!isMainPage && (
            <Link
              className={styles.bottom}
              style={{ bottom: "108px" }}
              href="/"
            >
              <Button
                size="md"
                w="100%"
                radius="lg"
                type="submit"
                color="blue"
                variant="outline"
                title="В калькулятор"
                aria-label="calculator-button"
              >
                В калькулятор
              </Button>
            </Link>
          )}
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
