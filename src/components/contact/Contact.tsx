import {
  Center,
  Divider,
  Button,
  Drawer,
  Space,
  Paper,
  Title,
  Text,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAddressBook } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { TextInput, Textarea } from "@mantine/core";
import axios from "axios";
import { useState } from "react";

interface FormValues {
  name: string;
  phone: string;
  details: string;
}

function ContactForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      phone: "",
      details: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 || value.length > 20
          ? "Please enter a valid name"
          : null,
      phone: (value) =>
        value.length >= 10 && value.length < 20
          ? null
          : "Please enter a valid phone number",
      details: (value) => (value.length > 50 ? "Exceeds 50 characteers" : null),
    },
  });
  const [opened, { open, close }] = useDisclosure(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    axios.defaults.headers.common = {
      "X-Api-Key": "",
    };
    axios
      .post(
        "https://ha3av85ezj.execute-api.us-east-1.amazonaws.com/prod/email",
        {
          name: values.name,
          phone: values.phone,
          details: values.details,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then(
        (response) => {
          console.log(response);
          setSuccess(true);
          close();
        },
        (error) => {
          console.log(error);
          close();
        },
      );
  };
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Request an appointment">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Name"
            placeholder="Name"
            required={true}
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            mt="sm"
            label="Phone"
            placeholder="Phone"
            required={true}
            key={form.key("phone")}
            {...form.getInputProps("phone")}
          />
          <Textarea
            mt="sm"
            label="What are you looking for? (less than 50 characters)"
            placeholder="Haircut, highlights, etc.."
            key={form.key("details")}
            {...form.getInputProps("details")}
          />
          <Button type="submit" mt="sm">
            Submit
          </Button>
        </form>
      </Drawer>
      <Button
        onClick={open}
        variant="default"
        leftSection={<IconAddressBook color="var(--mantine-color-green-6)" />}
        disabled={success ? true : false}
        style={{
          backgroundColor: "#FAF9F6",
        }}
      >
        {!success ? "Request an appointment" : "Thanks!"}
      </Button>
    </>
  );
}
export default function Contact() {
  return (
    <>
      <Space h="lg" />
      <Container size="md" maw={800}>
        <Paper
          shadow="xs"
          p="md"
          style={{
            backgroundColor: "#dbeae8",
          }}
        >
          <Title order={1}>Visit us</Title>
          <Space h="sm" />

          <Text size="md" fw={200} ta="left">
            {"We are located in the heart of Middleburg at "}
            <a href="https://maps.app.goo.gl/5fydTBj5eoMNp5538" target="_blank">
              {"7T W Washington St, Middleburg, VA. "}
            </a>
            With a flair for state of the art cutting, threading, highlights and
            styling come and see the magic of HF Middleburg Salon!
          </Text>
          <Space h="sm" />

          <Center inline>
            <Title order={5}>{"Business hours"}</Title>
            <Text size="sm" fw={300} pl={8}>
              (by appointment only)
            </Text>
          </Center>

          <Space h="sm" />
          <Text size="md" fw={200} ta="left">
            Tuesday-Friday
          </Text>
          <Text size="md" fw={200} ta="right">
            10:00am - 5:00pm
          </Text>
          <Divider my="md" color="var(--mantine-color-gray-4)" />
          <Text size="md" fw={200} ta="left">
            Saturday
          </Text>
          <Text size="md" fw={200} ta="right">
            10:00am - 3:00pm
          </Text>
          <Space h="sm" />
          <Title order={5}>{"Contact"}</Title>
          <Space h="sm" />
          <Text size="md" fw={200} ta="left">
            Phone
          </Text>
          <Text size="md" fw={200} ta="right">
            540-687-6889
          </Text>
          <Divider my="md" color="var(--mantine-color-gray-4)" />

          <Text size="md" fw={200} ta="left">
            Contact form
          </Text>
          <Text size="md" fw={200} ta="right">
            <ContactForm />
          </Text>
        </Paper>
      </Container>
    </>
  );
}
