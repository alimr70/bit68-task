import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import StoreLocator from "./StoreLocator";
import UtilsBtns from "./UtilsBtns";

export default function SearchNav() {
  return (
    <Flex py='25px' px={[5, 5, 10, 20]} justify='space-between' align='center'>
      <Box display={{ base: "block", md: "none" }}>
        <Box width='24px' height='24px'>
          <Image
            width='24px'
            height='24px'
            src='/vuesax-linear-menu.png'
            alt='store locator'
          />
        </Box>
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <StoreLocator />
      </Box>
      <SearchInput />
      <UtilsBtns />
    </Flex>
  );
}
