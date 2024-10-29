import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcherOnHover = () => {
  const { i18n, t } = useTranslation();

  const [isHidden, setHidden] = useState(false);

  const handleLanguageChange = (e) => {
    localStorage.setItem("language", e);
    i18n.changeLanguage(e);
    setHidden(false);
  };

  return (
    <div
      className="!font-montserrateng relative"
      onMouseEnter={() => setHidden(true)}
      onMouseLeave={() => setHidden(false)}
    >
      <p className="cursor-pointer capitalize py-3">{i18n.language}</p>
      <ul
        className="absolute capitalize -translate-y-[40%] opacity-0 transition-all duration-700 ease"
        style={isHidden ? { transform: "translateY(0%)", opacity: "1" } : null}
      >
        {["br", "en"].map((text, key) => (
          <li
            key={key}
            className="cursor-pointer opacity-70 py-1 transition-opacity duration-300 hover:opacity-90"
            onClick={() => handleLanguageChange(text)}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcherOnHover;
