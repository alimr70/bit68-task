import { Box, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SearchInput = () => {
  const { locale } = useRouter();

  return (
    <Box mx={5}>
      <Input
        style={{
          background: `url("/vuesax-linear-search-normal.svg") no-repeat ${
            locale === "ar" ? "32px" : "calc(100% - 32px)"
          }`,
        }}
        px={8}
        py={4}
        borderRadius='xl'
        placeholder={locale === "ar" ? "بحث" : "Search"}
      />
    </Box>
  );
};
export default SearchInput;
