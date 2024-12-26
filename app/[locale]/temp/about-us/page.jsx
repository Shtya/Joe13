"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getAboutUs, getManager } from "@/services/api/common/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const t = useTranslations("contact");
  const [aboutData, setAboutData] = useState(null);
  const [managerData, setManagerData] = useState([]);
  const [show, setShow] = useState(false);
  const { locale } = useParams();
  useGSAP((_) => {
    const t1 = gsap.timeline();
    t1.to([".bg1", ".bg2"], { rotate: "360deg", duration: 200 });
  });

  const getAboutData = async () => {
    try {
      const res = await getAboutUs();
      setAboutData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getManagerData = async () => {
    try {
      const res = await getManager();
      setManagerData(res?.data || []); // Ensure it's an array
    } catch (error) {
      console.log(error);
    }
  };
  console.log(aboutData);
  useEffect(() => {
    getAboutData();
    getManagerData();
  }, []);

  return (
    <div className="about-us">
      <Navbar classN="soft" />

      <div className="sec">
        <div className="container">
          <Image
            className="bg1"
            src={"/sep/about-us/1.png"}
            width={1000}
            height={1000}
            alt="bg1"
          />
          <div className="text-top">
            <div className="h1">
              {" "}
              {locale === "en"
                ? aboutData?.[2]?.name_en
                : aboutData?.[2]?.name_ar}{" "}
            </div>
            <div className="p">
              {" "}
              {locale === "en"
                ? aboutData?.[2]?.description_en
                : aboutData?.[2]?.description_ar}{" "}
            </div>
          </div>
          <div
            className="aboutUs__Parent "
            style={{
              justifyContent: "center ",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {managerData.slice(0, 4)?.map((item) => (
              <div
                className="person "
                style={{
                  padding: "16px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: "25%",
                  // height: "200px",
                }}
              >
                <img
                  src={item?.image}
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <div
                  className="h2 "
                  style={{
                    fontWeight: "900",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  {" "}
                  {locale === "en" ? item?.name_en : item?.name_ar}{" "}
                </div>
                <div
                  className="h3 "
                  style={{
                    fontWeight: "500",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  {locale === "en" ? item?.position_en : item?.position_ar}{" "}
                </div>
              </div>
            ))}
          </div>
          <div
            className="aboutUs__Parent "
            style={{
              justifyContent: "center",
              display: show ? "flex" : "none",

              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {managerData.slice(4)?.map((item) => (
              <div
                className="person "
                style={{
                  padding: "16px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: "25%",
                }}
              >
                <img
                  src={item?.image}
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <div
                  className="h2 "
                  style={{
                    fontWeight: "900",
                    fontSize: "24px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {locale === "en" ? item?.name_en : item?.name_ar}{" "}
                </div>
                <div
                  className="h3 "
                  style={{
                    fontWeight: "500",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  {locale === "en" ? item?.position_en : item?.position_ar}{" "}
                </div>
              </div>
            ))}
          </div>{" "}
          <div style={{ display: "flex", marginTop: "150px" }}>
            <div
              className="btn-icon"
              style={{ display: show ? "none" : "flex" }}
              onClick={() => setShow(!show)}
            >
              {" "}
              {t("btn2")}{" "}
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="sec2">
        <Image
          src="/sep/about-us/2.png"
          alt="our vision image"
          width={1000}
          height={1000}
        />
        <div className="container">
          <div className="h1">
            {" "}
            {locale === "en"
              ? aboutData?.[0]?.name_en
              : aboutData?.[0]?.name_ar}{" "}
          </div>
          <div className="p">
            {" "}
            {locale === "en"
              ? aboutData?.[0]?.description_en
              : aboutData?.[0]?.description_ar}{" "}
          </div>
        </div>
      </div>

      <div className="sec3">
        <Image
          className="bg2"
          alt="our mision image"
          src="/sep/about-us/1.png"
          width={1000}
          height={1000}
        />
        <div className="container">
          <div className="h1">
            {" "}
            {locale === "en"
              ? aboutData?.[1]?.name_en
              : aboutData?.[1]?.name_ar}{" "}
          </div>
          <div className="p">
            {" "}
            {locale === "en"
              ? aboutData?.[1]?.description_en
              : aboutData?.[1]?.description_ar}{" "}
          </div>
        </div>
      </div>

      <Footer classN="footer" />
    </div>
  );
};

export default page;
