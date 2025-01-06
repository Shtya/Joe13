"use client"
import Filter from '@/components/pages/services/Filter'
import EffectFixed from '@/helpers/EffectFixed';
import { hookServices } from '@/hooks/hookServices';
import { useTranslations } from 'next-intl';
import React , {useState} from 'react';

export default function page() {
    const t = useTranslations('Services');
    const [category, setcategory] = useState();

    const { services, loading } = hookServices()

    console.log(services , loading)


    return (
        <EffectFixed cn={category?.img ? "opacity-20" : ""} image={category?.img || '/assets/imgs/services.png'}>
            {
                category 
                ? <div  className={'w-fit mx-auto  text-primary text-center font-[700]  max-md:text24 text40 '} > {category.title} </div>
                : <>
                    <div data-aos={category == null && "fade-down"} className={'w-fit mx-auto mb-[10px] text-center font-[700]  max-md:text24 text40 '} > {t("projectsTitle")} </div>
                    <div data-aos={category == null && "fade-down"} className={` text-center  w-full text20  text-balance`} > {t("projectsDescription")} </div>
                </>
            }

            <Filter  setcategory={setcategory} />
        </EffectFixed>
    );
}
