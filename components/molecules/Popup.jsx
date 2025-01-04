import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';

export default function Popup({fullpageInstance , isOpen, setIsOpen, isAnimating, setIsAnimating, children }) {
    const popupRef = useRef(null);

    const closePopup = () => {
        setIsAnimating(true);
        gsap.to(popupRef.current, {
            opacity: 0,
            y: -50,
            scale: 0.8,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
                setIsOpen(false); // Remove the popup after the animation finishes
                setIsAnimating(false);
                document.body.classList.remove('overflow-hidden'); // Enable scrolling
                if (fullpageInstance && typeof fullpageInstance.setAllowScrolling === 'function') {
                    fullpageInstance.setAllowScrolling(true);
                }
            },
        });
    };

    useEffect(() => {
        if (isOpen && popupRef.current) {
            gsap.fromTo(popupRef.current, { opacity: 0, y: -50, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
        }
    }, [isOpen]);

    return (
        
        <div className=' popup fixed z-[1000] flex items-center justify-center min-h-screen bg-gray-100'>
            {(isOpen || isAnimating) && (
                <div className='fixed h-screen inset-0 z-50 flex items-center justify-center'>
                    {/* Overlay */}
                    <div onClick={closePopup} className='bg-black bg-opacity-50 backdrop-blur-sm w-full h-full inset-0 absolute'></div>

                    <div ref={popupRef}  className=' text-black relative max-h-screen overflow-y-auto w-[800px] max-w-fit mx-[20px] p-8 bg-white rounded-[10px] shadow-lg'>
                        <div className='w-[35px] h-[35px] bg-primary cursor-pointer absolute top-[5px] ltr:right-[5px]  rtl:left-[5px] rounded-br-[10px] rounded-tl-[10px] text-white hover:text-gray-100 hover:opacity-80 duration-300 flex items-center justify-center' onClick={closePopup}> <X className='' /> </div>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
