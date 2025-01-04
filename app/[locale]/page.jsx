'use client';
import Section1 from '@/components/pages/home/Section1';
import Section2 from '@/components/pages/home/Section2';
import Section3 from '@/components/pages/home/Section3';
import Section4 from '@/components/pages/home/Section4';
import Text from '@/components/pages/home/Text';
import TextCopy from '@/components/pages/home/TextCopy';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

const FullPage = () => {
  if (typeof window !== 'undefined') {
    const fullpage = require('fullpage.js');
    require('fullpage.js/dist/fullpage.css');
    return fullpage;
  }
  return null;
};

export default function Page() {
    const t = useTranslations();
    const data5 = t.raw('data5');
    const data6 = t.raw('data6');
    const data7 = t.raw('data7');
    const data8 = t.raw('data8');
    const data9 = t.raw('data9');
    const data10 = t.raw('data10');
    const data11 = t.raw('data11');
    let fullpageInstance ;
    const [fullpageStat , setfullpageState] = useState()

  useEffect(() => {
    const FullPageLib = FullPage();

    if (FullPageLib) {
        fullpageInstance = new FullPageLib('#fullpage', {
        licenseKey: 'YOUR_LICENSE_KEY',
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 700, // Adjusted for smoother scrolling
        autoScrolling: true,
        scrollBar: true,
        fitToSection: true,
        fitToSectionDelay: 500, // Redusced delay for quicker section fitting
        responsiveWidth: 768,
        responsiveHeight: 600,
        scrollOverflow: true,
        parallax: true,
        parallaxOptions: {
          type: 'reveal',
          percentage: 62,
          property: 'translate',
        },
      });
      setfullpageState(fullpageInstance)
    }

    return () => {
      if (fullpageInstance) {
        fullpageInstance.destroy('all');
      }
    };
  }, ["ldds"]);


  return (
    <div id="fullpage" className="px-[30px]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <TextCopy fullpageInstance={fullpageStat} img={`/assets/imgs/section5.png`} title={t('Marketing')} description={t('section5')} list={data5} grid={2} />
      <TextCopy fullpageInstance={fullpageStat} img={`/assets/imgs/section6.png`} title={t('Software & AI')} description={t('section6')} list={data6} />
      <TextCopy fullpageInstance={fullpageStat} img={`/assets/imgs/section7.png`} title={t('Masanadah')} description={t('section7')} list={data7} icon={'/assets/imgs/logo2.png'} />
      <TextCopy fullpageInstance={fullpageStat} img={`/assets/imgs/section8.png`} title={t('Telecoms')} description={t('section8')} list={data8} />
      <TextCopy fullpageInstance={fullpageStat} img={`/assets/imgs/section9.png`} title={t('Manpower & HR Solutions')} description={t('section9')} data={data9} />
      <TextCopy fullpageInstance={fullpageStat} img={`/assets/imgs/section10.png`} title={t('Merchandising, Activation and Event Management')} description={t('section10')} data={data10} />
      <TextCopy fullpageInstance={fullpageStat} img={`/assets/imgs/section11.png`} title={t('Our Products')} description={t('section11')} list={data11} />

    </div>
  );
}