import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Luis Torres Farías" />
      <h4>
        Graficacion y animacion, es una materia de la ingenieria en sistema que permiter conocer tecnologias para el desarrollo web.
      </h4>
      <SocialLink />
    </div>
  );
}
