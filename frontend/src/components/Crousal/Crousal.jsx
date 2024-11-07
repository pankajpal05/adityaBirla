"use client"
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Crousal.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { fetchCrousalData } from '@/services/crousal.service';
import { getImageUrl } from '@/utils/common.util';
import _get from "lodash/get";
import Card from '../Card/Card';


const Crousal = () => {
    const [crousalCardData, setCrousalCardData] = useState([]);

    const apiCall = async() =>{
        const crousalData = (await fetchCrousalData()) || [];
        setCrousalCardData(crousalData)       
    } 

    useEffect( () => {
        apiCall()
    }, []);

console.log("qwertyuioasdfghjkln",crousalCardData);

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {crousalCardData.map((article, index) => {
                    console.log(article);

                    const imageUrl = getImageUrl(_get(article.cardListView, "Image.url"));
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
                                image={imageUrl}
                                className="flex-col"
                            />
                        </SwiperSlide>
                    )
                })}
                {/* <SwiperSlide>hello</SwiperSlide>
                <SwiperSlide>hello</SwiperSlide>
                <SwiperSlide>hello</SwiperSlide>
                <SwiperSlide>hello</SwiperSlide> */}
            </Swiper>
        </>
    );
}
export default Crousal 