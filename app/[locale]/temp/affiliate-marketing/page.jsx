"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  getAffliate,
  getCodeService,
  getService,
} from "@/services/api/common/common";
import { getToken } from "@/services/api/utils";
import {
  ChevronDown,
  CircleChevronDown,
  MoveRight,
  Square,
  SquareActivity,
  SquareCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const t = useTranslations("marketing");
  const Imgs = [
    "/sep/marketing/1.png",
    "/sep/marketing/2.png",
    "/sep/marketing/3.png",
    "/sep/marketing/1.png",
    "/sep/marketing/2.png",
    "/sep/marketing/3.png",
  ];
  const [value, setValue] = useState(t.raw("services")[0]);
  const [index, setIndex] = useState(3);
  const [userAuth, setUserAuth] = useState(false);
  const [affliate, setaffliate] = useState(null);
  const [services, setServices] = useState(null);
  const [filteraffliate, setFilteraffliate] = useState(null);
  const [code, setCode] = useState(null);

  const { locale } = useParams();
  const getaffliateData = async () => {
    try {
      const res = await getAffliate();
      setFilteraffliate(res?.data);
      setaffliate(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCodeAffliate = async () => {
    try {
      const res = await getCodeService();
      setCode(res?.data?.[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getServiceData = async () => {
    try {
      const res = await getService();
      setServices(res?.data);
    } catch (error) {
      console.log(error);
    }
  };


  const getUserAuth = () => {
    const user = getToken();
    if (user) {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  };
  useEffect(() => {
    getCodeAffliate();
    getaffliateData();
    getServiceData();
    getUserAuth();
  }, []);

  useEffect(() => {
    if (value === 0) {
      setFilteraffliate(affliate);
    } else {
      const filterService = affliate?.projects?.filter(
        (item) => item?.category?.id == value?.category?.id
      );
      setFilteraffliate(filterService);
    }
  }, [value]);

  const handleDropdown = () => {
    document.querySelector(".filter .select").classList.toggle("show");
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy text");
    }
  };
  return (
    <>
      <Navbar classN="soft" />
      <div className="marketing">
        <div className="hero">
          <Image
            loading="eager"
            src={"/sep/digital/1.gif"}
            width={1400}
            height={600}
            alt="eager"
          />
          <div className="container">
            <div className="text">
              <h1 className="h1">
                {" "}
                {locale === "en"
                  ? filteraffliate?.name_en
                  : filteraffliate?.name_ar}{" "}
              </h1>
              <p className="p">
                {" "}
                {locale === "en"
                  ? filteraffliate?.description_en
                  : filteraffliate?.description_ar}{" "}
              </p>
              <Link href="/contact-us" className="_btn">
                {" "}
                {t("btn")}{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="filter">
          <div className="container">
            <h2 className="h2"> {t("h2")} </h2>
            <p className="p"> {t("h3")} </p>

            {/* <div className="select" onClick={handleDropdown}>
              <div className="inner">
                <h1>
                  {" "}
                  {value === 0
                    ? t("allService")
                    : locale === "en"
                    ? value?.title_en
                    : value?.title_ar}{" "}
                  <ChevronDown />{" "}
                </h1>
                <li onClick={(_) => setValue(0)}>
                  {" "}
                  {value == 0 ? <SquareCheck /> : <Square />} {t("allService")}{" "}
                </li>
                {services?.map((e, i) => (
                  <li onClick={(_) => setValue(e)} key={i}>
                    {" "}
                    {value?.id == e?.id ? <SquareCheck /> : <Square />}{" "}
                    {locale === "en" ? e?.title_en : value?.title_ar}{" "}
                  </li>
                ))}
              </div>{" "}
            </div> */}

            <div className="boxes" style={{ marginTop: "60px" }}>
              {affliate?.projects?.map((e, i) => (
                <div className="box" key={i}>
                  <div className="img">
                    {" "}
                    <Image
                      src={e?.images?.[0].name}
                      width={400}
                      height={300}
                      alt="person"
                    />{" "}
                  </div>
                  <div className="h3">
                    {" "}
                    {locale === "en" ? e?.name_en : e?.name_ar}{" "}
                  </div>
                  <div className="p">
                    {" "}
                    {locale === "en"
                      ? e?.description_en.slice(0, 120)
                      : e?.description_ar.slice(0, 120)}{" "}
                  </div>

                  {userAuth ? (
                    <div
                      className="_btn-icon"
                      onClick={() => copyToClipboard(e?.code)}
                    >
                      {t.raw("boxes")[5].btn1} <MoveRight />{" "}
                    </div>
                  ) : (
                    <Link href="/sign-up" className="_btn-icon">
                      {" "}
                      {t.raw("boxes")[5].btn} <MoveRight />{" "}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* <div className="view-more"> <div onClick={_=> setIndex(6)} className="inner"> {t("btn2")}  <CircleChevronDown /> </div> </div> */}
          </div>
        </div>
      </div>

      <Footer classN="footer" />
    </>
  );
};

export default page;
