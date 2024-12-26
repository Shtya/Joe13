"use client";
import Career_popup from "@/components/Career_popup";
import Navbar from "@/components/Navbar";
import { getCareerById, getCareers } from "@/services/api/common/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const page = () => {
  const t = useTranslations("career");
  const [show, setShow] = useState(false);

  const [career, setCareers] = useState(null);
  const { locale, position } = useParams();

  const getCareer = useCallback(async () => {
    try {
      const res = await getCareerById(position);
      setCareers(res?.data);
    } catch (error) {
      console.error("Error fetching careers:", error);
    }
  }, []);
  useEffect(() => {
    getCareer();
  }, [getCareer]);
  return (
    <>
      <Navbar classN="white-50" />
      <div className="marketing careers career">
        <div className="hero">
          <Image
            loading="eager"
            src={"/sep/carrers/1.png"}
            width={1400}
            height={600}
            alt="eager"
          />
          <div className="container">
            <div className="text">
              <h1 className="h1"> {t("h1")} </h1>
            </div>
          </div>
        </div>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="h2">
            {" "}
            {locale == "en" ? career?.name_en : career?.name_ar}{" "}
          </div>
          <ul>
            <div className="h2"> {t("Job")} </div>
            <li>
              {" "}
              {locale == "en"
                ? career?.description_en
                : career?.description_ar}{" "}
            </li>{" "}
          </ul>

          <ul>
            <div className="h2"> {t("Requirements")} </div>

            <li>
              {" "}
              {locale === "en"
                ? career?.requirments_en
                : career?.requirments_ar}{" "}
            </li>
          </ul>

          <ul>
            <div className="h2"> {t("Perks")} </div>
            <li>
              {" "}
              {locale === "en" ? career?.benefits_en : career?.benefits_ar}{" "}
            </li>
          </ul>

          <div className="_btn-icon" onClick={(_) => setShow(!show)}>
            {" "}
            {t("btn")}{" "}
          </div>
        </div>

        {show && (
          <Career_popup
            setShow={setShow}
            career={career}
            lang={locale}
            id={position}
          />
        )}
      </div>
    </>
  );
};

export default page;
