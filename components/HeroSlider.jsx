import { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import CustomIcon from "./CustomIcon";

const HeroSlider = ({sliderData}) => {
  const [slider, setSlider] = useState();

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const top = useBreakpointValue({ base: "80%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Box
      position={"relative"}
      my={{ base: 6, md: 0 }}
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
      <Slider
        {...settings}
        ref={(slider) => setSlider(slider)}
        appendDots={(dots) => <ul>{dots}</ul>}>
        {sliderData.map((img, index) => (
          <Box
            key={index}
            h={{ base: 200, md: 450, xl: 540 }}
            w='auto'
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${img.image})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
export default HeroSlider