"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getBlogsById } from "@/services/api/common/blogs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const t = useTranslations("blogs");
  const [blog, setBlog] = useState(null);
  const { id, locale } = useParams();
  const getBlogsDetails = async () => {
    try {
      const res = await getBlogsById(id);
      setBlog(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogsDetails();
  }, []);

  const handleDropdown = () => {
    document.querySelector(".filter .select").classList.toggle("show");
  };

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
            src={blog?.images[0].image}
            width={1400}
            height={600}
            alt="eager"
          />
          <div className="container">
            <div className="text">
              <h1 className="h1">
                {" "}
                {t("h1")} /{" "}
                <span style={{ fontSize: "17px", fontWeight: "400" }}>
                  {" "}
                  {locale === "en" ? blog?.title_en : blog?.title_ar}
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="filter">
          <div className="container">
            <div className="h1">
              {locale === "en" ? blog?.title_en : blog?.title_ar}
            </div>
            <div className="h5" style={{ marginTop: "20px" }}>
              {locale === "en" ? blog?.article_en : blog?.article_ar}
            </div>
          </div>
        </div>
      </div>

      <Footer classN="footer" />
    </>
  );
};

export default page;
