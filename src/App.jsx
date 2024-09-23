import React, { useEffect, useState } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationAM, translationEN, translationRU } from "./languages";

import { MyContext } from "./context/MyContext";

import { Route, Routes } from "react-router-dom";

import { Home, Home2, Home3 } from "./pages";

const resources = {
  am: {
    translation: translationAM,
  },
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language"),
  fallbackLng: "am",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <div className="!font-montserrat">
      <MyContext.Provider
        value={{
          isDesktop,
        }}
      >
        <Routes>
          <Route path="/template1/">
            <Route path="" element={<Home codename="wizzy" />} />
          </Route>
          <Route path="/template2/">
            <Route path="" element={<Home2 codename="pulse" />} />
          </Route>
          <Route path="/template3/">
            <Route path="" element={<Home3 codename="chroma" />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
};

export default App;
