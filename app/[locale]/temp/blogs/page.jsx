"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getBlogs } from "@/services/api/common/blogs";
import { getService } from "@/services/api/common/common";
import {
  ChevronDown,
  CircleChevronDown,
  MoveRight,
  Square,
  SquareCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useMemo } from "react";

const Page = () => {
  const t = useTranslations("blogs");
  const Imgs = [
    "/sep/blogs/blog1.png",
    "/sep/blogs/blog2.png",
    "/sep/blogs/blog3.png",
    "/sep/blogs/blog1.png",
    "/sep/blogs/blog2.png",
    "/sep/blogs/blog3.png",
  ];

  const [state, setState] = useState({
    value: 0,
    index: 3,
    blog: null,
    services: null,
    filterBlog: null,
    isDropdownOpen: false,
  });

  const { value, blog, services, filterBlog, index, isDropdownOpen } = state;
  const { locale } = useParams();

  const handleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  const getBlogData = async () => {
    try {
      const res = await getBlogs();
      setState((prevState) => ({
        ...prevState,
        blog: res?.data,
        filterBlog: res?.data,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const getServiceData = async () => {
    try {
      const res = await getService();
      setState((prevState) => ({ ...prevState, services: res?.data }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlogData();
    getServiceData();
  }, []);

  const filteredBlogs = useMemo(() => {
    if (value === 0) return blog;
    return blog?.filter((item) => item?.service?.id === value?.id);
  }, [value, blog]);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, filterBlog: filteredBlogs }));
  }, [filteredBlogs]);

  return (
    <>
      <Navbar classN="soft" />
      <div
        className="marketing blogs"
        style={{ direction: locale === "en" ? "ltr" : "rtl" }}
      >
        <div className="hero">
          <img
            loading="eager"
            src="/sep/blogs/blog3.png"
            width={1400}
            height={600}
            alt="eager"
          />
          <div className="container">
            <div className="text">
              <h1 className="h1">{t("h1")}</h1>
            </div>
          </div>
        </div>

        <div className="filter">
          <div className="container">
            <h2 className="h2">{t("h2")}</h2>
            <p className="p">{t("h3")}</p>
            <div
              className={`select ${isDropdownOpen ? "show" : ""}`}
              onClick={handleDropdown}
            >
              <div className="inner">
                <h1>
                  {value === 0
                    ? t("allService")
                    : locale === "en"
                    ? value?.title_en
                    : value?.title_ar}{" "}
                  <ChevronDown />
                </h1>
                <li
                  onClick={() =>
                    setState((prevState) => ({ ...prevState, value: 0 }))
                  }
                >
                  {value === 0 ? <SquareCheck /> : <Square />} {t("allService")}
                </li>
                {services?.map((service, i) => (
                  <li
                    key={i}
                    onClick={() =>
                      setState((prevState) => ({
                        ...prevState,
                        value: service,
                      }))
                    }
                  >
                    {value?.id === service?.id ? <SquareCheck /> : <Square />}{" "}
                    {locale === "en" ? service?.title_en : service?.title_ar}
                  </li>
                ))}
              </div>
            </div>
            <div className="boxes">
              {filterBlog?.slice(0, index).map((e, i) => (
                <div className="box" key={i}>
                  <div className="img">
                    <img
                      src={e?.images?.[0]?.image || Imgs[i]}
                      width={400}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="h3">
                    {locale === "en" ? e.title_en : e.title_ar}
                  </div>
                  <div className="p">{e?.created_at}</div>
                  <div className="p">
                    {locale === "en"
                      ? e?.article_en?.slice(0, 95)
                      : e.article_ar.slice(0, 95)}
                    ......
                  </div>
                  <Link href={`/blogs/${e?.id}`} className="_btn-icon">
                    {t("btn2")} <MoveRight />
                  </Link>
                </div>
              ))}
            </div>
            <div className="view-more">
              {/* <div onClick={() => setState((prevState) => ({ ...prevState, index: index + 3 }))} className="inner">
                {t("btn2")} <CircleChevronDown />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer classN="footer" />
    </>
  );
};

export default Page;
