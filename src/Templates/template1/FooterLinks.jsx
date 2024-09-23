import React from "react";
import { useTranslation } from "react-i18next";

const FooterLinks = ({ links }) => {
  const { t } = useTranslation();

  const courses = [
    "smm",
    "e-commerce",
    "graphicdesign",
    "dataanalytics",
    "copywriting",
    "adsmanagerpro",
  ];

  const other = ["about", "why", "testimonials", "team"];

  let which = links == "courses" ? courses : other;

  return (
    <div className="flex flex-[1] justify-evenly">
      <div>
        <h3 className="text-2xl font-[500] mb-7">
          {t(`sovorir.footer.${links}.title`)}
        </h3>
        <ul className="text-lg text-gray-700 flex flex-col gap-5">
          {which.map((text, key) => (
            <li
              key={key}
              className="cursor-pointer duration-300 hover:opacity-50"
            >
              {t(`sovorir.footer.${links}.links.${text}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
