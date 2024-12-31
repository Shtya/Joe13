'use client';
import { ChevronDown } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, {  useEffect, useRef, useState } from 'react';

const Select = ({cnSelect ,label , dataAos , error , trigger , watch , KEY, setValue, icon, data, classname, place }) => {
    const t = useTranslations()

  const [val, setval] = useState();
  const [show, setShow] = useState(false);
  const locale = useLocale();

  const handleValue = e => {
    setval({ name: e?.name_en ? e[`name_${locale}`] : e?.name });
    setValue?.(KEY, e?.name_en ? e[`name_${locale}`] : e?.name);
    setValue?.(KEY+"GET", e);
    setShow(false);
  };

  const watchKey = watch?.(KEY)
  useEffect(()=>{
    if(watchKey)  trigger?.(KEY) 
    },[watchKey])
  
  const watchKeyGET = watch?.(KEY+"GET")
  useEffect(()=>{
    if(watchKeyGET)  handleValue(watchKeyGET) 
      else handleValue("")
  },[])


  const selectRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = event => {
      if (selectRef.current && !selectRef.current.contains(event.target)) setShow(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} data-aos={dataAos}  className={`${classname} z-[100] relative select flex  flex-col gap-[5px]  w-full `}>
      {label && <label htmlFor={KEY} className={`text16`} > {label} </label> }

      <div onClick={() => setShow(!show)} className={` ${cnSelect}  border-b-[#BCBBBF] border-b-[1px] duration-300 cursor-pointer w-full h-[50px] flex justify-between items-center`}>
        <div className='flex items-center px-[10px] gap-[9px] P-12  '>
          <div className={`text16 ${val?.name ? 'text-white ' : 'text-[#9ca3af]'} `}> {val?.name || place} </div>
        </div>
        <ChevronDown className={`${show ? 'rotate-[180deg]' : ''} w-[16px] h-[16px] duration-300 `} />
      </div>

        <div className={`${show ? 'opacity-100 pointer-events-auto' : ''} z-[10000]  max-h-[180px] overflow-auto  duration-300 shadow-md opacity-0 pointer-events-none ease-in-out absolute top-[110%] w-full bg-[#9ca3af] shadow-box`}>
          {data.map((e, i) => (
            <div className=' hover:bg-gray1 hover:bg-primary  P-12 duration-100 min-h-[35px] cursor-pointer flex items-center px-[10px] ' key={i} onClick={_ => handleValue(e)}>
              <span className='capitalize text16 hover:bg-primary duration-0 '> {e?.name_en ? e[`name_${locale}`] : e?.name} </span>
            </div>
          ))}
        </div>


      {error && <div className='error absolute ' > {t(error?.message)} </div>}
    </div>
  );
};

export default Select;
