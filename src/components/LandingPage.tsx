import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import profile from "../assets/04.jpg";
import game from "../assets/05.jpg";
import countries from "../assets/07.jpg";
import shows from "../assets/06.jpg";
import quiz from "../assets/08.jpg";
import NavBar from "./NavBar";
import ball from "../assets/011.png";
import { ChangeEvent, useState } from "react";
import React from "react";
import react from "../assets/React logo.webp";
import typescript from "../assets/TypeScript logo.png";
import chakra from "../assets/Chakra.png";

const LandingPage = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";
  const [value, setValue] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <Container maxW="100%" position="relative">
      <Image
        src={ball}
        position="absolute"
        top={{ base: "-430", sm: "-430", md: "-400", lg: "-400" }}
        left={{ base: "-150", sm: "-150", md: "-50", lg: "-150" }}
      />
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        marginX={{ lg: "140px" }}
      >
        <Container
          maxW={{ base: "174.21px", sm: "174.21px", md: "322px", lg: "445px" }}
          height={{ base: "200px", sm: "200px", md: "430px", lg: "600px" }}
        >
          <Image src={profile} />
        </Container>
        <VStack>
          <Box
            maxW={{ base: "343px", sm: "343px", md: "445px", lg: "706px" }}
            height={{ base: "200px", sm: "200px", md: "280px", lg: "303px" }}
            display="flex"
            flexDirection="column"
            marginRight={{ base: "0", sm: "0", md: "80px", lg: "80px" }}
            marginTop={{ base: "0", sm: "0", md: "40px", lg: "40px" }}
          >
            <Text
              fontSize={{ base: "2xl", sm: "2xl", md: "4xl", lg: "5xl" }}
              marginBottom="20px"
              textAlign={{ base: "center", md: "left", lg: "left" }}
            >
              Nice to meet you!<br></br>I'm Cynthia Omariba.
            </Text>
            <Text
              textAlign={{ base: "center", md: "left", lg: "left" }}
              paddingX={{ base: "20px", sm: "20px", md: "0", lg: "0" }}
              fontSize={{ base: "12px", sm: "12px", md: "15px", lg: "15px" }}
            >
              A frontend developer experienced in crafting professional web
              applications for both small and medium-sized businesses. My
              expertise lies in translating client requirements into intuitive
              and visually appealing user interfaces, ensuring compatibility
              across various browsers and devices, focusing on a mobile-first
              approach.
            </Text>
          </Box>
          <Container
            maxW="100%"
            height="38px"
            display="flex"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
            paddingLeft="0"
          >
            <Link>
              <a href="#contact-me" color="#fff">
                CONTACT ME
              </a>
              <Box width="30%"></Box>
            </Link>
            {/* <Button
              colorScheme="teal"
              variant="link"
              size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
              border="2px solid red"
              padding="0"
            >
              CONTACT ME
            </Button> */}
          </Container>
        </VStack>
      </Box>
      <Container
        maxW={{ base: "345px", sm: "345px", md: "708px", lg: "1110px" }}
        height={{ base: "500px", sm: "354px", md: "327px", lg: "327px" }}
        borderTop="2px solid white"
        paddingTop="40px"
        paddingLeft="0"
      >
        <HStack
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent="space-between"
          marginBottom={{ base: "0", sm: "0", md: "100px", lg: "100px" }}
          textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
        >
          <Box width="345px" height="80px">
            <Text
              fontSize={{ base: "xl", sm: "xl", md: "5xl", lg: "5xl" }}
              fontWeight="bold"
            >
              HTML
            </Text>
            <p>1 Year Experience</p>
          </Box>
          <Box width="345px" height="80px">
            <Text
              fontSize={{ base: "xl", sm: "xl", md: "5xl", lg: "5xl" }}
              fontWeight="bold"
            >
              CSS
            </Text>
            <p>1 Year Experience</p>
          </Box>
          <Box width="345px" height="80px">
            <Text
              fontSize={{ base: "xl", sm: "xl", md: "5xl", lg: "5xl" }}
              fontWeight="bold"
            >
              JavaScript
            </Text>
            <p>1 Year Experience</p>
          </Box>
        </HStack>
        <HStack
          justifyContent="space-between"
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
          textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
        >
          <Box width="345px" height="80px">
            <Text
              fontSize={{ base: "xl", sm: "xl", md: "5xl", lg: "5xl" }}
              fontWeight="bold"
            >
              TypeScript
            </Text>
            <p>1 Year Experience</p>
          </Box>
          <Box width="345px" height="80px">
            <Text
              fontSize={{ base: "xl", sm: "xl", md: "5xl", lg: "5xl" }}
              fontWeight="bold"
            >
              React.js
            </Text>
            <p>1 Year Experience</p>
          </Box>
          <Box width="345px" height="80px">
            <Text
              fontSize={{ base: "xl", sm: "xl", md: "5xl", lg: "5xl" }}
              fontWeight="bold"
            >
              Next.js
            </Text>
            <p>1 Year Experience</p>
          </Box>
        </HStack>
      </Container>
      <Container maxW="1110px" maxH="1767px">
        <Text fontSize="5xl" fontWeight="bold" marginTop="60px">
          Projects
        </Text>
        <Box marginTop="40px">
          <HStack
            display="flex"
            justifyContent="space-between"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Box paddingRight="10px" marginBottom={{ base: "30px" }}>
              <Box>
                <Image src={game} />
              </Box>
              <Text fontWeight="bold" marginY="8px">
                GAMEHUB WEB APP
              </Text>
              <Text fontSize="sm">
                GameHub is a dynamic web application designed to cater to gaming
                enthusiasts by providing a centralized platform to discover and
                explore a vast collection of games. Powered by the robust RAWG
                API, GameHub fetches detailed information about games across
                various genres and platforms, ensuring that users can find games
                that suit their preferences and devices.
              </Text>
              <HStack>
                <Text fontSize="16px" fontWeight="bold">
                  TECH STACK:
                </Text>
                <img
                  src={react}
                  alt="React JS logo"
                  style={{ width: "50px", height: "50px" }}
                />
                <img
                  src={typescript}
                  alt="TypeScript logo"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={chakra}
                  alt="Chakra UI logo"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />
                {/* <Text>React JS</Text> */}
                {/* <Text fontSize="12px">TYPESCRIPT</Text>
                <Text fontSize="12px">CHAKRA UI</Text> */}
              </HStack>
              <HStack
                marginTop="10px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "13px", sm: "13px", md: "16px", lg: "16px" }}
              >
                <Link
                  href="https://github.com/Omaribz/game-hub/tree/main/src"
                  isExternal
                  marginRight="20px"
                >
                  Code <Icon as={FaGithub} />
                </Link>
                <Link
                  href="https://game-hub-lyart-seven.vercel.app/"
                  isExternal
                >
                  Live Demo <ExternalLinkIcon mx="2px" />
                </Link>
              </HStack>
            </Box>
            <Box paddingLeft="10px" marginBottom={{ base: "30px" }}>
              <Box>
                <Image src={countries} />
              </Box>
              <Text fontWeight="bold" marginY="8px">
                COUNTRIES WEB APP
              </Text>
              <Text fontSize="sm">
                This is a web application designed to provide users with
                detailed information about countries around the world. By using
                the countries API, it fetches real-time data on countries,
                offering a comprehensive view of various attributes such as
                demographics, geography, language and culture.
              </Text>
              <HStack>
                <Text fontSize="16px" fontWeight="bold">
                  TECH STACK:
                </Text>
                <img
                  src={react}
                  alt="React JS logo"
                  style={{ width: "50px", height: "50px" }}
                />
                <img
                  src={typescript}
                  alt="TypeScript logo"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={chakra}
                  alt="Chakra UI logo"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />
                {/* <Text fontSize="12px">REACT</Text>
                <Text fontSize="12px">TYPESCRIPT</Text>
                <Text fontSize="12px">CHAKRA UI</Text> */}
              </HStack>
              <HStack
                marginTop="10px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "13px", sm: "13px", md: "16px", lg: "16px" }}
              >
                <Link
                  href="https://github.com/Omaribz/countries-app/tree/main/src"
                  isExternal
                  marginRight="20px"
                >
                  Code <Icon as={FaGithub} />
                </Link>
                <Link
                  href="https://countries-app-seven-beta.vercel.app/"
                  isExternal
                >
                  Live Demo <ExternalLinkIcon mx="2px" />
                </Link>
              </HStack>
            </Box>
          </HStack>
          <HStack
            display="flex"
            justifyContent="space-between"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Box paddingRight="10px" marginBottom={{ base: "30px" }}>
              <Box>
                <Image src={shows} />
              </Box>
              <Text fontWeight="bold" marginY="8px">
                RICK&MORTY SHOW
              </Text>
              <Text fontSize="sm">
                Rick and Morty is a fan-centric web application that utilizes
                the Rick and Morty API to fetch detailed information about
                characters the beloved animated series "Rick and Morty".{" "}
              </Text>
              <HStack>
                <Text fontSize="16px" fontWeight="bold">
                  TECH STACK:
                </Text>
                <img
                  src={react}
                  alt="React JS logo"
                  style={{ width: "50px", height: "50px" }}
                />
                <img
                  src={typescript}
                  alt="TypeScript logo"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={chakra}
                  alt="Chakra UI logo"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />
                {/* <Text fontSize="12px">REACT</Text>
                <Text fontSize="12px">TYPESCRIPT</Text>
                <Text fontSize="12px">CHAKRA UI</Text> */}
              </HStack>
              <HStack
                marginTop="10px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "13px", sm: "13px", md: "16px", lg: "16px" }}
              >
                <Link
                  href="https://github.com/Omaribz/rick-morty/tree/main/src"
                  isExternal
                  marginRight="20px"
                >
                  Code <Icon as={FaGithub} />
                </Link>
                <Link href="https://rick-morty-xi-dusky.vercel.app/" isExternal>
                  Live Demo <ExternalLinkIcon mx="2px" />
                </Link>
              </HStack>
            </Box>
            <Box paddingLeft="10px" marginBottom={{ base: "30px" }}>
              <Box>
                <Image src={quiz} />
              </Box>
              <Text fontWeight="bold" marginY="8px">
                QUIZ WEB APP
              </Text>
              <Text>
                This is an interactive web application designed to provide users
                with an engaging and educational experience through quizzes.
              </Text>
              <HStack>
                <Text fontSize="16px" fontWeight="bold">
                  TECH STACK:
                </Text>
                <img
                  src={react}
                  alt="React JS logo"
                  style={{ width: "50px", height: "50px" }}
                />
                <img
                  src={typescript}
                  alt="TypeScript logo"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={chakra}
                  alt="Chakra UI logo"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />
                {/* <Text fontSize="12px">REACT</Text>
                <Text fontSize="12px">TYPESCRIPT</Text>
                <Text fontSize="12px">CHAKRA UI</Text> */}
              </HStack>
              <HStack
                marginTop="10px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "13px", sm: "13px", md: "16px", lg: "16px" }}
              >
                <Link
                  href="https://github.com/Omaribz/quiz-app/tree/main/src"
                  isExternal
                  marginRight="20px"
                >
                  Code <Icon as={FaGithub} />
                </Link>
                <Link href="https://quiz-app-coral-phi.vercel.app/" isExternal>
                  Live Demo <ExternalLinkIcon mx="2px" />
                </Link>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </Container>
      <Container maxW="100%">
        <Container
          maxW="1110px"
          height={{ base: "510px", sm: "510px", md: "550px", lg: "450px" }}
          paddingBottom={{ md: "70px" }}
          borderBottom="2px solid white"
          justifyContent="space-between"
          display="flex"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          id="contact-me"
        >
          <Box
            width={{ base: "300px", sm: "343px", md: "445px", lg: "445px" }}
            height={{ base: "138px", sm: "138px", md: "250px", lg: "208px" }}
          >
            <Text
              fontSize={{ base: "30px", sm: "30px", md: "50px", lg: "50px" }}
              fontWeight="bold"
              marginY="20px"
            >
              Contact
            </Text>
            <Text
              fontSize={{ base: "12px", sm: "12px", md: "18px", lg: "18px" }}
            >
              I would like to hear about your project and how I can help you.
              Please contact me by filling out the form and I will get back to
              you in no time.
            </Text>
          </Box>
          <form
            action="https://formsubmit.co/omaribacynthia2022@gmail.com"
            method="POST"
          >
            <Box
              width={{ base: "300px", sm: "340px", md: "445px", lg: "445px" }}
              height={{ base: "327px", sm: "327px", md: "208px", lg: "208px" }}
              marginTop={{ md: "20px", lg: "60px" }}
            >
              <FormControl isRequired>
                <FormLabel>Names</FormLabel>
                <Input placeholder="Names" name="name" />
              </FormControl>
              <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                  name="email"
                />
                {!isError ? (
                  <FormHelperText>Enter your official email.</FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
              <Text mb="8px">Message</Text>
              <Textarea
                value={value}
                onChange={handleChange}
                placeholder=""
                size="sm"
                name="text"
              />
              <Box display="flex" justifyContent="flex-end" marginTop="20px">
                <Button
                  type="submit"
                  colorScheme="teal"
                  variant="link"
                  fontSize={{
                    base: "12px",
                    sm: "12px",
                    md: "18px",
                    lg: "18px",
                  }}
                  paddingRight={{ base: "12px" }}
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </Box>
          </form>
          {/* <Box
              borderBottom="2px solid white"
              width={{ base: "330px", sm: "330px", md: "445px", lg: "445px" }}
              height="43px"
            >
              <Text
                fontSize={{
                  base: "12px",
                  sm: "12px",
                  md: "18px",
                  lg: "18px",
                }}
              >
                NAME
              </Text>
            </Box>
            <Box
              borderBottom="2px solid white"
              width={{ base: "330px", sm: "330px", md: "445px", lg: "445px" }}
              height="43px"
            >
              <Text
                fontSize={{
                  base: "12px",
                  sm: "12px",
                  md: "18px",
                  lg: "18px",
                }}
              >
                EMAIL
              </Text>
            </Box>
            <Box
              borderBottom="2px solid white"
              width={{ base: "330px", sm: "330px", md: "445px", lg: "445px" }}
              height="107px"
            >
              <Text
                fontSize={{
                  base: "12px",
                  sm: "12px",
                  md: "18px",
                  lg: "18px",
                }}
              >
                MESSAGE
              </Text>
            </Box> */}
        </Container>
        <NavBar />
      </Container>
      <Image
        src={ball}
        position="absolute"
        bottom={{ base: "-300", lg: "-150" }}
        left="-150"
      />
    </Container>
  );
};

export default LandingPage;
