'use client';

import BoardMembers from '@/components/pages/aboutus/BoardMembers';
import Text from '@/components/pages/home/Text';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative, Autoplay, Mousewheel } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import Footer from '@/components/molecules/Footer';

export default function page() {
	const swiperRef = useRef(null);

	
	const handleScrollInside = (swiper) => {
		let scrollTimeout;
		
		swiper.on("slideChangeTransitionEnd", () => {
			swiper.mousewheel.disable();
			swiper.allowTouchMove = true;
	
			const activeSlide = document.querySelector(".swiper-slide-active");
			const hasVerticalScrollbar = activeSlide.scrollHeight > activeSlide.clientHeight;
	
			if (hasVerticalScrollbar) {
				const scrollDifferenceTop = activeSlide.scrollHeight - activeSlide.swiperSlideSize;
	
				if (activeSlide.scrollTop === 0) activeSlide.scrollTop += 1;
				if (activeSlide.scrollTop === scrollDifferenceTop) activeSlide.scrollTop -= 2;
	
				const slowScroll = () => {
					if (scrollTimeout) clearTimeout(scrollTimeout);
	
					scrollTimeout = setTimeout(() => {
						if (activeSlide.scrollTop <= 0 || scrollDifferenceTop - activeSlide.scrollTop <= 1) {
							swiper.mousewheel.enable();
							swiper.allowTouchMove = true;
							activeSlide.removeEventListener("scroll", slowScroll);
						} else {
							const step = Math.sign(scrollDifferenceTop - activeSlide.scrollTop) * 0.5; // Slower step
							activeSlide.scrollTop += step;
						}
					}, 1000);
				};
	
				activeSlide.addEventListener("scroll", slowScroll, { passive: true });
			} else {
				swiper.mousewheel.enable();
				swiper.allowTouchMove = true;
			}
		});
	
		// Trigger scroll check on the first load
		const activeSlide = document.querySelector(".swiper-slide-active");
		const hasVerticalScrollbar = activeSlide.scrollHeight > activeSlide.clientHeight;
		if (hasVerticalScrollbar) {
			swiper.emit("slideChangeTransitionEnd");
		}
	};


    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            handleScrollInside(swiperRef.current.swiper);
        }
    }, []);


    const config = {
        modules: [EffectCreative, Pagination, Navigation, Autoplay, Mousewheel],
        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, '-100%', -400],
            },
            next: {
                translate: [0, '100%', 0],
            },
        },
        direction: 'vertical',
        speed: 1200,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
		// onSlideChange: () => setScrollEnabled(false),
		mousewheel: true ,
		on: {
            init: (swiper) => {
                handleScrollInside(swiper);
            },
        },
    };

    const t = useTranslations('aboutUs');


    return (
        <div>
            <Swiper {...config}  ref={swiperRef} className='mySwiper h-screen'>
                <SwiperSlide> <Text  btn={false} overlay={false} img={`/assets/aboutus/1.png`} title ={t("aboutUsTitle")} description ={t("aboutUs")}  /> </SwiperSlide>
                <SwiperSlide> <Text  btn={false} img={`/assets/aboutus/2.png`} title ={t("ourVisionTitle")} description ={t("ourVision")}  /> </SwiperSlide>
                <SwiperSlide> <Text  btn={false} img={`/assets/aboutus/3.png`} title ={t("ourMissionTitle")} description ={t("ourMission")}  /> </SwiperSlide>
                <SwiperSlide className="overflow-auto" > <BoardMembers />  </SwiperSlide>
				<SwiperSlide className="bg-white overflow-auto  !flex flex-col md:justify-center  max-md:pt-[50px] items-center " > <Footer id={"footer2"} /> </SwiperSlide>
            </Swiper>

			<div className="swiper-pagination"></div>
        </div>
    );
}
