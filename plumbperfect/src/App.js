import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { jarallax } from "jarallax";
import AnimatedCursor from "react-animated-cursor";
import { useMediaQuery } from 'react-responsive'

const isMobileDevice = useMediaQuery({
  query: "(min-device-width: 480px)",
});

const isTabletDevice = useMediaQuery({
  query: "(min-device-width: 768px)",
});

const isLaptop = useMediaQuery({
  query: "(min-device-width: 1024px)",
});

const isDesktop = useMediaQuery({
  query: "(min-device-width: 1200px)",
});

const isBigScreen = useMediaQuery({
  query: "(min-device-width: 1201px )",
});

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Plumb Perfect - Mobile Plumbing Services - Manchester and Cheshire</title>
        <meta name="description" content="Your local mobile plumber covering the Greater Manchester and Cheshire area" />
        <meta
          name="keywords"
          content="plumber, toilet, drain, unblock, bathroom , blocked, manchester, cheshire, greater, plumbing, hale, macclesfield, handforth, wilmslow, longsight, bury, preston, salford, trafford, urmston, stretford, wythenshawe, cheadle, bramhall, hazel, grove, poynton, bollington, altrincham, sale, denton, hyde, bredbury, dukinfield, ashton-under-lyne, stockport, poynton, disley, timperley, alderley, edge, chelford, leak, burst, pipes, sink"
        />
      </Helmet>
      {/* End React Helmet for SEO */}

      {isMobileDevice && <Mobile />}
  {isTabletDevice && <>
  <TabletMobile />
  {isDesktop && <Desktop />}
  {isLaptop && <Laptop />}
  {isBigScreen && <BigScreen />}
</>}

      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="6, 6, 209"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {/* End Animated Cursor */}

      <ScrollToTop />
      {/* End Scroll To Top */}

      <AllRoutes />
      {/* End All Routes */}
    </>
    
  );
};

export default App;
