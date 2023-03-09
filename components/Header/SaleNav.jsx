import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const SaleNav = ({ title }) => {
  return (
    <Box
      backgroundColor='#2D2F87'
      height={{ base: 8, xs: 10 }}
      display='flex'
      justifyContent='center'
      alignItems='center'>
      <Text fontSize={[12, 14]} color='white'>
        {title}
      </Text>
    </Box>
  );
};
