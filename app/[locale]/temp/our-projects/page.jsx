"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SliderAnimation from "@/components/Slider";
import { getCategory } from "@/services/api/common/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
  const t = useTranslations("projects");
  const [categories, setCategories] = useState(null);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(categories?.[0]);
  const { locale } = useParams();
  const fetchCategories = async () => {
    try {
      const res = await getCategory();
      setCategories(res?.data);
      setIndex(res?.data?.[0]?.id);
      setValue(res?.data?.[0]);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleTabs = (i, e) => {
    setIndex(i);
    setValue(e);
  };

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
        end: "1000px bottom",
      },
    });

    t1.to(".hero", { height: "170px" })
      .to(".hero img", { top: "calc(-100% + 100px)" }, 0)
      .to(".hero .text", { scale: 0.8, bottom: "0", left: "-20px" }, 0);

    gsap.matchMedia().add("(max-width: 700px)", () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".inner-scroll",
          scrub: 3,
          start: "top top",
          end: "6000px bottom",
        },
      });
    });
    // t1.to(".hero", { height: "500px" });
    t1.to(".hero .text", { scale: 0.8, top: "0px", left: "0px" }, 0);

    const tFooter = gsap.timeline();
    t1.add(tFooter);
    tFooter
      .set("footer", { display: "flex", opacity: 1, minHeight: "70vh" })
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
      <div className="software projects">
        <div className="inner-scroll">
          <div className="hero">
            <Image
              loading="eager"
              alt="eager"
              src={"/sep/projects/44.jpeg"}
              width={1400}
              height={600}
            />
            <div className="container">
              <div className="text">
                <h1 className="h1"> {t("h1")} </h1>
                <p className="p"> {t("p")} </p>
                <Link href="/contact-us" className="_btn">
                  {" "}
                  {t("btn")}{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="navigation">
            <div className="container">
              {categories?.map((e, i) => (
                <li
                  onClick={(_) => handleTabs(e?.id, e)}
                  className={`${index == e?.id ? "show" : null}`}
                  key={i}
                >
                  {" "}
                  {locale === "en" ? e?.name_en : e?.name_ar}{" "}
                </li>
              ))}
            </div>

            <div className="slider">
              <div className="container">
                <ul>
                  {" "}
                  {value?.projects?.map((e, i) => (
                    <li
                      key={i}
                      className={i == 0 ? "active" : null + " active-" + i}
                    ></li>
                  ))}{" "}
                </ul>
              </div>

              {/* <div className="boxes"> */}
              {/* {
                    value?.projects?.map((e,i)=>(
                      <div className={box-slider box-${i+1}} key={i}>
                            <div className="content">
                              <div className="h2"> {e.name_ar} </div>
                              <p className="p"> {e.description_ar} </p>
                              </div>
                          </div>

                        )
                          )  } */}
              {/* </div> */}

              <SliderAnimation
                Images={value?.image}
                data={value?.projects}
                value={true}
                department={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer classN="footer" />
    </>
  );
};

export default page;
