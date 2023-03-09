import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const Link = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink style={{ textDecoration: "none" }}>{children}</ChakraLink>
    </NextLink>
  );
};
export default Link;
