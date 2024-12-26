"use client"
import Tabs from '@/components/molecules/Tabs'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Blog from './Blog'
import { blogsData, ServicesData } from '@/data/Data'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import { ArrowLeft } from 'lucide-react'

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
		setcategory(null)
	}

	const [currentBrand , setcurrentBrand] = useState()
	const [hidden , sethidden] = useState(true)
	
	const handleBrand = (value) =>{
		setcurrentBrand(value)
		sethidden(false)
		setcategory(value?.category)
	}

	const handleReturn = (value) =>{
		sethidden(true)
		setcategory(null)
	}	



  return (
	<div>
		<Tabs tabs={tabs} handleValue={handleValue} currentValue={currentValue} />

		{hidden && <div className="grid mt-[30px] grid-cols-3 max-md:grid-cols-2  gap-[30px] max-md:gap-[10px] " >
			{	
				Object.values(ServicesData?.[currentValue]).map((e,i)=> (
					<div key={i} onClick={()=> handleBrand(e) } className=" cursor-pointer hover:bg-primary rounded-[20px] hover:bg-opacity-40 max-md:p-[10px] p-[20px]  duration-200s flex flex-col justify-start items-center gap-[5px] ">
						<Image data-aos="zoom-in" className="rounded-[20px]" src={e.img} alt={e.title} width={350} height={350} />
						<div data-aos="zoom-in" className="text40 max-xl:text24 max-md:text20 text-center "> {e.title} </div>
					</div>
				))
			}
		</div>	}	
		

		{!hidden &&
			<div> 

				<div className="flex max-md:flex-col items-center gap-[20px] mt-[50px]">
					<Image data-aos="zoom-in" className=" max-xl:w-[200px]  rounded-[20px] mt-[50px]" src={currentBrand?.img} alt={currentBrand?.title} width={350} height={350} />
					<div className="flex flex-col">
						<div data-aos="zoom-in" className="max-md:text-center text40  "> { currentBrand?.title } </div>
						<div data-aos="zoom-in" className="max-md:text-center text18  md:mb-[20px] !opacity-70 "> { currentBrand?.category } </div>
						<div data-aos="zoom-in" className="max-md:text-center text24 max-md:text18 text-wrap "> { currentBrand?.desc } </div>
					</div>
				</div>

				<div   className=" mt-[40px] flex items-center  gap-[10px] " >
					<div data-aos="zoom-in flex-none" > <Button name={tBtn("ConsultNow")} borderAll={true} cn={""}  />  </div>
					<div data-aos="zoom-in flex-none " > <Button onClick={handleReturn} name={ <ArrowLeft /> } borderAll={true} cn={" !max-w-[50px] !w-[55px]  flex items-center justify-center !p-0 "}  /> </div>
				</div>

			</div>
		}

	</div>
  )
}
