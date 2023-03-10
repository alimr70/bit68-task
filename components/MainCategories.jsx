import {
  Box,
  Heading,
  IconButton,
  Skeleton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import CustomIcon from "./CustomIcon";

const MainCategories = () => {
  const [slider, setSlider] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: false,
    slidesToShow: useBreakpointValue({ base: 3, sm: 3, lg: 4, xl: 5 }),
    slidesToScroll: 1,
  };

  const top = useBreakpointValue({ base: "80%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const width = useBreakpointValue({ base: 100, md: 140 });
  const height = useBreakpointValue({ base: 100, md: 140 });

  const categories = async () => {
    const res = await fetch("api/categories");
    const data = await res.json();
    if (data) {
      setIsLoading(false);
      setCategoriesData(data);
    }
  };
  useEffect(() => {
    categories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Skeleton
      h={isLoading ? { base: 225, md: 380 } : "auto"}
      isLoaded={!isLoading}>
      <Box py={{ base: 10, md: 21 }}>
        <Heading
          mx={{ base: 5, lg: 20 }}
          fontSize={{ base: 16, md: 30 }}
          color='#2D2F78'>
          Main Categories
        </Heading>
        <Box
          position={"relative"}
          // my={{ base: 6, md: 0 }}
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
              {categoriesData.map((img, index) => (
                <Box key={index} textAlign='center' my={6}>
                  <Image
                    width={width}
                    height={height}
                    src={img.image}
                    alt={img.name}
                  />
                  <Text fontSize={{ base: 16, md: 20 }}>{img.name}</Text>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Skeleton>
  );
};
export default MainCategories;
