"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getWallet } from "@/services/api/common/wallet";
import { getToken } from "@/services/api/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const navigate = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));
  const t = useTranslations("my-wallet");
  const getUserAuth = () => {
    const user = getToken();

    if (!user) {
      navigate.push("/sign-in");
    }
  };
  const [wallet, setWallet] = useState(null);
  const getWalletData = async () => {
    try {
      const res = await getWallet();
      setWallet(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWalletData();
    getUserAuth();
  }, []);
  return (
    <>
      <Navbar classN="soft" />
      <div className="marketing my-wallet">
        <div className="container">
          <div className="h1"> {t("h1")} </div>
          <div className="boxes">
            <div className="raw">
              <div className="box">
                <div className="p"> {t.raw("label")[0]} </div>
                <div className="res">
                  {" "}
                  {wallet?.transactions?.[0]?.client?.amount} SAR{" "}
                </div>
              </div>
              <div className="box">
                <div className="p"> {t.raw("label")[1]} </div>
                <div className="res"> {wallet?.overall_transactions} SAR</div>
              </div>

              <div className="box">
                <div className="p"> {t.raw("label")[3]} </div>
                <div className="res"> {user?.code} </div>
              </div>
            </div>

            <div className="raw">
              <div className="box">
                <div className="p"> {t.raw("label")[2]} </div>

                {wallet?.transactions?.map((e) => (
                  <div className="res" key={e?.id}>
                    {" "}
                    {e?.amount} SAR <span> {e?.created_at}</span>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer classN="footer" />
    </>
  );
};

export default page;
