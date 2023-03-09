import { Box } from "@chakra-ui/react";
import Image from "next/image";

const CustomIcon = ({ w, h, src, alt }) => {
  return (
    <Box width={`${w}px`} height={`${h}px`}>
      <Image width={w} height={h} src={src} alt={alt} />
    </Box>
  );
};
export default CustomIcon;
