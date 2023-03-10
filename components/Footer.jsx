import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w='100%'>
      <Flex
        width={{ base: "100%", lg: "50%" }}
        flexDirection={{ base: "column", sm: "row" }}
        mx={{ base: 5, lg: 20 }}
        py={14}>
        <Box me='auto'>
          <Text my={1.5} fontWeight='semibold' fontSize={{ base: 16, md: 22 }}>
            Active Trending
          </Text>
          <Text my={1.5} fontWeight='light' fontSize={{ base: 16, md: 22 }}>
            Men
          </Text>
          <Text my={1.5} fontWeight='light' fontSize={{ base: 16, md: 22 }}>
            Women
          </Text>
          <Text my={1.5} fontWeight='light' fontSize={{ base: 16, md: 22 }}>
            Kids
          </Text>
        </Box>
        <Box>
          <Text my={1.5} fontWeight='semibold' fontSize={{ base: 16, md: 22 }}>
            About Us
          </Text>
          <Text my={1.5} fontWeight='light' fontSize={{ base: 16, md: 22 }}>
            About Company
          </Text>
          <Text my={1.5} fontWeight='light' fontSize={{ base: 16, md: 22 }}>
            Connect Us
          </Text>
          <Text my={1.5} fontWeight='light' fontSize={{ base: 16, md: 22 }}>
            Our Branches
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default Footer;
