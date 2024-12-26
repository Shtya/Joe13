import { useTranslations } from 'next-intl';
import React from 'react';

export default function Tabs({ tabs, handleValue, currentValue }) {
    const t = useTranslations('Blogs');

    return (
        <div className={`flex flex-wrap justify-center gap-[20px] items-center mt-[10px] mb-[20px] `}>
            {tabs.map((tab, index) => (
                <div data-aos='zoom-in'>
                    <div key={index} onClick={() => handleValue(tab.value)} className={` cursor-pointer relative  ${currentValue == tab.value ? 'text-primary ' : 'text-white'} duration-300 hover:text-primary  text20 max-md:text14 font-[400]  `}>
                        {tab.name}
                        <span className={` ${currentValue == tab.value ? 'scale-1.1' : 'scale-0'} absolute duration-500 transition-all w-[8px] h-[8px] rounded-[50%] bg-primary  top-[-10px]  left-[50%] translate-x-[-50%]`}> </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
