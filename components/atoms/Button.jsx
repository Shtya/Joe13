"use client"

import { useRouter } from '@/navigation'
import React from 'react'

export default function Button({cn , name , onClick , borderAll , href , color }) {

	const router = useRouter()

  return (
	<button 
		className={` 
			${cn}
			${color ? color : "text-white border-white "}
			${borderAll ? "border-[1px]" : "border-l-[1px]  border-r-[1px]" }
			capitalize font-[500] text18 bg-primary
			relative max-w-[220px] w-full  h-[55px] max-sm:max-w-fit px-[40px] max-sm:h-[45px] rounded-[40px]  hover:border-[1px] hover:border-transparent  hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 ease-in-out  `}
			
		onClick={()=> onClick?.() || href && router.push(href)  } >
		{name}
	</button>
  )
}
