import React from "react";

const PersonalInfo = () => {
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">
          Who we are
        </h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem", alignItems:'center' }}></div>
        <p
          className="fz-24 has-black-color has-secondary-font"
          style={{ maxWidth: "15.3125rem" }}
        >
          Exquisite bathroom designs and installations by our team of experienced and accomplished specialists. Covering the Greater Manchester and Cheshire Area.
        </p>
      </div>
      {/* End .ptf-animated-block */}

      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{
          "--ptf-xxl": "5.625rem",
          "--ptf-md": "2.8125rem",
        }}
      ></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Contact</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem", alignItems:'center' }}></div>
        <p className="fz-24 has-black-color has-secondary-font">
          Greater Manchester and Cheshire <br />
          <a href="mailto:info@plumb-perfect.co.uk">info@plumb-perfect.co.uk</a>
          <br />
          <a href="tel:+447984759694">07984759694</a>
          <br />
          <a href="tel:+448007999889">0800 799 9889</a>
        </p>
      </div>
      {/* End .ptf-animated-block */}

      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{
          "--ptf-xxl": "5.625rem",
          "--ptf-md": "2.8125rem",
        }}
      ></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="300">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Services</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem", alignItems:'center' }}></div>
        <p className="fz-24 has-black-color has-secondary-font">
          Water Leaks <br />
          Blocked Drains <br />
          Bathroom / Wet room installation <br />
          Disabilty / Mobility <br />
          WC / Cloakroom conversion <br />
          Tiling <br />
          Burst Pipes
        </p>
      </div>
      {/* End .ptf-animated-block */}
    </>
  );
};

export default PersonalInfo;
