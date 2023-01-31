import React from "react";

const brandContent = [
  { dealyAnimation: "0", icon: "image-1", title: "Wetroom" },
  { dealyAnimation: "100", icon: "image-2", title: "Fitting" },
  {
    dealyAnimation: "200",
    icon: "image-3",
    title: "Bathroom",
  },
  {
    dealyAnimation: "300",
    icon: "image-4",
    title: "Tiling",
  },
  {
    dealyAnimation: "400",
    icon: "image-5",
    title: "Disability/Mobility",
  },
  {
    dealyAnimation: "500",
    icon: "image-6",
    title: "Cloakroom Conversion",
  },
];

const BrandFour = () => {
  return (
    <>
      {brandContent.map((val, i) => (
        <div className="col-6 col-md-4 col-lg-2" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.dealyAnimation}
          >
            {/* <!--Advantage Box--> */}
            <div
              className="ptf-advantage-box"
              style={{ "--ptf-image-height": "90px" }}
            >
              <div className="ptf-advantage-box__content">
                <div className="ptf-advantage-box__image">
                  <img
                    src={`assets/img/root/advantages/${val.icon}.png`}
                    alt="Figma"
                    loading="lazy"
                  />
                </div>
              </div>
              <h6 className="ptf-advantage-box__title">{val.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BrandFour;
