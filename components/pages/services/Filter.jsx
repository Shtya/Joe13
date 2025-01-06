"use client"
import Tabs from '@/components/molecules/Tabs'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ServicesData } from '@/data/Data'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import { ArrowBigLeftDash, ArrowLeft, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Filter({setcategory}) {
	const t = useTranslations("Services")
	const tBtn = useTranslations("")

	const tabs = [
		{value : "telecoms" , name : t("telecoms")},
		{value : "manpowerAndHR" , name : t("manpowerAndHR")},
		{value : "marketing" , name : t("marketing")},
		{value : "softwareAndAI" , name : t("softwareAndAI")},
		{value : "mosanadah" , name : t("mosanadah")},
		{value : "activationAndEvent" , name : t("activationAndEvent")},
	]


	const [currentValue , setcurrentValue] = useState(tabs[0].value)
	const handleValue = (value) =>{
		setcurrentValue(value)
		sethidden(true)
		setcategory("")
	}

	const [currentBrand , setcurrentBrand] = useState()
	const [hidden , sethidden] = useState(true)
	
	const handleBrand = (value) =>{
		setcurrentBrand(value)
		sethidden(false)
		setcategory(value)
	}

	const handleReturn = (value) =>{
		sethidden(true)
		setcategory("")
	}	


	const searchParams = useSearchParams();
	const name = searchParams.get("n");

	useEffect(()=> {
		name && handleValue(name)
	} ,[name])



  return (
	<div>
		<Tabs tabs={tabs} handleValue={handleValue} currentValue={currentValue} />

		{hidden && <div className="grid mt-[30px] grid-cols-3 max-md:grid-cols-2  gap-[30px] max-md:gap-[10px] " >
			{	
				Object.values(ServicesData?.[currentValue]).map((e,i)=> (
					<div data-aos="zoom-in" key={i} onClick={()=> handleBrand(e) } className=" cursor-pointer hover:bg-primary  rounded-[20px] max-md:p-[10px] p-[10px]  duration-200s flex flex-col justify-start items-center gap-[5px] ">
						<Image className="rounded-[20px]" src={e.img} alt={e.title} width={350} height={350} />
						<div className="text-[32px] max-xl:text24 max-md:text20 text-center "> {e.title} </div>
					</div>
				))
			}
		</div>	}	
		
		{!hidden &&
			<div style={{direction : "ltr"}}> 
				<div  className="flex max-md:flex-col items-center gap-[20px] mt-[50px] relative ">
					
					<Image data-aos="zoom-in" className=" max-xl:w-[200px] border-[1px] border-[#333] rounded-[20px] mt-[50px]" src={currentBrand?.img} alt={currentBrand?.title} width={350} height={350} />
					<div className="flex flex-col">
						<div data-aos="zoom-in" className="max-md:text-center text40  "> { currentBrand?.title } </div>
						<div data-aos="zoom-in" className="max-md:text-center text18  md:mb-[20px] !opacity-70 "> { currentBrand?.category } </div>
						<div data-aos="zoom-in" className="max-md:text-center text24 max-md:text18 text-wrap "> { currentBrand?.desc } </div>
					</div>
				</div>

				<div   className=" mt-[40px]  flex items-center justify-end max-md:justify-center  gap-[10px] " >
					<button onClick={handleReturn} data-aos="zoom-in"  className=" hover:opacity-80 hover:bg-primary hover:text-white hover:border-primary duration-300 w-[50px] h-[50px] border-[2px] rounded-[50%] border-primary  text-primary   flex justify-center items-center p-[8px] !cursor-pointer " > <ArrowBigLeftDash className=" w-full h-full" /> </button>
					<div data-aos="zoom-in" > <Button href={"/contact-us"} name={tBtn("ConsultNow")} borderAll={true} cn={""}  />  </div>
					{/* <div data-aos="zoom-in" > <Button onClick={handleReturn} name={ "return " } borderAll={true} cn={" flex items-center justify-center w-full "}  /> </div> */}
				</div>

			</div>
		}

	</div>
  )
}
