import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import InstagramEmbed from 'react-instagram-embed';


const whoimages = require.context("../../assets/Instagram", true);



function InstagramGallery() {
  return (
    <InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  clientAccessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
  );
}
export default InstagramGallery;

export const Instagram = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Instagram | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Instagram | Who Shot Ya </h1>
            More images and inquiries can be found on <a href={socialprofils.instagram}>Instagram</a>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          <InstagramGallery />
      </Container>
    </HelmetProvider>
  );
};
