import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  AppShell,
  Container,
  Burger,
  Button,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Layout.module.css";
import {
  IconHome,
  IconPhone,
  IconScissors,
  IconLeaf,
} from "@tabler/icons-react";
import Home from "../home/Home";
import Services from "../services/Services";
import Contact from "../contact/Contact";

function Logo() {
  return (
    <div className={classes.logo}>
      <IconLeaf
        color="var(--mantine-color-green-6)"
        className={classes.pulse}
      />
      <Text
        size="lg"
        fw={300}
        pl={8}
      >
        HF Middleburg
      </Text>
      <Text
        size="sm"
        fw={300}
        pl={8}
      >
        an Aveda salon
      </Text>

    </div>
  );
}

function Headers(props: { opened: boolean; toggle: () => void }) {
  const navigate = useNavigate();
  return (
    <>
      <Button
        leftSection={<IconHome color="var(--mantine-color-green-6)" />}
        style={{
          backgroundColor: "#FAF9F6",
        }}
        variant="default"
        onClick={() => {
          if (props.opened) {
            props.toggle();
          }
          navigate("/");
        }}
      >
        Home
      </Button>
      <Button
        leftSection={<IconScissors color="var(--mantine-color-green-6)" />}
        style={{
          backgroundColor: "#FAF9F6",
        }}
        variant="default"
        onClick={() => {
          if (props.opened) {
            props.toggle();
          }
          navigate("/services");
        }}
      >
        Services
      </Button>
      <Button
        leftSection={<IconPhone color="var(--mantine-color-green-6)" />}
        style={{
          backgroundColor: "#FAF9F6",
        }}
        variant="default"
        onClick={() => {
          if (props.opened) {
            props.toggle();
          }
          navigate("/contact");
        }}
      >
        Contact
      </Button>
    </>
  );
}

export default function Layout() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
      padding="md"


    >
      <AppShell.Header style={{
        backgroundColor: "#dbeae8",
      }}>
        <Container size="md" className={classes.inner}>
          <Logo />
          <Group gap={10} visibleFrom="xs" justify="left">
            <Headers opened={opened} toggle={toggle} />
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </AppShell.Header>
      <AppShell.Navbar p="lg" style={{
        backgroundColor: "#FAF9F6",
      }}
      >
        <Stack gap="lg">
          <Headers opened={opened} toggle={toggle} />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          backgroundColor: "#FAF9F6",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}
