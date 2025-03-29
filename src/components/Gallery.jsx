import React, { useEffect, useState } from "react";


const GalleryComponent = ({ images }) => {
  const [mainImage, setMainImage] = useState();

  console.log(images);
  useEffect(() => {
    setMainImage(images[0])
  }, [images])


  return (
    <div className="flex flex-col items-center w-full md:w-8/12  mx-auto p-4">
      {/* Main Image */}
      <img
        src={mainImage?.src}
        alt="Main"
        loading="lazy"
        className="w-full aspect-video object-contain h-auto rounded-lg  mb-4"
      />

      {/* Thumbnails */}
      <div className="flex w-full  justify-center space-x-4  py-2 ">
        {images?.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            onClick={() => setMainImage(img)}
            className="h-12 w-12 md:h-28 md:w-28 cursor-pointer rounded-md lg:rounded-md hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
