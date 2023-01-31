import React from "react";

const SocialShare = [
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/plumbperfect_manchester",
    iconClass: "instagram",
  },
];
const Social = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {SocialShare.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.instagram}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;