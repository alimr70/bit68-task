import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import CategoriesAndBrands from "../components/CategoriesAndBrands";
import ImageSaleSection from "../components/ImageSaleSection";
import FeaturedAndMostViewed from "../components/FeaturedAndMostViewed";
import BrandSale from "../components/BrandSale";
import Footer from "../components/Footer";
import getFeaturedData from "../lib/getFeaturedData";
import getCategoriesAndBrands from "../lib/getCategoriesAndBrands";
import getSlider from "../lib/getSlider";

export default function Home({
  sliderData,
  featuredData,
  categoriesData,
  brandsData
}) {
  return (
    <Container maxW='1440px' p={0}>
      <Head>
        <title>Bit68 Task</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <HeroSlider sliderData={sliderData} />
      <CategoriesAndBrands type='categories' data={categoriesData} />
      <ImageSaleSection
        src={{ base: "/Group 1352.png", sm: "/Mask Group 6.png" }}
        h={{ base: 362, sm: 350 }}
        w={{ base: 375, sm: 1440 }}
        alt="let's get active"
      />
      <CategoriesAndBrands type='brands' data={brandsData} />
      <ImageSaleSection
        src={{ base: "/Group 1339.png" }}
        h={{ base: 119, sm: 456 }}
        w={{ base: 375, sm: 1440 }}
        alt="let's get active"
      />
      <FeaturedAndMostViewed type='featured' featuredData={featuredData} />
      <FeaturedAndMostViewed type='most_viewed' featuredData={featuredData} />
      <BrandSale />
      <Divider />
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  const sliderData = await getSlider()
  const featuredData = await getFeaturedData()
  const categoriesData = await getCategoriesAndBrands('categories')
  const brandsData = await getCategoriesAndBrands('brands')
  return{
    props: {
      sliderData,
      featuredData,
      categoriesData,
      brandsData
    }
  }
}