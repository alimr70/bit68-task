import { Box, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgsData, setImgsData] = useState([]);
  const [imgIdx, setImgIdx] = useState(0);

  const sliderImgs = async () => {
    const res = await fetch("api/slider");
    const data = await res.json();
    if (data) {
      setIsLoading(false);
      setImgsData(data);
    }
    console.log(imgsData);
  };
  useEffect(() => {
    sliderImgs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Skeleton isLoaded={!isLoading} h={300}>
      <Box minH='fit-content' maxH={540}>
        {!isLoading && (
          <Image
            src={imgsData[imgIdx].image}
            width='1440px'
            height='540px'
            alt='image slider'
          />
        )}
      </Box>
    </Skeleton>
  );
};
export default ImageSlider;
