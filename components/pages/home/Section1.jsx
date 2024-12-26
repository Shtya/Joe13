import Button from '@/components/atoms/Button'
import TextSlide from '@/helpers/TextSlide'
import Image from 'next/image'
import React from 'react'

export default function Section1() {
  return (
	<div className=" section bg-black   " > 
		<div className="container mx-auto center min-h-screen ">

			<div className=" flex items-center gap-[10px] " >
				<Image className=" max-sm:w-[50px] max-sm:h-[50px] " src="/assets/imgs/arrow-left.png" alt="" width={100} height={100} />
				<Image className="object-contain  max-sm:w-[150px] max-sm:h-[50px]  "  src="/assets/imgs/logo.png" alt="" width={300} height={100} />
				<Image className=" max-sm:w-[50px] max-sm:h-[50px] " src="/assets/imgs/arrow-right.png" alt="" width={100} height={100} />
			</div>

			{/* <TextSlide text={"wlecome"} color={"text-white"}  /> */}
			<TextSlide text={"360 solutions company with +11 years of experience in the market"} cn={"text24 text-white text-center  "} />
			


			<Button cn="mt-[30px]" name="contact us" />

		</div>
	</div>
  )
}
