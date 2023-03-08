import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const SaleNav = () => {
  return (
    <Box
      backgroundColor='#2D2F87'
      height={{ base: 8, xs: 10 }}
      display='flex'
      justifyContent='center'
      alignItems='center'>
      <Text fontSize={[12, 14]} color='white'>
        White Friday sales up to 70% off
      </Text>
    </Box>
  );
};
