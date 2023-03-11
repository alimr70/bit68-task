import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import CustomIcon from "./CustomIcon";

const CategoriesAndBrands = ({ type, data }) => {
  const [slider, setSlider] = useState();

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: false,
    slidesToShow: useBreakpointValue({ base: 2, sm: 3, lg: 4, xl: 5 }),
    slidesToScroll: 1,
  };

  const top = useBreakpointValue({ base: "80%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const width = useBreakpointValue({ base: 100, md: 140 });
  const height = useBreakpointValue({ base: 100, md: 140 });
  const brandWidth = useBreakpointValue({ base: 57, md: 76 });
  const brandHeight = useBreakpointValue({ base: 54, md: 73 });

  return (
    <Box py={{ base: 10, md: 21 }}>
      <Heading
        mx={{ base: 5, lg: 20 }}
        fontSize={{ base: 16, md: 30 }}
        color='#2D2F78'>
        {type === "categories" ? "Main Categories" : "Popular Brands"}
      </Heading>
      <Box
        position={"relative"}
        width={"100%"}
        overflow={"hidden"}>
        <IconButton
          mx={{ md: 3, lg: 20 }}
          display={{ base: "none", md: "block" }}
          background='transparent'
          _hover={{}}
          _active={{}}
          aria-label='left-arrow'
          position='absolute'
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <CustomIcon
            w={47}
            h={47}
            src='/vuesax-linear-arrow-left.svg'
            alt='left arrow'
          />
        </IconButton>
        <IconButton
          mx={{ md: 3, lg: 20 }}
          display={{ base: "none", md: "block" }}
          background='transparent'
          _hover={{}}
          _active={{}}
          aria-label='right-arrow'
          position='absolute'
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <CustomIcon
            w={47}
            h={47}
            src='/vuesax-linear-arrow-right.svg'
            alt='right arrow'
          />
        </IconButton>
        <Box mx={{ base: 5, md: 36 }}>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {data.map((img, index) => (
              <Box key={index} textAlign='center' my={6} mx={8}>
                {type === "categories" ? (
                  <Image
                    width={width}
                    height={height}
                    src={img.image}
                    alt={img.name}
                  />
                ) : (
                  <Flex
                    mx='auto'
                    align='center'
                    justify='center'
                    w={width}
                    h={height}
                    backgroundColor='#2D2F7D'
                    borderRadius='50%'>
                    <Image
                      width={brandWidth}
                      height={brandHeight}
                      src={img.image}
                      alt={img.sale_percentage}
                    />
                  </Flex>
                )}
                <Text fontSize={{ base: 16, md: 20 }}>
                  {type === "categories"
                    ? img.name
                    : `Up to ${img.sale_percentage}%`}
                </Text>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
export default CategoriesAndBrands;
