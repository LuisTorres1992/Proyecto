import React from "react";

import ReactDOM, { render } from 'react-dom';
// <-- import { AFrameRenderer, Marker } from 'react-web-ar';-->

import AcademyLogo from "../../../../assets/img/png/academy-logo.png";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
   return (
    <div className="presentation-courses">
      <img src={AcademyLogo} alt="Luis Torres" />
      <p>
        Somos estudiantes de la Pontificia Universidad Católica del Ecuador sede Esmeraldas, cursamos el 6to semestre de Ingeniería en Sistemas y Computación
      </p>
      <p>¡¡¡Gracias por visitar nuestra página!!!</p>
    </div>

  );
}
