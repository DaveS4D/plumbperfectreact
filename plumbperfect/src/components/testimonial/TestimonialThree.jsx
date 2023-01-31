import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: ` “Overall I can definitely recommend Kez and the team. Kez's attention to detail
    and focus on the finish of the bathroom really stood out to me versus other trades I've worked
    with before, he genuinely cared about my expectations and went above and beyond to make sure
    I was pleased with the end product, even if this resulted in re-doing some work or changing
    the plan part way through the project. He was also a pleasure to interact with and completed
    the project with a smile even if things didn't go to plan. Would definitely work with him and the team again.”`,
    name: "Bathroom Renovation",
    designation: "Service carried out",
    companyName: "M9",
    webLink: "https://www.checkatrade.com/trades/plumbperfectlimited",
  },
  {
    descriptions: ` “Kez is very professional in his work and in his manner. His communication skills
  are excellent. We extremely pleased with our new bathrooms and could highly recommend him to do
  a fantastic job. He also was able to fix some other plumbing work which had been badly done by
  another tradesman. All in all he went the extra mile for us.”`,
    name: "Full Bathroom Installation",
    designation: "Service carried out",
    companyName: "M20",
    webLink: "https://www.checkatrade.com/trades/plumbperfectlimited",
  },
  {
    descriptions: ` “Kez and his team were great to work with in installing a downstairs shower
  with mobility support features. They listened carefully to our needs, made good, cost-saving
  suggestions re parts and materials, and worked hard on the job - taking care with the workmanship
  and clearing up thoroughly at the end of each day to minimise inconvenience to us. Kez was very professional,
  communicated very clearly and was a pleasure to deal with. We recommend him highly and would use him again.”`,
    name: "Shower installation in Cloakroom conversion",
    designation: "Serivce carried out",
    companyName: "SK11",
    webLink: "https://www.checkatrade.com/trades/plumbperfectlimited",
  },
];

const TestimonialThree = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <>
      <Slider
        {...settings}
        className="arrow-none testimonial-pagination--style-bottom"
      >
        {testimonialContent.map((val, i) => (
          <div
            className="ptf-testimonial ptf-testimonial--style-1 space-80"
            key={i}
          >
            <div className="ptf-testimonial__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-testimonial__meta">
              <h6 className="ptf-testimonial__author">{val.name}</h6>
              <div className="ptf-testimonial__info">
                <span>{val.designation}</span> at{" "}
                <a href={val.webLink} target="_blank" rel="noopener noreferrer">
                  {val.companyName}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialThree;
