import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";

const LanguageSwitcherWithArrow = () => {
  const { i18n, t } = useTranslation();

  const [isClick, setIsClick] = useState(false);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative flex items-center" onClick={() => setIsClick(!isClick)}>
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="appearance-none cursor-pointer w-24 text-lg font-[400] uppercase bg-white border-2 rounded-lg py-2 px-3 border-[#e3e3e3] outline-none"
      >
        {["am", "en", "ru"].map((text, key) => (
          <option value={text} key={key} className="bg-white text-black">
            {t(`regulars.language.${text}`)}
          </option>
        ))}
      </select>
      <IoIosArrowDown
        style={
          isClick
            ? { transform: "rotate(-90deg)"}
            : null
        }
        className="text-lg pointer-events-none transition-transform absolute right-3"
      />
    </div>
  );
};

export default LanguageSwitcherWithArrow;
