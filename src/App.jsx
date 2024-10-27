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
          <Route path="/template1/">
            {/* <Route path="" element={<Home codename="wizzy" />} /> */}
            {/* <Route path="" element={<Home codename="spin" />} /> */}
          </Route>
          <Route path="/template2/">
            {/*<Route path="" element={<Home2 codename="pulse" />} />*/}
          </Route>
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
            {/* <Route path="" element={<Home5 codename="f9" />} /> */}
            {/* <Route path="" element={<Home5 codename="wta" />} /> */}
            {/* <Route path="" element={<Home5 codename="raw" />} /> */}
            {/* <Route path="" element={<Home5 codename="larcc" />} /> */}
            {/* <Route path="" element={<Home5 codename="blank" />} /> */}
            {/* <Route path="" element={<Home5 codename="tatlo" />} /> */}
            {/* <Route path="" element={<Home5 codename="schedio" />} /> */}
            {/* <Route path="" element={<Home5 codename="watsuk" />} /> */}
            {/* <Route path="" element={<Home5 codename="unk" />} /> */}
            {/* <Route path="" element={<Home5 codename="plearn" />} /> */}
            {/* <Route path="" element={<Home5 codename="houser" />} /> */}
            {/* <Route path="" element={<Home5 codename="ldn" />} /> */}
            {/* <Route path="" element={<Home5 codename="archita" />} /> */}
            {/* <Route path="" element={<Home5 codename="v2" />} /> */}
            {/* <Route path="" element={<Home5 codename="mental" />} /> */}
            {/* <Route path="" element={<Home5 codename="toby" />} /> */}
            {/* <Route path="" element={<Home5 codename="91" />} /> */}
            {/* <Route path="" element={<Home5 codename="moy" />} /> */}
            {/* <Route path="" element={<Home5 codename="laor" />} /> */}
            {/* <Route path="" element={<Home5 codename="ish" />} /> */}
            {/* <Route path="" element={<Home5 codename="qoon" />} /> */}
            {/* <Route path="" element={<Home5 codename="jump" />} /> */}
            {/* <Route path="" element={<Home5 codename="willa" />} /> */}
            {/* <Route path="" element={<Home5 codename="nnine" />} /> */}
            {/* <Route path="" element={<Home5 codename="armat2" />} /> */}
            {/* <Route path="" element={<Home5 codename="23" />} /> */}
            {/* <Route path="" element={<Home5 codename="masoor" />} /> */}
            {/* <Route path="" element={<Home5 codename="prof" />} /> */}
            {/* <Route path="" element={<Home5 codename="b8" />} /> */}
            {/* <Route path="" element={<Home5 codename="stud3" />} /> */}
            {/* <Route path="" element={<Home5 codename="desg" />} /> */}
            {/* <Route path="" element={<Home5 codename="urbd" />} /> */}
            {/* <Route path="" element={<Home5 codename="ud" />} /> */}
            {/* <Route path="" element={<Home5 codename="kcid" />} /> */}
            {/* <Route path="" element={<Home5 codename="greer" />} /> */}
            {/* <Route path="" element={<Home5 codename="atlas" />} /> */}
            {/* <Route path="" element={<Home5 codename="evn" />} /> */}
            {/* <Route path="" element={<Home5 codename="mitq" />} /> */}
            {/* <Route path="" element={<Home5 codename="rrsa" />} /> */}
            {/* <Route path="" element={<Home5 codename="atla" />} /> */}
            {/* <Route path="" element={<Home5 codename="archv" />} /> */}
            {/* <Route path="" element={<Home5 codename="sens" />} /> */}
            {/* <Route path="" element={<Home5 codename="biia" />} /> */}
            {/* <Route path="" element={<Home5 codename="storie" />} /> */}
            {/* <Route path="" element={<Home5 codename="brainy" />} /> */}
            {/* <Route path="" element={<Home5 codename="amber" />} /> */}
            <Route path="" element={<Home5 codename="azd" />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
};

export default App;
