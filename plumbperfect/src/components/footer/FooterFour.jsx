import React from "react";
import SocialTwo from "../social/SocialTwo";

const FooterFour = () => {
  return (
    <div className="ptf-footer__top">
      <div className="row">
        <div
          className="
              col-12 col-lg
              d-flex
              justify-content-center justify-content-lg-start
            "
        >
          <p className="ptf-footer-copyright has-black-color">
            &copy; {new Date().getFullYear()} <span>PlumbPerfect</span>. All Rights
            Reserved.
          </p>
        </div>
        {/* End .col */}

        <div className="col-12 col-lg d-flex justify-content-center">
          <div className="ptf-widget ptf-widget-text has-black-color">
            <a href="https://s4digital.co.uk">Designed by S4digital</a>
          </div>
        </div>
        {/* End .col */}

        <div
          className="
              col-12 col-lg
              d-flex
              justify-content-center justify-content-lg-end
            "
        >
          <div className="ptf-footer-socials has-black-color">
            {/* <!--Social Icon--> */}
            <SocialTwo />
          </div>
        </div>
        {/* End .col */}
      </div>
    </div>
  );
};

export default FooterFour;
