import { Box } from "@chakra-ui/react";
import MainNav from "./MainNav";
import { SaleNav } from "./SaleNav";
import SearchNav from "./SearchNav";

export default function Header() {
  return (
    <>
      <SaleNav title='White Friday sales up to 70% off' />
      <SearchNav />
      <Box display={{ base: "none", md: "block" }}>
        <MainNav />
      </Box>
    </>
  );
}
