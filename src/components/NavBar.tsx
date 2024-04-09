import { Box, Container, HStack, Spacer, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <Container maxW="100%" marginY="40px">
      <Box
        width={{ md: "708.49", lg: "708.49" }}
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        marginX={{ base: "0", sm: "0", md: "0", lg: "140px" }}
      >
        <Text
          fontSize="20px"
          marginBottom={{ base: "15px", sm: "15px", md: "0", lg: "0" }}
          textAlign="center"
        >
          cynthiaomariba
        </Text>
        <Spacer />

        <HStack
          display="flex"
          justifyContent="center"
          paddingRight={{ md: "30px" }}
        >
          <FaGithub />
          <IoLogoLinkedin />
          <FaXTwitter />
        </HStack>
      </Box>
    </Container>
  );
};

export default NavBar;
