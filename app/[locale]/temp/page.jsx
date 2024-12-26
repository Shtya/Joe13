"use client";
import "@/components/home_animation/style/globals.css";

//! Images
import Sec1 from "@/components/home_animation/images/sec1/1.png";
import Sec2 from "@/components/home_animation/images/sec1/2.png";
import Sec3 from "@/components/home_animation/images/sec1/3.png";

import Sec4 from "@/components/home_animation/images/sec4/1.png";
import Sec5 from "@/components/home_animation/images/sec5/1.png";
import Sec6 from "@/components/home_animation/images/sec6/1.png";
import Sec7 from "@/components/home_animation/images/sec7/1.png";
import Sec8 from "@/components/home_animation/images/sec8/1.png";

import Client1 from "@/components/home_animation/images/clients/1.png";
import Client2 from "@/components/home_animation/images/clients/2.png";
import Client3 from "@/components/home_animation/images/clients/3.png";
import Client4 from "@/components/home_animation/images/clients/4.png";
import Client5 from "@/components/home_animation/images/clients/5.png";

import Statics1 from "@/components/home_animation/images/statics/1.png";
import Statics2 from "@/components/home_animation/images/statics/2.png";
import Statics3 from "@/components/home_animation/images/statics/3.png";
import Statics4 from "@/components/home_animation/images/statics/4.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sections from "@/components/home_animation/Sections";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useLayoutEffect, useState } from "react";
import { getCategory } from "@/services/api/common/common";

const data = [
  { img: Statics1, number: "213", p: "happy Clients" },
  { img: Statics2, number: "48", p: "Employees" },
  { img: Statics3, number: "23", p: "Expert Developers" },
  { img: Statics4, number: "+200", p: "Successful Projects" },
];

