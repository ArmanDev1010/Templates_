import React from "react";

import {
  Navbar,
  Hero,
  About,
  Testimonials,
  Courses,
  Partners,
  Footer,
  AboutTwo,
} from "../Templates/template1";

const Home = ({ codename }) => {
  return (
    <div className={`${codename} relative`}>
      <Navbar codename={codename} />
      <Hero codename={codename} />
      <About codename={codename} />
      <Testimonials codename={codename} />
      <Courses codename={codename} />
      <AboutTwo codename={codename} />
      <Partners codename={codename} />
      <Footer codename={codename} />
      <div
        className="z-[-1] opacity-100 mix-blend-color-dodge w-full h-full absolute -top-32 bottom-auto left-0 right-0 bg-center bg-cover bg-no-rpeeat"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/661d2c4b0e54953b357c824a/661fbeb753622346773967fd_hashai-square-bg.svg)",
        }}
      />
    </div>
  );
};

export default Home;
