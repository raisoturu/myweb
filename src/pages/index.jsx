import Head from "next/head";
import PageLayout from "../components/PageLayout";
import {
  Heading,
  Stack,
  Text,
  Flex,
  Image,
  Code,
  useColorMode,
} from "@chakra-ui/core";
import MotionBox from "../components/MotionBox";
export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <PageLayout d="flex" alignItems={{ md: "center" }} h="full" flexGrow={1}>
      <Head>
        <title>Hi, I'm Wisesa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        flexDirection={{ default: "column-reverse", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
        px={{ default: 6, md: 0 }}
      >
        <Stack w={{ lg: 3 / 5 }} mt={{ _: 2, lg: 0 }}>
          <Heading as="h1" size="xl" mb={2}>
            Hi, I'm Wisesa. 🐱
          </Heading>
          <Text fontSize={{ _: 16, lg: 18 }}>
            An ordinary student from{" "}
            <Code d="inline" variantColor="red" fontWeight="bold">
              Telkom University
            </Code>{" "}
            that has a strong enthusiasm for new technology. Interested in{" "}
            <Code d="inline" variantColor="orange">
              machine learning
            </Code>
            ,{" "}
            <Code d="inline" variantColor="red">
              web technologies
            </Code>
            , fall in love with{" "}
            <Code d="inline" variantColor="blue">
              react.js
            </Code>{" "}
            and{" "}
            <Code d="inline" variantColor="yellow">
              javascript.
            </Code>
          </Text>
        </Stack>
        <Flex w={{ lg: 2 / 5 }} justifyContent="center" alignItems="center">
          <MotionBox
            whileTap={{
              scale: 0.95,
              rotate: -5,
              transition: { type: "spring", stiffness: 500 },
            }}
          >
            <Image
              draggable={false}
              size="17em"
              rounded="full"
              src="/img/me2.jpg"
              alt="it's me"
              style={{ filter: colorMode === "dark" && "grayscale(45%)" }}
            />
          </MotionBox>
        </Flex>
      </Stack>
    </PageLayout>
  );
}