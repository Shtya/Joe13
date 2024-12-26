"use client"

import BoardMembers from '@/components/pages/aboutus/BoardMembers'
import Text from '@/components/pages/home/Text'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {
	const t = useTranslations("aboutUs")

  return (
	<div>
		<Text  btn={false} overlay={false} img={`/assets/aboutus/1.png`} title ={t("aboutUsTitle")} description ={t("aboutUs")}  />
		<Text  btn={false} img={`/assets/aboutus/2.png`} title ={t("ourVisionTitle")} description ={t("ourVision")}  />
		<Text  btn={false} img={`/assets/aboutus/3.png`} title ={t("ourMissionTitle")} description ={t("ourMission")}  />

		<BoardMembers /> 
	</div>
  )
}
