import { Center, Title, Container, Space, Paper, Text } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

const images = [
  "https://github.com/novayammygang/hfmiddleburgui/blob/main/src/assets/slides/slide4.jpg?raw=true",
  "https://github.com/novayammygang/hfmiddleburgui/blob/main/src/assets/slides/slide1.jpg?raw=true",
  "https://github.com/novayammygang/hfmiddleburgui/blob/main/src/assets/slides/slide5.jpg?raw=true",
];

function Slide() {
  const autoplay = useRef(Autoplay({ delay: 2000, playOnInit: true }));

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image
        src={url}
        radius="xl"
        w={500}
        h={300}
        style={{
          borderRadius: 50,
        }}
      />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withControls={false}
      loop
      plugins={[autoplay.current]}
      onMouseLeave={autoplay.current.reset}
      draggable={false}
      containScroll="trimSnaps"
    >
      {slides}
    </Carousel>
  );
}

export default function Home() {
  return (
    <>
      <Center>
        <Title order={1}>Welcome to HF Middleburg Salon!</Title>
      </Center>
      <Space h="lg" />
      <Container size="md" maw={500} mah={300}>
        <Paper
          radius="xl"
          shadow="xs"
          p="md"
          style={{
            backgroundColor: "#dbeae8",
          }}
        >
          <Slide />
        </Paper>
      </Container>
      <Space h="xl" />
      <Space h="xl" />
      <Container size="sm">
        {" "}
        <>
          <Text size="md" fw={300}>
            Through our partnership with AVEDA, we want to inspire and educate
            people to integrate wellness and beauty in their lives while setting
            an example for environmental leadership and responsibility. Located
            on{" "}
            <a href="https://maps.app.goo.gl/5fydTBj5eoMNp5538" target="_blank">
              {" "}
              7T W Washington St, Middleburg, VA
            </a>
            , we look forward to seeing you soon!
          </Text>
        </>
      </Container>
    </>
  );
}
