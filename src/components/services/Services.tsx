import { Accordion, Container, Divider, Text, Space } from "@mantine/core"
import { IconCut, IconNeedleThread, IconPlant, IconHeartHandshake } from '@tabler/icons-react'

const hairCare = [
  { name: 'Shampoo, Cut and Finish', price: '$65 and up' },
  { name: 'Shampoo and Style', price: '$45 and up' },
  { name: "Children's Cut", price: '$25' },
  { name: "Men's Hair Cut", price: '$35' },
  { name: 'Updo', price: '$90 and up' },
  { name: 'Curling Iron', price: '$35 and up' },
  { name: 'Flat Iron', price: '$25' },
  { name: 'Eyebrow Tint', price: '$5' },
  { name: 'Full Highlights', price: '$150 and up' },
  { name: 'One Process Color', price: '$90 and up' },
  { name: 'Partial Highlights', price: '$100 and up' },
  { name: 'Hair Glaze', price: '$65 and up' },
  { name: 'Corrective Color', price: 'by consultation' },
  { name: 'Perm (includes cut)', price: '$130 and up' },
  { name: 'Revitalizing Scalp Massage (30 mins)', price: '$50' },
  { name: 'Scalp Remedy', price: '$15' },
  { name: 'Conditioning Elixir', price: '$25' },
  { name: 'Sap Moss Treatment', price: '$25' },
  { name: 'Conditioning Masque', price: '$15' },
]

const threading = [
  { name: 'Full Face', price: '$55' },
  { name: 'Brow', price: '$20' },
  { name: 'Lip', price: '$15' },
  { name: 'Chin', price: '$15' },
  { name: 'Cheek', price: '$15' },
]

const skin = [
  { name: 'Makeup', price: 'by consultation' },
  { name: 'Expresss Facial (30 mins)', price: '$70' },
  { name: 'Anti-Aging (60 mins)', price: '$135' },
  { name: 'Anti-Acne Enyzme Peel (55 mins)', price: '$115' },
]



function ServiceList(props: { title: string, products: { name: string, price: string }[], icon: any }) {
  const slides = props.products.map((product: { name: string, price: string }) => (
    <div key={product.name}>
      <Text size="md" fw={200} ta="left">{product.name}</Text>
      <Text size="md" fw={200} ta="right">{product.price}</Text>
      <Divider my="md" color="var(--mantine-color-gray-4)" />
    </ div>
  ));
  return (
    <>
      <Accordion.Item key={props.title} value={props.title}>
        <Accordion.Control icon={props.icon}>{props.title}</Accordion.Control >
        <Accordion.Panel style={{
          backgroundColor: "#dbeae8",
        }}>
          <Space h="sm" />
          {slides}
        </Accordion.Panel>
      </Accordion.Item >
    </>
  )
}

export default function Services() {
  return (
    <Container size="sm" >
      <Accordion defaultValue="Hair" variant="contained">
        <ServiceList title="Hair" products={hairCare} icon={<IconCut color="var(--mantine-color-green-6)" />} />
        <ServiceList title="Threading" products={threading} icon={<IconNeedleThread color="var(--mantine-color-green-6)" />} />
        <ServiceList title="Skin" products={skin} icon={<IconPlant color="var(--mantine-color-green-6)" />} />
        <Accordion.Item key="Bridal" value="Bridal">
          <Accordion.Control icon={<IconHeartHandshake color="var(--mantine-color-green-6)" />}>Bridal</Accordion.Control >
          <Accordion.Panel style={{
            backgroundColor: "#dbeae8",
          }}>
            <Space h="sm" />
            We offer a variety of bridal packages. Please call for a consultation on the package that would best fit your needs!
          </Accordion.Panel>
        </Accordion.Item >
      </Accordion >
    </Container >);
}
