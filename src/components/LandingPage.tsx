import {
  Box,
  Container,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import profile from "../assets/04.jpg";
import game from "../assets/05.jpg";
import countries from "../assets/07.jpg";
import shows from "../assets/06.jpg";
import quiz from "../assets/08.jpg";
import ball from "../assets/011.png";
import react from "../assets/React logo.webp";
import typescript from "../assets/TypeScript logo.png";
import chakra from "../assets/Chakra.png";

const LandingPage = () => {
  return (
    <Container
      maxW="100%"
      position="relative"
      mx="auto"
      px="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={ball}
        position="absolute"
        top={{ base: "-400", lg: "-300" }}
        left={{ base: "-150", lg: "-100" }}
      />
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        marginX={{ lg: "140px" }}
      >
        <Container
          maxW={{ base: "174px", md: "322px", lg: "445px" }}
          height={{ base: "200px", md: "430px", lg: "600px" }}
        >
          <Image src={profile} />
        </Container>
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Box
            maxW={{ base: "343px", lg: "706px" }}
            mt={{ md: "40px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} mb="20px">
              Nice to meet you!<br></br>I'm Cynthia Omariba.
            </Text>
            <Text
              px={{ base: "20px", md: "0" }}
              fontSize={{ base: "12px", md: "15px" }}
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
            h="38px"
            display="flex"
            justifyContent={{
              base: "center",
              md: "flex-start",
            }}
          >
            <Text>
              <a href="#contact-me" color="#fff">
                CONTACT ME
              </a>
              <Box width="30%"></Box>
            </Text>
          </Container>
        </VStack>
      </Box>
      <Container
        maxW={{ base: "345px", md: "708px", lg: "1110px" }}
        borderTop="2px solid white"
        pt="40px"
      >
        <HStack
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          mb={{ md: "100px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box width="345px" height="80px">
            <Text fontSize={{ base: "xl", md: "5xl" }} fontWeight="bold">
              HTML
            </Text>
            <p>1 Year Experience</p>
          </Box>
          <Box width="345px" height="80px">
            <Text fontSize={{ base: "xl", md: "5xl" }} fontWeight="bold">
              CSS
            </Text>
            <p>1 Year Experience</p>
          </Box>
          <Box width="345px" height="80px">
            <Text fontSize={{ base: "xl", md: "5xl" }} fontWeight="bold">
              JavaScript
            </Text>
            <p>1 Year Experience</p>
          </Box>
        </HStack>
        <HStack
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          mb={{ md: "100px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box width="345px" height="80px">
            <Text fontSize={{ base: "xl", md: "5xl" }} fontWeight="bold">
              TypeScript
            </Text>
            <p>1 Year Experience</p>
          </Box>
          <Box width="345px" height="80px">
            <Text fontSize={{ base: "xl", md: "5xl" }} fontWeight="bold">
              React.js
            </Text>
            <p>1 Year Experience</p>
          </Box>
          <Box width="345px" height="80px">
            <Text fontSize={{ base: "xl", md: "5xl" }} fontWeight="bold">
              Next.js
            </Text>
            <p>1 Year Experience</p>
          </Box>
        </HStack>
      </Container>
      <Container maxW="1110px">
        <Text fontSize="5xl" fontWeight="bold" mt="60px">
          Projects
        </Text>
        <Box mt="40px">
          <HStack
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="30px"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box width={{ base: "100%", md: "calc(50% - 15px)" }} mb="30px">
              <Box>
                <Image src={game} />
              </Box>
              <Text fontWeight="bold" my="8px">
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
              </HStack>
              <HStack
                mt="10px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "13px", md: "16px" }}
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
            <Box width={{ base: "100%", md: "calc(50% - 15px)" }} mb="30px">
              <Box>
                <Image src={countries} />
              </Box>
              <Text fontWeight="bold" my="8px">
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
              </HStack>
              <HStack
                mt="10px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "13px", md: "16px" }}
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
            flexWrap="wrap"
            gap="30px"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box width={{ base: "100%", md: "calc(50% - 15px)" }} mb="30px">
              <Box>
                <Image src={shows} />
              </Box>
              <Text fontWeight="bold" my="8px">
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
              </HStack>
              <HStack
                mt="10px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "13px", md: "16px" }}
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
            <Box width={{ base: "100%", md: "calc(50% - 15px)" }} mb="30px">
              <Box>
                <Image src={quiz} />
              </Box>
              <Text fontWeight="bold" my="8px">
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
              </HStack>
              <HStack
                mt="10px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "13px", md: "16px" }}
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
