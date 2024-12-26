"use client";

import Button from '@/components/atoms/Button';
import EffectFixed from '@/helpers/EffectFixed';
import TextAnimation from '@/helpers/TextAnimation';
import TextSlide from '@/helpers/TextSlide';
import React from 'react';

export default function Section2() {
	const data = [
		{name : "Revenue" , value : "+66M"} ,
		{name : "HR Outsourcing" , value : "+10K"} ,
		{name : "Clients" , value : "+100"} ,
		{name : "Team Members" , value : "+70"} ,
		{name : "Growth" , value : "+31%"} ,
	];

	return (
		<EffectFixed image={"/assets/imgs/section2.jpeg"} z={"z-[-100]"}>
			<TextSlide  color="after:bg-white" cn={"text24 text-white text-center  "} text={" Our Success in Numbers, Driving Impact Across Industries"} />
			
			<div className="flex items-center gap-[40px] max-md:flex-wrap justify-center mt-[30px]">
				{data?.map((e, i) => (
					<div key={i} className="max-sm:max-w-[130px] max-sm:w-full relative p-[10px] px-[20px] flex flex-col justify-center items-center">
						<span className="absolute bg-gradient-to-b from-white to-transparent left-0 top-0 h-full w-[2px]" />
						<span className="absolute bg-gradient-to-r from-white to-transparent left-0 top-0 w-full h-[2.5px]" />
						<div className="text18 text-center text-white"> <TextSlide color="after:bg-white" cn={""} text={e.name} />  </div>
						<div className="text22 text-center text-white"> <TextSlide color="after:bg-white" cn={""} text={e.value} />  </div>
					</div>
				))}
			</div>
			<Button borderAll={true} cn="mt-[30px]" name="Download PDF" />
		</EffectFixed>
	);
}
