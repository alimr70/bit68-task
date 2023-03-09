import NextLink from "next/link";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

const StoreLocator = () => {
  return (
    <NextLink href='/' passHref>
      <Link style={{ textDecoration: "none" }}>
        <Flex>
          <Box pe='5px' minW='fit-content'>
            <Box width='24px' height='24px'>
              <Image
                width={24}
                height={24}
                src='/vuesax-bold-map.png'
                alt='store locator'
              />
            </Box>
          </Box>
          <Text>Store Locator</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};
export default StoreLocator;
