"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getCareers } from "@/services/api/common/common";
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const page = () => {
  const positions = [
    "front-end-developer",
    "senior-product-manager",
    "front-end-developer",
  ];

  const t = useTranslations("careers");
  const [careers, setCareers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { locale } = useParams();

  const getCareer = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getCareers();
      setCareers(res?.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching careers:", error);
      setError("Failed to load careers. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getCareer();
  }, [getCareer]);
  return (
    <>
      <Navbar classN="white-50" />
      <div className="marketing careers">
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

        <div className="container">
          <div className="h2"> {t("h2")} </div>
        </div>

        <div className="boxes">
          {loading && (
            <div className="container">
              <p>Loading careers...</p>
            </div>
          )}
          {error && <p>{error}</p>}
          {careers?.map((career, i) => (
            <div className="box" key={i}>
              <div className="container">
                <div className="h3">
                  {locale === "en" ? career.name_en : career?.name_ar}
                </div>
                {/* <div className="p">
                  {locale === "en" ? career.requirments : ""}
                </div> */}
                <div className="p">
                  {/* <div className="p">
                    {locale === "en" ? career.benefits : ""}
                  </div> */}
                  {locale === "en"
                    ? career.description_en
                    : career?.description_ar}
                </div>
                <Link href={`/careers/${career?.id}`} className="_btn-icon">
                  {t("Apply")} <MoveRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer classN="footer" />
    </>
  );
};

export default page;
