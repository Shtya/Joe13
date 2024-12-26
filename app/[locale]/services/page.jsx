"use client"
import Filter from '@/components/pages/services/Filter'
import Text from '@/components/pages/home/Text';
import EffectFixed from '@/helpers/EffectFixed';
import { useTranslations } from 'next-intl';
import React , {useState} from 'react';
import TextSlide from '@/helpers/TextSlide';

export default function page() {
    const t = useTranslations('Services');

    const [category, setcategory] = useState()

    return (
        <EffectFixed image={'/assets/imgs/services.png'}>
            {
                category 
                ? <div data-aos="zoom-in" className={'w-fit mx-auto  text-primary text-center font-[700]  max-md:text24 text40 '} > {category} </div>
                : <>
                    <div data-aos="zoom-in" className={'w-fit mx-auto mb-[10px] text-center font-[700]  max-md:text24 text40 '} > {t("projectsTitle")} </div>
                    <div data-aos="zoom-in" className={` text-center  w-full text20  text-balance`} > {t("projectsDescription")} </div>
                </>
            }

            <Filter  setcategory={setcategory} />
        </EffectFixed>
    );
}
