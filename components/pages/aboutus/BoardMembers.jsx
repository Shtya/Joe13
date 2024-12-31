import Button from '@/components/atoms/Button';
import EffectFixed from '@/helpers/EffectFixed';
import TextSlide from '@/helpers/TextSlide';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';

export default function BoardMembers() {
    const t = useTranslations('aboutUs');
    const tBtn = useTranslations('');

    const listRef = useRef(null); // Reference to the list
    const [isExpanded, setIsExpanded] = useState(false); // State to track if the list is expanded

    const handleReadMore = () => {
        if (!isExpanded) {
            // Animate the list to show
            gsap.to(listRef.current, {
                height: 'auto',
                duration: 0.5,
                opacity: 1,
                ease: 'power2.out',
            });
        } else {
            // Animate the list to hide
            gsap.to(listRef.current, {
                height: 0,
                duration: 0.5,
                opacity: 0,
                ease: 'power2.in',
            });
        }
        setIsExpanded(!isExpanded);
    };

    
    return (
        <EffectFixed overlay={false} image={'/assets/aboutus/1.png'} z={'z-[-100]'}>
            {<TextSlide cnParent={`  ${isExpanded ? 'w-full flex items-start justify-start text-primary  ' : ''}  mb-[60px] max-md:mb-[30px]  `} cn={` ${!isExpanded ? 'text-left' : '!text-primary rtl:text-right ltr:text-left '} w-full text40 text-white `} text={t('boardMembersTitle')} />}

            <div className='founders flex flex-wrap  gap-[50px] flex-row-reverse justify-center '>
                {t
                    .raw('boardMembers')
                    .slice(0, 4)
                    .map((e, i) => (
                        <div key={i} className='flex flex-col items-center text-white gap-[10px] '>
                            <div className='cover w-full max-w-[200px] h-[200px] max-lg:max-w-[150px] max-lg:h-[150px] max-md:max-w-[100px] max-md:h-[100px] rounded-[50%] overflow-hidden ' style={{ boxShadow: '1px 8px 18px 0px #FFFFFF1A , 5px 32px 32px 0px #FFFFFF17 ,10px 71px 43px 0px #FFFFFF0D , 19px 127px 51px 0px #FFFFFF03' }}>
                                <Image className=' object-contain bg-white w-full h-full' src={`/assets/aboutus/person${i + 1}.png`} alt={e.name} width={200} height={200} />{' '}
                            </div>
							<TextSlide cn={'text20 text-center '} text={e.name}   />
							<TextSlide cn={"text14 text-center  "} cnParent={"mt-[-10px] "}  text={e.position}   />
                            {/* <div className=> {e.name} </div> */}
                        </div>
                    ))}
            </div>

            <div ref={listRef} className=' mt-[100px] text-white overflow-hidden opacity-0' style={{ height: 0 }}>
                <div className='w-screen'>
                    <div className={`container mx-auto flex flex-col gap-[60px]  `}>
                        {t.raw('boardMembers').map((item, index) => (
                            <div key={index} className=' flex flex-col gap-[3px] items-center '>
                                <TextSlide cnParent={'text20 '} text={item?.name} />
                                <TextSlide cnParent={'text18 font-[400] opacity-70  '} text={item?.position} />
                                <TextSlide cnParent={'text14 max-w-[700px] w-full text-center '} text={item?.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Button onClick={handleReadMore} borderAll={true} cn='mt-[20px]' name={isExpanded ? tBtn("showLess") : tBtn("readMore")} />
        </EffectFixed>
    );
}
