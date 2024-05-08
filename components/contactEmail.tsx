interface contactEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

import React from "react";
import {
  Tailwind,
  Html,
  Font,
  Body,
  Head,
  Preview,
  Container,
  Img,
  Text,
  Link,
} from "@react-email/components";

const contactEmail = ({ name, email, phone, message }: contactEmailProps) => {
  return (
    <Html
      style={{
        backgroundColor: "#f3f4f6",
      }}
    >
      <Head />
      <Preview>New contact form report!</Preview>
      <Tailwind>
        <Body>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Container className="w-[300px] h-full my-12 border-[1px] border-[#acacace4] border-solid rounded-sm">
            <Container className="flex items-start  justify-center text-center  pb-6">
              <Img
                src={`/static/chiraro_blue.svg`}
                alt="Vercel"
                className="pt-10 pb-8 my-0 mx-auto w-[70px]"
              />
              <Container className="my-0 mx-auto">
                <Container className="text-3xl tracking-wider font-light text-gray px-6 mb-7">
                  Contact Report
                </Container>
                <Container className="mt-5 m-0 flex flex-col px-6 justify-start text-start items-start min-w-[500px] ">
                  <Text className="m-0 text-lg inline font-light text-gray w-full ">
                    Name:
                    <Text className="font-semibold inline ml-5">{name}</Text>
                    <Container className="my-0 py-0 h-[1px] border-0 rounded-sm bg-[#1926552b] min-w-[350px] mt-2"></Container>
                  </Text>
                  <Text className="m-0 mt-3 text-lg inline font-light text-gray w-full ">
                    Email:
                    <Link
                      href={`mailto:${email}`}
                      className="font-semibold inline ml-5 text-sm"
                    >
                      {email}
                    </Link>
                    <Container className="my-0 py-0 h-[1px] border-0 rounded-sm bg-[#1926552b] min-w-[350px] mt-2"></Container>
                  </Text>
                  <Text className="m-0 mt-3 text-lg inline font-light text-gray w-full ">
                    Phone:
                    <Text className="font-semibold inline ml-5">{phone}</Text>
                    <Container className="my-0 py-0 h-[1px] border-0 rounded-sm bg-[#1926552b] min-w-[350px] mt-2"></Container>
                  </Text>
                  <Text className="m-0 w-full flex items-start">
                    <Text className="mb-2 mt-0 text-lg font-light text-gray">
                      Message:
                    </Text>
                    <Text className="font-semibold mt-0 max-w-[350px]">
                      {message}
                    </Text>
                    <Container className="my-0 py-0 h-[1px] border-0 rounded-sm bg-[#1926552b] min-w-[350px] mt-2"></Container>
                  </Text>
                </Container>
                <code className="text-xs text-gray-500 mt-5">
                  This email was sent by the contact form on your website.
                </code>
              </Container>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default contactEmail;
