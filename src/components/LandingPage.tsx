import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import profile from "../assets/04.jpg";
import game from "../assets/05.jpg";
import countries from "../assets/07.jpg";
import shows from "../assets/06.jpg";
import quiz from "../assets/08.jpg";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              sed voluptas a atque ea placeat modi rerum debitis, delectus,
              architecto corrupti neque. Molestiae deleniti tempore nihil
              debitis quasi adipisci dolorem.
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
            <Button
              colorScheme="teal"
              variant="link"
              size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
            >
              CONTACT ME
            </Button>
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
              <HStack>
                <Text fontSize="12px">REACT</Text>
                <Text fontSize="12px">TYPESCRIPT</Text>
                <Text fontSize="12px">CHAKRA UI</Text>
              </HStack>
            </Box>
            <Box paddingLeft="10px" marginBottom={{ base: "30px" }}>
              <Box>
                <Image src={countries} />
              </Box>
              <Text fontWeight="bold" marginY="8px">
                COUNTRIES WEB APP
              </Text>
              <HStack>
                <Text fontSize="12px">REACT</Text>
                <Text fontSize="12px">TYPESCRIPT</Text>
                <Text fontSize="12px">CHAKRA UI</Text>
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
              <HStack>
                <Text fontSize="12px">REACT</Text>
                <Text fontSize="12px">TYPESCRIPT</Text>
                <Text fontSize="12px">CHAKRA UI</Text>
              </HStack>
            </Box>
            <Box paddingLeft="10px">
              <Box>
                <Image src={quiz} />
              </Box>
              <Text fontWeight="bold" marginY="8px">
                QUIZ WEB APP
              </Text>
              <HStack>
                <Text fontSize="12px">REACT</Text>
                <Text fontSize="12px">TYPESCRIPT</Text>
                <Text fontSize="12px">CHAKRA UI</Text>
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
        >
          <Box
            width={{ base: "340px", sm: "343px", md: "445px", lg: "445px" }}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              autem amet ea natus animi ab repudiandae omnis ipsa atque vel
              reprehenderit alias est corrupti, deserunt aliquid consectetur
              accusamus odio repellendus.
            </Text>
          </Box>
          <Box
            width={{ base: "340px", sm: "340px", md: "445px", lg: "445px" }}
            height={{ base: "327px", sm: "327px", md: "208px", lg: "208px" }}
            marginTop={{ md: "20px", lg: "60px" }}
          >
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
            </Box>
            <Box display="flex" justifyContent="flex-end" marginTop="20px">
              <Button
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
        </Container>
        <NavBar />
      </Container>
    </>
  );
};

export default LandingPage;