const Home = () => {
  const [categories, setCategories] = useState(null);
  const getCategories = async () => {
    try {
      const res = await getCategory();
      setCategories(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getCategories();
  }, []);
  useGSAP(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".inner-scroll", // the animation will start once the ".bae" element comes into view in the viewport.
        scrub: true, // active when i scroll down or scroll up the return the value of animation
        scrub: 3, // to make it more smooth
        end: "10000px top", // "bottom top" means the trigger will end when the bottom of the element reaches the top of the viewport
        start: "bottom bottom", // "element viewport"
      },
    });

    //! Section 1

    t1.to(".sec1 .img1", { left: "-150px", duration: 3 })
      .to(".sec1 .img3", { right: "-130px", duration: 3 }, 0)
      .to(
        ".sec1 .img2",
        { scale: 0.5, transformOrigin: " center center", duration: 3 },
        0
      )

      .to(
        [".sec1 h2", ".sec1 p", ".sec1 a", ".sec1 .img2"],
        { opacity: 0, duration: 3 },
        2
      )
      .to(".sec1 .img1", { duration: 3, left: "-300px", duration: 2 }, 3)
      .to(".sec1 .img3", { duration: 3, right: "-300px", duration: 2 }, 3)
      .to(".sec1 .img2", { duration: 3, scale: 0 }, 3);

    //! Section 2
    const t2 = gsap.timeline();
    t1.add(t2);
    t2.to(".sec2", { display: "flex", duration: 3 }, ".sec1")
      .from(
        ".sec2 .shape",
        { opacity: 0, scale: 0, duration: 3, ease: "none", rotate: "-45deg" },
        0
      )
      .from(
        ".sec2 .text",
        { opacity: 0, scale: 1.3, duration: 3, ease: "none" },
        0
      )
      .to(
        ".sec2 .shape",
        { rotate: "45deg", scale: 20, duration: 5, ease: "circ.in" },
        5
      )
      .to(".sec2 .text", { opacity: 0, scale: 1, duration: 2 }, 5)
      .to(
        ".sec2 span",
        { duration: 2, scale: 10, webkitTextStroke: "50px #222" },
        10
      );

    //! Section 3
    const t3 = gsap.timeline();
    t1.add(t3);
    t3.set(
      ".sec3",
      { display: "flex", background: "#1d1d1f", duration: 2 },
      ".sec2"
    )
      .to(".sec3 .text h2", { scale: 2.5, opacity: 1, duration: 3 })
      .to(".sec3 .text h2", { scale: 0.7, opacity: 0, duration: 3 }, 2);

    //! Section 4
    const t4 = gsap.timeline();
    t1.add(t4);
    Common1(".sec4", t4, "#1d1d1f");

    //! Section 5
    const t5 = gsap.timeline();
    t1.add(t5);
    Common1(".sec5", t5, "#ebebec", "#1d1d1d");

    //! Section 6
    const t6 = gsap.timeline();
    t1.add(t6);
    Common2(".sec6", t6, "#1d1d1f", "#ebebec");

    //! Section 7
    const t7 = gsap.timeline();
    t1.add(t7);
    Common2(".sec7", t7);

    //! Section 8
    const t8 = gsap.timeline();
    t1.add(t8);
    Common2(".sec8", t8, "#ebebec");

    //! Section 9
    const tClients = gsap.timeline();
    t1.add(tClients);
    tClients
      .set(".clients", { display: "flex" })
      .to(".clients h2", { opacity: 1, scale: 1.2, duration: 5 })
      .to(".clients .images img", { opacity: 1, stagger: 0.3, duration: 2 }, 0)
      .to(
        ".clients h2",
        {
          scale: 50,
          ease: "none",
          webkitTextStroke: "50px #1d1d1f",
          duration: 3,
        },
        4
      );

    //! Section 10
    const tStatics = gsap.timeline();
    t1.add(tStatics);
    tStatics
      .set(".statics", { display: "flex", background: "#1d1d1f" })
      .to(".statics .boxes .box", { opacity: 1, duration: 1, stagger: 2 })
      .set(".statics", { display: "none" });

    //! Section 11
    const tFooter = gsap.timeline();
    t1.add(tFooter);
    tFooter
      .set("footer", {
        display: "flex",
        opacity: 1,
        minHeight: "83vh",
      })
      .to(["footer .logo", "footer ul"], {
        stagger: 0.3,
        duration: 3,
        opacity: 1,
      })
      .from(["footer ul li"], { duration: 3, x: "-20px" }, 0);

    function Common1(sec, t, bg, color) {
      t.set(`${sec}`, { background: bg, display: "flex" });

      t.to([`${sec} .cir1`, `${sec} .cir2`], { scale: 0.9, duration: 3 });
      t.to([`${sec} .cir2 img`], { scale: 2.9, duration: 3 });
      t.to(
        [`${sec} .cir2 span`, `${sec} .cir1`],
        { opacity: 0.6, duration: 3 },
        3
      );
      t.to(
        [`${sec} .cir2 ._btn`],
        { opacity: 0.8, clipPath: "circle(100% at 50% 50%)", duration: 4 },
        3
      );
      t.to(
        [`${sec} .cir2 h2`],
        { scale: 1.5, transformOrigin: "center center", duration: 4 },
        6
      );
      t.to([`${sec} .cir2 img`], { scale: 8, duration: 4 }, 6);

      t.to([`${sec} .cir2 h2`], { ease: "none", scale: 80, duration: 3 }, 8);
      t.to(
        [`${sec} .cir2 h2`],
        {
          ease: "none",
          webkitTextStroke: `50px ${color || "white"}`,
          duration: 2,
        },
        10
      );

      t.to(
        [`${sec} .cir2 span`, `${sec} .cir1`, `${sec} .cir2 button`],
        { opacity: 0, duration: 2 },
        7
      );
    }

    function Common2(sec, t, bg, color) {
      t.set(`${sec}`, { background: bg, display: "flex" });

      t.to([`${sec} .cir1`, `${sec} .cir2`], { scale: 0.9, duration: 3 });
      t.to([`${sec} .cir2 img`], { scale: 2.9, duration: 3 });
      t.to(
        [`${sec} .cir2 span`, `${sec} .cir1`],
        { opacity: 0.4, duration: 3 },
        3
      );
      t.to(
        [`${sec} .cir2 ._btn`],
        { opacity: 0.8, clipPath: "circle(100% at 50% 50%)", duration: 4 },
        3
      );
      t.to([`${sec} .cir2 h2`], { scale: 1.5, duration: 4 }, 6);
      t.to([`${sec} .cir2 img`], { scale: 8, duration: 4 }, 6);

      t.to([`${sec} .cir2 img`], { scale: 2, duration: 4 }, 8);
      t.to(
        [`${sec} .cir2 span`, `${sec} .cir1`],
        { opacity: 0, duration: 2 },
        10
      );
      t.to([`${sec} .cir2 h2`], { scale: 2.5, duration: 4 }, 10);
      t.to([`${sec} .cir1`, `${sec} .cir2`], { scale: 0, duration: 2 }, 10);
    }
  });

  const t = useTranslations("home");

  return (
    <>
      <Navbar classN="white-50" />

      <div className="hero">
        <div className="inner-scroll">
          <div className="sec1 sec">
            <div className="text">
              <h2 dangerouslySetInnerHTML={{ __html: t.raw("sec1")[0] }} />
              <p> {t.raw("sec1")[1]} </p>
              <Link href="/contact-us" className="_btn">
                {" "}
                {t.raw("sec1")[2]}{" "}
              </Link>
            </div>
            <Image
              loading="eager"
              className="img1"
              src={Sec1}
              width={300}
              height={300}
              alt="null"
            />
            <Image
              loading="eager"
              className="img2"
              src={Sec2}
              width={300}
              height={300}
              alt="null"
            />
            <Image
              loading="eager"
              className="img3"
              src={Sec3}
              width={300}
              height={300}
              alt="null"
            />
          </div>

          <div className="sec2 sec">
            <div className="shape">
              {" "}
              <span> 13 </span>
            </div>
            <div className="text">
              <h2> {t.raw("sec2")[0]} </h2>
              <button className="_btn"> {t.raw("sec2")[1]} </button>
            </div>
          </div>

          <div className="sec3 sec">
            <div className="text">
              {" "}
              <h2> {t("sec3")} </h2>{" "}
            </div>
          </div>

          <Sections
            link={`/departments/${categories?.[1]?.id}`}
            classn="sec4"
            img={Sec4}
            h2={t.raw("sec4")[0]}
            btn={t.raw("sec4")[1]}
          />
          <Sections
            link={`/departments/${categories?.[0]?.id}`}
            classn="sec5"
            img={Sec5}
            h2={t.raw("sec5")[0]}
            btn={t.raw("sec5")[1]}
          />
          <Sections
            link={`/departments/${categories?.[2]?.id}`}
            classn="sec6"
            img={Sec6}
            h2={t.raw("sec6")[0]}
            btn={t.raw("sec6")[1]}
          />
          <Sections
            link={`/departments/${categories?.[3]?.id}`}
            classn="sec7"
            img={Sec7}
            h2={t.raw("sec7")[0]}
            btn={t.raw("sec7")[1]}
          />
          <Sections
            link={`/departments/${categories?.[4]?.id}`}
            classn="sec8"
            img={Sec8}
            h2={t.raw("sec8")[0]}
            btn={t.raw("sec8")[1]}
          />

          <div className="clients sec">
            <div className="text">
              {" "}
              <h2> {t("clients")} </h2>{" "}
            </div>
            <div className="images">
              {" "}
              {[Client1, Client2, Client3, Client4, Client5].map((e, i) => (
                <Image
                  loading="eager"
                  src={e}
                  key={i}
                  width={200}
                  height={200}
                  alt="eager"
                />
              ))}
            </div>
          </div>

          <div className="statics sec">
            <div className="boxes">
              {" "}
              {t.raw("statics").map((e, i) => (
                <div key={i} className="box">
                  <Image
                    loading="eager"
                    src={data[i].img}
                    key={i}
                    width={200}
                    height={200}
                    alt="eager"
                  />
                  <h2> {e.number} </h2>
                  <p> {e.h2} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
