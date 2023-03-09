import NextLink from "next/link";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import CustomIcon from "../../CustomIcon";

const StoreLocator = () => {
  return (
    <NextLink href='/' passHref>
      <Link style={{ textDecoration: "none" }}>
        <Flex>
          <Box pe='5px' minW='fit-content'>
            <CustomIcon
              w={24}
              h={24}
              src='/vuesax-bold-map.png'
              alt='store locator'
            />
          </Box>
          <Text whiteSpace='nowrap' fontWeight='semibold'>
            Store Locator
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
};
export default StoreLocator;
