import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import CustomIcon from "../CustomIcon";
import LangSwitcher from "../LangSwitcher";
import MainNav from "./MainNav";
import StoreLocator from "./SearchNav/StoreLocator";

const SideNav = () => {
  const { locale } = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
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
      <Drawer
        placement={locale === "en" ? "left" : "right"}
        onClose={onClose}
        isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          w='90%'
          h='100svh'
          backgroundColor='white'
          overflowY='auto'>
          <DrawerBody>
            <Button
              my={5}
              ms={5}
              variant='unstyled'
              minW='fit-content'
              minH='fit-content'
              onClick={onClose}>
              <CustomIcon w={32} h={32} src='/Group 3230.svg' alt='close' />
            </Button>
            <Divider />
            <Box ms={5} my={5}>
              <StoreLocator />
            </Box>
            <Divider />
            <MainNav />
            <LangSwitcher />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SideNav;
