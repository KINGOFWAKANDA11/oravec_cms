import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  email: string;
  name: string;
  number: string;
  balik: string;
};

export default function ContactFormEmail({
  message,
  email,
  name,
  number,
  balik
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nová správa z lubooravec.sk</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Dostali ste novú správu z webu lubooravec.sk
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Meno odosielateľa: {name}</Text>
              <Text>Email odosielateľa: {email}</Text>
              <Text>Mobil odosielateľa: {number}</Text>
              <Text>Zvolený balík: {balik}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}