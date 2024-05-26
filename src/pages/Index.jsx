import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FaPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="header" justifyContent="space-between" alignItems="center" p={4} bg="white" boxShadow="sm">
        <FaPlane size="24px" />
        <Box as="nav">
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>About</Link>
          <Link href="#" p={2}>Services</Link>
          <Link href="#" p={2}>Contact</Link>
        </Box>
      </Flex>
      <Image src="/images/header.jpg" alt="Luxury Jet Travel" objectFit="cover" width="100%" height="60vh" />
      <Container maxW="container.md" p={4}>
        <Text fontSize="2xl" mb={2}>Experience the Luxury of High-End Travel</Text>
        <Text>Welcome to our exclusive travel services where we offer nothing but the best. Explore our services and let us take you on a journey of comfort and luxury.</Text>
      </Container>
    </Box>
  );
};

export default Index;