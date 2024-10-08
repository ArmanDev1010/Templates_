import React, { useEffect, useState } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationAM, translationEN, translationRU } from "./languages";

import { MyContext } from "./context/MyContext";

import { Route, Routes } from "react-router-dom";

import { Home, Home2, Home3, Home4, Home5 } from "./pages";

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
          {/* <Route path="/template1/">
            <Route path="" element={<Home codename="wizzy" />} />
          </Route>
          <Route path="/template2/">
            <Route path="" element={<Home2 codename="pulse" />} />
          </Route> */}
          <Route path="/template3/">
            {/* <Route path="" element={<Home3 codename="chroma" />} /> */}
            {/* <Route path="" element={<Home3 codename="mod" />} /> */}
            {/* <Route path="" element={<Home3 codename="fly" />} /> */}
            {/* <Route path="" element={<Home3 codename="zenit" />} /> */}
            {/* <Route path="" element={<Home3 codename="khar" />} /> */}
            {/* <Route path="" element={<Home3 codename="arch" />} /> */}
          </Route>
          <Route path="/template4/">
            {/* <Route path="" element={<Home4 codename="armat" />} /> */}
            {/* <Route path="" element={<Home4 codename="zenit" />} /> */}
            {/* <Route path="" element={<Home4 codename="mod" />} /> */}
          </Route>
          <Route path="/template5/">
            {/* <Route path="" element={<Home5 codename="anie" />} /> */}
            {/* <Route path="" element={<Home5 codename="kn" />} /> */}
            {/* <Route path="" element={<Home5 codename="look" />} /> */}
            {/* <Route path="" element={<Home5 codename="kult" />} /> */}
            {/* <Route path="" element={<Home5 codename="absolute" />} /> */}
            {/* <Route path="" element={<Home5 codename="atelier" />} /> */}
            {/* <Route path="" element={<Home5 codename="cubit" />} /> */}
            <Route path="" element={<Home5 codename="f9" />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
};

export default App;
