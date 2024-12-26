"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import { getService } from "@/services/api/common/common";
import { getOffers } from "@/services/api/common/offers";

import { ChevronDown, MoveRight, Square, SquareCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const page = () => {
  const t = useTranslations("offers");
  const { locale } = useParams();
  const [offers, setOffer] = useState(false);
  const [state, setState] = useState({
    value: 0,
    index: 3,
    offer: null,
    services: null,
    filterOffer: null,
    isDropdownOpen: false,
  });
  const { value, offer, services, filterOffer, isDropdownOpen } = state;

  const handleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  const getOfferData = async () => {
    try {
      const res = await getOffers();
      setState((prevState) => ({
        ...prevState,
        offer: res?.data,
        filterOffer: res?.data,
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
    getOfferData();
    getServiceData();
  }, []);

  const filteredOffers = useMemo(() => {
    if (value === 0) return offer;
    return offer?.filter((item) => item?.service_id?.id == value?.id);
  }, [value, offer]);
  useEffect(() => {
    setState((prevState) => ({ ...prevState, filterOffer: filteredOffers }));
  }, [filteredOffers]);

  return (
    <>
      <Navbar classN="soft" />
      <div
        className="marketing offers"
        style={{ direction: locale === "en" ? "ltr" : "rtl" }}
      >
        <div className="hero">
          <Image
            loading="eager"
            alt="Offer Secxtion Image"
            src={"/sep/offers/2.jpg"}
            width={1400}
            height={600}
          />
          <div className="container">
            <div className="text">
              <h1 className="h1"> {t("h1")} </h1>
            </div>
          </div>
        </div>

        <div className="filter">
          <div className="container">
            <h2 className="h2"> {t("h2")} </h2>
            <p className="p"> {t("h3")} </p>

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
              </div>{" "}
            </div>

            <div className="boxes">
              {filterOffer?.map((e, i) => (
                <div className="box" key={i}>
                  <div className="img">
                    {" "}
                    <Image
                      alt="Image for every Offer "
                      src={e?.image}
                      width={400}
                      height={300}
                    />{" "}
                  </div>
                  <div className="h3">
                    {locale === "en" ? e.name_en : e.name_ar}
                  </div>
                  <div className="p discount">
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#d3c1c1",
                        textDecoration: "line-through",
                      }}
                    >
                      {e.service_id?.price}
                    </p>
                    <p> {e.priceAfter}</p>
                    <b>{e.before}</b>
                  </div>
                  <button onClick={(_) => setOffer(e)} className="_btn-icon">
                    {" "}
                    {t("btn3")} <MoveRight />{" "}
                  </button>
                </div>
              ))}
            </div>

            {/* <div className="view-more">
              {" "}
              <div onClick={(_) => setState(6)} className="inner">
                {" "}
                {t("btn2")} <CircleChevronDown />{" "}
              </div>{" "}
            </div> */}
          </div>
          {/* <div className="view-more"> <div onClick={_=> setIndex(6)} className="inner"> {t("btn2")}  <CircleChevronDown /> </div> </div> */}
        </div>
      </div>

      {offers && <Offer e={offers} setOffer={setOffer} />}

      <Footer classN="footer" />
    </>
  );
};

export default page;
