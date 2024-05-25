import { Center } from "@mantine/core"
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from "@mantine/carousel"
import { Image } from '@mantine/core';


function Slide() {
  const autoplay = useRef(Autoplay({ delay: 2000 }))

  return (<Carousel
    withControls={false}
    height={200}
    plugins={[autoplay.current]}
    onMouseEnter={autoplay.current.stop}
    onMouseLeave={autoplay.current.reset}
  >
    <Carousel.Slide><Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    /></Carousel.Slide>
    <Carousel.Slide>2</Carousel.Slide>
    <Carousel.Slide>3</Carousel.Slide>
  </Carousel>)
}


export default function Home() {
  return (<Center style={{
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  }}><Slide /></Center>);
}
