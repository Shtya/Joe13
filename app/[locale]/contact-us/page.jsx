"use client"
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/input/Input';
import TextArea from '@/components/atoms/input/TextArea'; 
import EffectFixed from '@/helpers/EffectFixed';
import TextSlide from '@/helpers/TextSlide';
import { hookContactUs } from '@/hooks/hookContactUs';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function page() {
    const t = useTranslations('ContactUs');
    const { register, errors , loading , trigger , clearErrors, setError, getValues, setValue, submit , watch, reset } = hookContactUs() 


    return (
        <EffectFixed image={'/assets/imgs/contactus.png'}>
                <TextSlide cnParent={`w-fit ltr:mr-auto max-sm:mx-auto rtl:ml-auto  `} cn={` text-left w-full text40 font-[600] `} text={t('contactUsTitle')} />
                <TextSlide cnParent={`w-fit ltr:mr-auto max-sm:mx-auto rtl:ml-auto mt-[-10px] mb-[50px]  `} cn={` text-left w-full text24 font-[400] `} text={t('stayConnected')} />

                <div className="w-screen">
                    <div className="container">
                        <form className={` grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-[30px] gap-x-[60px]  `} >
                            <Input dataAos={"fade-up"} register={register("name")}        error={errors?.name}        type={"text"}  KEY={"fullName"}        cnInput={""}  label={""} place={t("fullName")} />
                            <Input dataAos={"fade-up"} register={register("phone")}           error={errors?.phone}           type={"email"} KEY={"phone"}           cnInput={""}  label={""} place={t("phoneNumber")} />
                            <Input dataAos={"fade-up"} register={register("email")}           error={errors?.email}           type={"text"}  KEY={"email"}           cnInput={""}  label={""} place={t("email")} />
                            <TextArea dataAos={"fade-up"} register={register("message")}           error={errors?.message}     cnInput={""}  label={""} place={t("message")} />
                            
                        </form>
                        <Button loading={loading} name={t("send")} onClick={submit} borderAll={true}  cn={"mb-[150px] mt-[40px]   "} />
                    </div>
                </div>
				
        </EffectFixed>
    );
}
