"use client"
import Tabs from '@/components/molecules/Tabs'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Blog from './Blog'
import { blogsData } from '@/data/Data'

export default function Filter() {
	const t = useTranslations("Blogs")
	const tabs = [
		{value : "telecoms" , name : t("telecoms") } ,
		{value : "manpowerHrSolutions" , name : t("manpowerHrSolutions") } ,
		{value : "marketing" , name : t("marketing") } ,
		{value : "softwareAi" , name : t("softwareAi") } ,
		{value : "mosanadah" , name : t("mosanadah") } ,
		{value : "activationEventManagement" , name : t("activationEventManagement") } ,
	]


	const [currentValue , setcurrentValue] = useState(tabs[0].value)
	const handleValue = (value) =>{
		setcurrentValue(value)
	}

  return (
	<div>
		<Tabs tabs={tabs} handleValue={handleValue} currentValue={currentValue} />

		<Blog data={blogsData[currentValue]} currentValue={currentValue} />
	</div>
  )
}
