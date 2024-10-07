import Hero from "@/components/home/Hero";
import React, { Suspense } from "react";
import NavBar from "@/components/navbar/NavBar";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LoadingContainer from "@/components/global/LoadingContainer";
function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  )
}
export default HomePage;
