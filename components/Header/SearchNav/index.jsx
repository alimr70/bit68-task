import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import CustomIcon from "../../CustomIcon";
import SideNav from "../SideNav";
import SearchInput from "./SearchInput";
import StoreLocator from "./StoreLocator";
import UtilsBtns from "./UtilsBtns";

export default function SearchNav() {
  return (
    <>
      <Flex
        py={{ base: "10px", md: "25px" }}
        px={{ base: 5, lg: 20 }}
        justify='space-between'
        align='center'>
        <Box display={{ base: "none", md: "block" }}>
          <StoreLocator />
        </Box>
        <Box w='100%' maxW={752} display={{ base: "none", md: "block" }}>
          <SearchInput />
        </Box>
        <Box display={{ base: "block", md: "none" }} me='auto'>
          {/* <CustomIcon
            w={32}
            h={32}
            src='/vuesax-linear-menu.svg'
            alt='hamburger menu'
          /> */}
          <SideNav />
        </Box>
        <UtilsBtns />
      </Flex>
      <Box w='100%' display={{ base: "block", md: "none" }}>
        <SearchInput />
      </Box>
    </>
  );
}
