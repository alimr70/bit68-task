import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

function FeaturedAndMostViewed({ type }) {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredData, setFeaturedData] = useState([]);

  const featured = async () => {
    const res = await fetch("api/featured/");
    const data = await res.json();
    if (data) {
      setIsLoading(false);
      setFeaturedData(data);
    }
  };
  useEffect(() => {
    featured();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Skeleton
      h={isLoading ? { base: 225, md: 380 } : "auto"}
      isLoaded={!isLoading}>
      <Box py={{ base: 10, md: 21 }} className='custom-scroll'>
        <Heading
          mx={{ base: 5, lg: 20 }}
          mb={6}
          fontSize={{ base: 16, md: 30 }}
          color='#2D2F78'>
          {type === "featured" ? "Featured items" : "Most Viewed items"}
        </Heading>
        <Box overflowX='auto' mx={{ base: 5, lg: 20 }}>
          <Flex>
            {featuredData
              .filter((item) => item.type === type)
              .map((item, idx) => {
                const priceDiff =
                  item.price_before_sale - item.price_after_sale;
                return (
                  <Box key={idx} me={37}>
                    <Image
                      layout='fixed'
                      width={176}
                      height={176}
                      src={item.image}
                      alt={item.name}
                    />
                    <Text fontWeight='medium' fontSize={18}>
                      {item.name}
                    </Text>
                    {priceDiff > 0 ? (
                      <Flex color='#BA0829' align='baseline'>
                        <Text
                          whiteSpace='nowrap'
                          fontSize={28}
                          fontWeight='bold'>
                          EGP {item.price_after_sale}
                        </Text>
                        <Text
                          whiteSpace='nowrap'
                          fontSize={16}
                          fontWeight='bold'>
                          Save {priceDiff}
                        </Text>
                      </Flex>
                    ) : (
                      <Text
                        whiteSpace='nowrap'
                        color='#2D2F7D'
                        fontSize={28}
                        fontWeight='bold'>
                        EGP {item.price_after_sale}
                      </Text>
                    )}
                  </Box>
                );
              })}
          </Flex>
        </Box>
      </Box>
    </Skeleton>
  );
}
export default FeaturedAndMostViewed;
