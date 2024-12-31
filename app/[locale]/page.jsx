'use client';
import Section1 from '@/components/pages/home/Section1';
import Section2 from '@/components/pages/home/Section2';
import Section3 from '@/components/pages/home/Section3';
import Section4 from '@/components/pages/home/Section4';
import Text from '@/components/pages/home/Text';
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';

// import fullpage from "fullpage.js";
// import "fullpage.js/dist/fullpage.css";

export default function page() {
	const t = useTranslations();
	
    const data5  = t.raw("data5")
    const data6 = t.raw("data6")

    const data7 = t.raw("data7")
    const data8 = t.raw("data8")

    const data9 = t.raw("data9") 
    const data10 = t.raw("data10")

    const data11 = t.raw("data11")

    // useEffect(() => {
    // 	// Initialize FullPage.js with scroll navigation
    // 	new fullpage("#fullpage", {
    // 	  licenseKey: "YOUR_LICENSE_KEY", // Add your license key (if required)
    // 	  navigation: true, // Enable navigation bullets
    // 	  navigationPosition: "right", // Position navigation bullets
    // 	  scrollingSpeed: 500, // Scroll speed in milliseconds

    // 	  autoScrolling: true, // Enable auto-scrolling
    // 	  scrollBar: true, // Use FullPage.js scrolling instead of browser scrollbar
    // 	  fitToSection: true, // Automatically fit sections to viewport
    // 	  fitToSectionDelay: 1000, // Delay before fitting to section
    // 	  responsiveWidth: 768, // Disable FullPage.js on small screens
    // 	  responsiveHeight: 600, // Disable FullPage.js on short heights
    // 	  scrollOverflow: true,
    // 	  scrollOverflowReset: true,

    // 	  parallax: true,
    // 	  parallaxOptions: {
    // 		type: "reveal",
    // 		percentage: 62,
    // 		property: "translate"
    // 	  },

    // 	  dropEffect: true,
    // 	  dropEffectOptions: {
    // 		speed: 2300,
    // 		color: "#F82F4D",
    // 		zIndex: 9999
    // 	  },
    // 	  waterEffect: false,
    // 	  waterEffectOptions: {
    // 		animateContent: true,
    // 		animateOnMouseMove: true
    // 	  },
    // 	  cards: true,
    // 	  cardsOptions: {
    // 		perspective: 100,
    // 		fadeContent: true,
    // 		fadeBackground: true
    // 	  },

    // 	  credits: { enabled: false, label: '.' , position: 'right'},
    // 	  afterLoad: (origin, destination, direction) => {
    // 		console.log("Section loaded:", destination.index);
    // 	  },
    // 	});

    //   }, []);

    

    return (
        <div className=''>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />

            <Text img={`/assets/imgs/section5.png`} title={t('Marketing')}                                       description={t('section5')} list={data5} grid={2} />
            <Text img={`/assets/imgs/section6.png`} title={t('Software & AI')}                                   description={t('section6')} list={data6} />
            <Text img={`/assets/imgs/section7.png`} title={t('Masanadah')}                                       description={t('section7')} list={data7} icon={'/assets/imgs/logo2.png'} />
            <Text img={`/assets/imgs/section8.png`} title={t('Telecoms')}                                        description={t('section8')} list={data8} />
            <Text img={`/assets/imgs/section9.png`} title={t('Manpower & HR Solutions')}                         description={t('section9')} data={data9} />
            <Text img={`/assets/imgs/section10.png`} title={t('Merchandising, Activation and Event Management')} description={t('section10')} data={data10} />
            <Text img={`/assets/imgs/section11.png`} title={t('Our Products')}                                   description={t('section11')} list={data11} />
        </div>
    );
}
