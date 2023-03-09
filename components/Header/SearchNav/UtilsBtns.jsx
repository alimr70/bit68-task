import { Box, Button, Flex } from "@chakra-ui/react";
import CustomIcon from "../../CustomIcon";
import LangSwitcher from "../../LangSwitcher";

const UtilsBtns = () => {
  return (
    <Box>
      <Flex>
        <Box display={{ base: "none", md: "block" }}>
          <LangSwitcher />
        </Box>
        <Button variant='unstyled' minW='fit-content' minH='fit-content' mx={3}>
          <CustomIcon
            w={24}
            h={24}
            src='/vuesax-bold-frame.png'
            alt='profile'
          />
        </Button>
        <Button
          variant='unstyled'
          minW='fit-content'
          minH='fit-content'
          mx={3}
          me={{ base: 0, lg: 3 }}>
          <CustomIcon
            w={29}
            h={28}
            src='/Component 26 – 2.png'
            alt='shopping cart'
          />
        </Button>
      </Flex>
    </Box>
  );
};
export default UtilsBtns;
