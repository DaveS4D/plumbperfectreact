import React from "react";

const resumeContent = [
  {
    year: "",
    delayAnimation: "",
    infoContent: [
      {
        title: " Bathroom / Wet room",
        subTitle: "We deliver a highly competititve bathroom and wet-room design and planning service, for the supply and installation (or installation only) of domestic and commercial projects. Whether existing bathroom spaces or a fresh start, you can trust us to fulfil your brief.",
      },
      {
        title: "Disability / Mobility",
        subTitle: " Plumb Perfect recognises that some of us have more specific needs for a bathroom space in order to make it accessible and user-friendly. We have a dedicated team who continually review market trends and products available to ensure a harmonious experience for all.",
      },
    ],
  },
  {
    year: "",
    delayAnimation: "",
    infoContent: [
      {
        title: "WC / Cloakroom Conversion",
        subTitle: "Prefer not to run up your stairs to the only bathroom in the house or fancy a new guest-friendly WC? Install an additional toilet and basin to a space below your stairs or another location in your home for convenience and added value (subject to survey)",
      },
      {
        title: "Tiling",
        subTitle: "In line with our bathroom design and installation services, we have a highly skilled tiling team that is able to deliver a wide range of designs, from mosaics and stone to the more popular ceramic or porcelain tiles. We're proud to say that we can cater to all tastes.",
      },
    ],
  },
  {
    year: "",
    delayAnimation: "",
    infoContent: [
      {
        title: "Other Services",
        subTitle: "Plumb Perfect has an extended team of multi-skilled, qualified trade experts in electrics, plastering and all other types of renovation work - allowing projects of all scopes and sizes to be considered.",
      },
    ],
  },
];

const Resume = () => {
  return (
    <>
      {resumeContent.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Timeline--> */}
            <div className="ptf-timeline">
              <div className="ptf-timeline__year">{item.year}</div>
              <ul className="ptf-timeline__list">
                {item.infoContent.map((val, i) => (
                  <li className="ptf-timeline__item" key={i}>
                    <h4 className="ptf-timeline__title">{val.title}</h4>
                    <p className="ptf-timeline__description">{val.subTitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
