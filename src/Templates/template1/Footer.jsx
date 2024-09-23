import React from "react";
import SocialMedia from "./SocialMedia";
import { useTranslation } from "react-i18next";
import { FiPhone } from "react-icons/fi";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-32 bg-white border-t-[3px] border-t-primary-sovorir px-[5%] pt-[3rem] rounded-t-[20vw]">
      <div className="max-w-[1680px] mx-auto my-0">
        <h1 className="!font-bridgens text-center uppercase text-[max(3em,8vw)] leading-[1.2] tracking-[1rem] pointer-events-none">
          Sovorir <span className="text-primary-sovorir">IT</span>
        </h1>
        <div className="border-y-[2px] mt-8 py-12">
          <div className="flex justify-between">
            <div className="">
              <SocialMedia />
              <div className="flex gap-4">
                <button className="group mt-8 py-4 px-14 text-xl rounded-[50vw] bg-thirdly-sovorir text-white">
                  <div className="relative overflow-hidden">
                    <div className="group-hover:translate-y-[-110%] transition duration-300">
                      {t("sovorir.footer.signup")}
                    </div>
                    <div className="text-white translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                      {t("sovorir.footer.signup")}
                    </div>
                  </div>
                </button>
                <a href={`tel:${t("sovorir.footer.phone")}`}>
                  <button className="flex items-center gap-[0.75rem] mt-8 py-4 px-14 text-xl rounded-[50vw] bg-white text-black border-2 hover:text-primary-sovorir hover:border-thirdly-sovorir transition duration-200">
                    <FiPhone className="w-[28px] h-[28px]" />
                    <span>{t("sovorir.footer.phone")}</span>
                  </button>
                </a>
              </div>
            </div>
            <FooterLinks links="courses" />
            <FooterLinks links="other" />
          </div>
        </div>
        <div className="text-center py-8">
          <p
            className="text-gray-500 text-lg pointer-events-none"
            dangerouslySetInnerHTML={{
              __html: t("sovorir.footer.rights"),
            }}
          ></p>
          {/* <p></p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
