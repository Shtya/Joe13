import { activationAndEvent, manpowerAndHR, marketing, mosanadah, softwareAndAI, telecoms } from '@/helpers/constant';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';


const Footer = ({cn}) => {
    const t = useTranslations('Footer');
    const links = {
        facebook : "",
        insta : "",
        tiktok : "",
        linkedin : "",
        snap : "",
        x : "",
    }

    const Footer = [
        {
            head : t("services"),
            links : [
                { link : "/services?n="+marketing, name : t("socialMedia")},
                { link : "/services?n="+softwareAndAI , name : t("services_web_app_development")},
                { link : "/services?n="+manpowerAndHR , name : t("services_hr_outsourcing")},
                { link : "/services?n="+activationAndEvent , name : t("services_activation")},
                { link : "/services?n="+activationAndEvent , name : t("services_bookkeeping_zatca")},
                { link : "/services?n="+activationAndEvent , name : t("services_display_production")},
            ]
        },
        {
            head : t("business_units"),
            links : [
                { link : "/services?n="+telecoms , name : t("services_telecom")},
                { link : "/services?n="+manpowerAndHR , name : t("services_manpower_hr_solutions")},
                { link : "/services?n="+softwareAndAI , name : t("services_software_ai")},
                { link : "/services?n="+activationAndEvent , name : t("services_merchandising_event_management")},
                { link : "/services?n="+mosanadah , name : t("business_unit_mosanadah")},
                { link : "/services?n="+marketing , name : t("services_marketing")},
            ]
        },

        {
            head : t("ourProduct"),
            links : [
                { link : "/services?n="+mosanadah , name : t("services_erp")},
                { link : "/services?n="+softwareAndAI , name : t("business_unit_joemi")},
                { link : "/services?n="+softwareAndAI , name : t("business_unit_joex")},
            ]
        },

    ]

    const style = {
        head : "text22  font-[600] mb-[10px] ",
        link : "text16 block font-[500] leading-[22px] cursor-pointer hover:text-primary duration-200 mb-[7px] "
    }
    
    return (
            <footer className={`bg-white text-black py-[50px] ${cn} `} >
                <div className=" px-[10px] max-w-[1500px] w-full mx-auto  grid grid-cols-6 gap-[40px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">


                    <div className="col">
                        <Image className="mt-[-15px] max-w-[200px] w-full " src="/assets/svg/logo.svg" alt="logo" width={200} height={50} />
                        <div className="flex items-center justify-between gap-[10px] max-w-[200px] w-full ">
                            <Link className=""  href={links.facebook} > <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "  src="/assets/social/facebook.png" alt="logo" width={20} height={20} /> </Link>
                            <Link className=""  href={links.insta} >    <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/insta.png" alt="logo" width={20} height={20} /> </Link>
                            <Link className=""  href={links.tiktok} >   <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/tiktok.png" alt="logo" width={20} height={20} /> </Link>
                            <Link className=""  href={links.linkedin} > <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/linkedin.png" alt="logo" width={20} height={20} /> </Link>
                            <Link className=""  href={links.snap} >     <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/snap.png" alt="logo" width={20} height={20} /> </Link>
                            <Link className=""  href={links.x} >        <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/x.png" alt="logo" width={20} height={20} /> </Link>
                        </div>
                    </div>

                    {
                        Footer?.map((e,i)=> (
                            <div className="col" key={i} >
                                <div className={style.head}> {e.head} </div>
                                {
                                    e.links?.map((el,il)=> (
                                        <Link href={el.link} key={il} className={style.link}> {el.name} </Link>
                                    ))
                                }
                            </div>
                        ))
                    }


                    <div className="col">
                        <div className={style.head}> {t("contact_us")} </div>
                        <div className={style.link}> {t("head_office")} </div>
                        <div className={style.link}> {t("branch_office_riyadh0")} </div>
                        <hr className="my-[10px] " />
                        <div className={style.link}> {t("branch_office_jeddah")} </div>
                        <hr className="my-[10px] " />
                        <div style={{direction : "ltr"}} className={`${style.link} rtl:text-right `}> {process.env.NEXT_PUBLIC_PHONE} </div>
                        <hr className="my-[10px] " />
                    </div>

                    <div className="col">
                        <div className={style.head}> {t("branch_office")} </div>
                        <div className={style.link}> {t("branch_office_egypt")} </div>
                        <div className={style.link}> {t("branch_office_riyadh")} </div>
                        <div className={style.link}> {t("branch_office_makkah")} </div>
                        <div className={style.link}> {t("branch_office_dammam")} </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;
