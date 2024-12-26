import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Logo from "../public/logoNew-removebg-preview-removebg-preview.png";
import Link from "next/link";

const Footer = ({ classN }) => {
  const t = useTranslations("home");
  return (
    <>
      <footer
        className={classN}
        style={{ flexWrap: "wrap", padding: "10px", paddingTop: "60px" }}
      >
        <div className="container">
          <ul>
            <div className="logo">
              <Image
                loading="eager"
                alt="eager"
                src={Logo}
                width={170}
                height={120}
              />
            </div>
          </ul>

          <ul>
            <h3> {t.raw("footer.li1")[0]} </h3>
            <li>
              {" "}
              <Link href="/departments/17">
                {" "}
                {t.raw("footer.li1")[1]}{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/departments/19">
                {" "}
                {t.raw("footer.li1")[2]}{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/departments/36">
                {" "}
                {t.raw("footer.li1")[3]}{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/departments/18">
                {" "}
                {t.raw("footer.li1")[4]}{" "}
              </Link>{" "}
            </li>
          </ul>

          <ul>
            <h3> {t.raw("footer.li2")[0]} </h3>
            <li>
              {" "}
              <Link href="/about-us"> {t.raw("footer.li2")[1]} </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/contact-us"> {t.raw("footer.li2")[2]} </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/our-projects"> {t.raw("footer.li2")[3]} </Link>{" "}
            </li>
          </ul>

          <ul>
            <h3> {t.raw("footer.li3")[0]} </h3>
            <p dangerouslySetInnerHTML={{ __html: t.raw("footer.li3")[1] }} />
            <p>{t.raw("footer.li3")[2]} </p>
            <b className="number"> {t.raw("footer.li3")[3]} </b>
          </ul>

          <ul>
            <h3> {t.raw("footer.li4")[0]} </h3>
            <li> {t.raw("footer.li4")[1]} </li>
            <li> {t.raw("footer.li4")[2]} </li>
            <li> {t.raw("footer.li4")[3]} </li>
            <li> {t.raw("footer.li4")[4]} </li>
            <li> {t.raw("footer.li4")[5]} </li>
          </ul>
        </div>
        <div
          className="footer2"
          style={{
            background: "#fff",
            width: "100%",
            paddingRight: "30px",
            paddingLeft: "30px",
            borderTop: "1px #ccc solid;",
          }}
        >
          <div
            class="copyRights text-center my-2 fw-bold d-flex justify-content-between "
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "600",
              minHeight: "40px",
              alignItems: "center",
              background: "#fff",
            }}
          >
            <h4 style={{ opacity: "0.6" }}>{t.raw("footer2.li1")}</h4>
          </div>{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
