import { useRouter , usePathname } from '@/navigation'
import { Globe } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

export default function SwitchLang() {
	const t = useTranslations()
	const locale = useLocale()

	const pathname  = usePathname()
	const router = useRouter()

	const handleLanguageChange = (language) => {
		router.push(pathname, { locale: language });
	};


  return (
	<div onClick={()=> handleLanguageChange(locale == "ar" ? "en" : "ar") } className="flex items-center gap-[10px] cursor-pointer uppercase hover:text-primary transition-all duration-300 " >
		<Globe />
		<span  > {locale == "en" ? "AR" : "EN"} </span>
	</div>
  )
}
