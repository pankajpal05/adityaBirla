"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Crousal.css";

import { Navigation, Pagination } from "swiper/modules";
import { fetchCrousalData } from "@/services/crousal.service";
import { getImageUrl } from "@/utils/common.util";
import _get from "lodash/get";
import Card from "../Card/Card";

const Crousal = () => {
  const [crousalCardData, setCrousalCardData] = useState([]);

  const apiCall = async () => {
    const crousalData = (await fetchCrousalData()) || [];
    setCrousalCardData(crousalData);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {crousalCardData.map((article, index) => {
          const imageUrl = getImageUrl(
            _get(article.CarouselComponent, "Image.url")
          );
          const title = article.CarouselComponent.title;
          const date = article.dateComponent.date;
          const category = article.tag;
          const readTime = article.dateComponent.readTime;

          return (
            <SwiperSlide key={index}>
              <Card
                title={title}
                date={date}
                category={category}
                readTime={readTime}
                imageUrl={imageUrl}
                className="flex-col"
                cardView={"Carousel"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Crousal;
