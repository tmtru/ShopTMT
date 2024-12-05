import React from "react";
import SectionHeading from "./SectionsHeading/SectionHeading";
import Card from "../Card/Card";
import Jeans from '../../assets/Jeans.webp';
import Jeans1 from '../../assets/Jeans1.jpg';
import Jeans2 from '../../assets/Jeans2.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './NewArrivals.css';

const items = [
    { 'title': 'Jeans', imagePath: Jeans },
    { 'title': 'Jeans', imagePath: Jeans1 },
    { 'title': 'Jeans', imagePath: Jeans2 },
    { 'title': 'Jeans', imagePath: Jeans1 },
    { 'title': 'Jeans', imagePath: Jeans2 },
    { 'title': 'Jeans', imagePath: Jeans2 },
    { 'title': 'Jeans', imagePath: Jeans2 },
    { 'title': 'Jeans', imagePath: Jeans2 }
];

const NewArrivals = () => {
    return (
        <>
            <SectionHeading title={'New Arrivals'} className="section-heading" />

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true} 
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    980: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1170: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="my-swiper mx-5 pb-4"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={item.title + index}>
                        <Card title={item.title} imagePath={item.imagePath} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

SectionHeading.defaultProps = {
    title: "New Arrivals"
};

export default NewArrivals;
