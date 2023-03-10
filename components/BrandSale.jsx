import { Flex } from "@chakra-ui/react";
import Image from "next/image";

const BrandSale = () => {
  return (
    <Flex
      py={16}
      mx={{ base: 5, lg: 20 }}
      gap='29px'
      flexDirection={{ base: "column", sm: "row" }}>
      <Image
        src='/Screenshot 2022-11-21 at 8.45.01 PM.png'
        width={624}
        height={221}
        alt='crocs sale'
      />
      <Image
        src='/Screenshot 2022-11-21 at 8.45.19 PM.png'
        width={623}
        height={221}
        alt='addidas sale'
      />
    </Flex>
  );
};
export default BrandSale;
