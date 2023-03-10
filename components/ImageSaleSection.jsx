import { useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

const ImageSaleSection = ({ w, h, src, alt }) => {
  const width = useBreakpointValue(w);
  const height = useBreakpointValue(h);
  const Src = useBreakpointValue(src);
  return (
    <Image
      layout='responsive'
      objectFit='cover'
      src={Src}
      width={width}
      height={height}
      alt={alt}></Image>
  );
};
export default ImageSaleSection;
