import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Visítanos en nuestros Blogs</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title="TORRES"
              subtitle="GHOST CMS"
              link="https://torresfarias.com/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="SANCHEZ"
              subtitle="GHOST CMS"
              link="https://www.anthonysanchez.me/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title="SAGITARIO"
              subtitle="GHOST CMS"
              link="https://sagitariodocerox.es/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={wordPress}
              title="ORTÍZ"
              subtitle="GHOST CMS"
              link="https://sebastianortiz.me/"
            />
          </Col>
        </Row>
        
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/admin">
          <Button>Ingresar</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
