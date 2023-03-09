import { Box, Button, Divider, Slide, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CustomIcon from "../CustomIcon";
import LangSwitcher from "../LangSwitcher";
import MainNav from "./MainNav";
import StoreLocator from "./SearchNav/StoreLocator";

const SideNav = () => {
  const { locale } = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        onClick={onToggle}
        variant='unstyled'
        minW='fit-content'
        minH='fit-content'>
        <CustomIcon
          w={32}
          h={32}
          src='/vuesax-linear-menu.svg'
          alt='hamburger menu'
        />
      </Button>
      <Slide
        direction={locale === "en" ? "left" : "right"}
        in={isOpen}
        style={{ zIndex: 10 }}>
        <Box w='100%' h='100svh' backgroundColor='rgba(18, 18, 18, 0.8)'>
          <Box w='90%' h='100svh' backgroundColor='white' overflowY='auto'>
            <Button
              my={5}
              ms={5}
              variant='unstyled'
              minW='fit-content'
              minH='fit-content'
              onClick={onToggle}>
              <CustomIcon w={32} h={32} src='/Group 3230.svg' alt='close' />
            </Button>
            <Divider />
            <Box ms={5} my={5}>
              <StoreLocator />
            </Box>
            <Divider />
            <MainNav />
            <LangSwitcher />
          </Box>
        </Box>
      </Slide>
    </>
  );
};
export default SideNav;
