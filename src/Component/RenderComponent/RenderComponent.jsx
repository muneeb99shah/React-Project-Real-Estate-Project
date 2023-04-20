import React from "react";
import HeroSection from "../HeroComponent/HeroSection";
import CardCarusel from "../CardCarusel/CardCarusel";
import AddToday from "../AddToday/AddToday";
import Calculate from "../Calculate/Calculate";
import PropertyCarousel from "../CarouselComponent/PropertyCarousel";
import OurPartners from "../OurPartners/OurPartners";
import EstateAgent from "../CommentApi/EstateAgent";
import Footer from "../Footer/Footer";
import NavRoutLayout from "../NavRoute/NavRoutLayout";
import CategoriesRender from "../Categories/CategoriesRender";
import BuySellRender from "../BuySell/BuySellRender";

export default function RenderComponent() {
  return (
    <>
      <NavRoutLayout />
      <HeroSection />
      <CategoriesRender />
      <BuySellRender />
      <CardCarusel />
      <AddToday />
      <Calculate />
      <PropertyCarousel />
      <OurPartners />
      <EstateAgent />
      <Footer />
    </>
  );
}
