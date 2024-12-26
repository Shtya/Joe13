"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SliderAnimation from "@/components/Slider";
import { getDepartment, getService } from "@/services/api/common/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const t = useTranslations("digital");
  const Images = [
    "/sep/software/1.png",
    "/sep/software/1.png",
    "/sep/software/1.png",
    "/sep/software/1.png",
    "/sep/software/1.png",
    "/sep/software/1.png",
  ];

  const [categories, setCategories] = useState([]);
  const { locale, id } = useParams();

  const [service, setService] = useState(null);

  const getServiceData = async () => {
    try {
      const res = await getService();
      const filterData = res?.data.filter((srv) => srv?.category?.id == id);
      setService(filterData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getServiceData();
    getDepartment(id).then((res) => {
      setCategories(res?.data);
    });
  }, []);
  useGSAP(() => {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#1d1d1f";
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".inner-scroll",
        scrub: true,
        scrub: 3,
        start: "top top",
        end: "bottom+=100 top",
      },
    });

    t1.to(".hero", { height: "auto" })
      .to(".hero img", { top: "calc(-100% + 100px)" }, 0)
      .to(".hero .text", {
        scale: 0.8,
        top: "10px",
        left: "-30px",
        duration: 10,
      });

    // const tFooter = gsap.timeline();
    // t1.add(tFooter);
    t1.to("footer", { display: "flex", opacity: 1, minHeight: "60vh" })
      .to(["footer .logo", "footer ul"], {
        stagger: 0.3,
        duration: 3,
        opacity: 1,
      })
      .from(["footer ul li"], { duration: 3, x: "-20px" }, 0);
  });

  return (
    <>
      <Navbar classN="soft" />
      <div className="software">
        <div className="inner-scroll">
          <div className="hero">
            <img
              loading="eager"
              alt="eager"
              src={categories?.image}
              width={1400}
              height={600}
            />
            <div className="container">
              <div className="text" style={{ marginTop: "65px" }}>
                <h1 className="h1">
                  {" "}
                  {locale === "en"
                    ? categories?.name_en
                    : categories?.name_ar}{" "}
                </h1>
                <p className="p">
                  {" "}
                  {locale === "en"
                    ? categories?.description_en
                    : categories?.description_ar}{" "}
                </p>
                <Link href="/contact-us" className="_btn">
                  {" "}
                  {t("btn")}{" "}
                </Link>
              </div>
            </div>
          </div>

          <SliderAnimation Images={Images} data={service} department={false} />
        </div>
      </div>
      <Footer classN="footer" />
    </>
  );
};

export default page;
