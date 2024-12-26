import { Link } from '@/navigation';
import { ArrowRight, ChevronLeft, ChevronRight, MenuIcon } from 'lucide-react';
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import React , {useState} from 'react'

export default function Navbar({isclick , handleClick}) {

	const t = useTranslations("Navbar")

	const links = [
		{ value: "/", name: t("home") },
		{ 
		  value: "", 
		  name: t("business-units"), 
		  list: [
			{ value: "/services?n=telecom", name: t("telecom") },
			{ value: "/services?n=manpower-hr-solutions", name: t("manpower-hr-solutions") },
			{ value: "/services?n=software-and-ai", name: t("software-and-ai") },
			{ value: "/services?n=merchandising-activation-event-management", name: t("merchandising-activation-event-management") },
			{ value: "/services?n=mosanadah", name: t("mosanadah") },
			{ value: "/services?n=marketing", name: t("marketing") },
		  ] 
		},
		{ 
		  value: "", 
		  name: t("our-products"), 
		  list: [
			{ value: "erp", name: t("erp") },
			{ value: "joe-mi", name: t("joe-mi") },
			{ value: "joe-x", name: t("joe-x") },
		  ] 
		},
		{ 
		  value: "", 
		  name: t("our-services"), 
		  list: [
			{ value: "manpower", name: t("manpower") },
			{ value: "hr-solutions", name: t("hr-solutions") },
			{ value: "marketing", name: t("marketing") },
			{ value: "social-media", name: t("social-media") },
		  ] 
		},
		{ value: "/our-partners", name: t("our-partners") },
		{ value: "/blogs", name: t("blogs") },
		{ value: "/join-us", name: t("join-us") },
		{ value: "/about-us", name: t("about-us") },
		{ value: "/contact-us", name: t("contact-us") },
	  ];

	  
	  const style = {
		a : "block p-[10px] cursor-pointer hover:text-white hover:bg-primary"
	  }
	  
	
  return (
	<nav className="text-white z-[10] relative  " >

		<div onClick={handleClick} className={` ${isclick ? "left-[251px] top-[0px] rounded-[0]" : "left-[10px] top-[10px] rounded-[50%] " }  cursor-pointer hover:bg-primary hover:text-white fixed !duration-300 !transition-all flex items-center justify-center text-primary w-[40px] h-[40px] bg-white `} > <MenuIcon  /> </div>	
		
		<ul className={` ${isclick ? "left-0" : "left-[-250px]" } max-sm:overflow-y-auto !duration-300 !transition-all fixed top-0 w-[250px] h-screen bg-white text-black py-[50px] flex flex-col gap-[2px]`} >
			
			<div className=" mb-[40px] mt-[-40px] " > <Image className="object-contain"  src="/assets/svg/logo.svg" alt="" width={120} height={90} /> </div>
			
			{
				links.map((link, index) => (
                    <li key={index} className=" group relative  " >
                        <Link href={link.value} className={` ${style.a} text18 flex justify-between items-center  `} >
							{ link.name } 
							{link.list && <ChevronRight className={` opacity-80 `}  />}
						</Link>

						<ul className="bg-white z-[100] sm:border-l-[4px] border-l-black   shadow-md top-0 hidden group-hover:block sm:absolute sm:left-[250px]  sm:w-[200px] " >
							{
								link.list && link.list.map((e, i) => (
									<li key={i} className="text14 hover:text-white hover:bg-primary relative hover:after:h-[60%] after:top-[50%] after:translate-y-[-50%] after:absolute after:h-0 after:w-[3px] after:bg-white after:right-[5px] after:duration-300  " ><Link className={style.a}  href={e.value}>{e.name}</Link></li>
								))
							}
						</ul>
                    </li>
                ))
			}
		</ul>
	</nav>
  )
}
