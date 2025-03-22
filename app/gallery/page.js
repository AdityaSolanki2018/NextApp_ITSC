import React from "react";
import VideoCarousel from "@/components/sections/videoCarousel";
import GalleryGrid from "@/components/sections/GalleryGrid";
import Container from "@/components/Container";
function gallery() {
  return (
    <div className="dark:bg-gray-900">
      <VideoCarousel />
      <Container
        textAllign={"text-center text-white px-4 md:px-8 lg:px-12 mx-auto"}
        title={"Our Projects"}
        h1={
          "Our Successful Projects"
        }
        h2={
          "Browse through our gallery to see how we’ve powered homes and businesses with cost efficient IT solutions"
        }
      />
      <GalleryGrid />
    </div>
  );;
}

export default gallery;
