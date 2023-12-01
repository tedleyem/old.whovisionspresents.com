import React from 'react'
import './style.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Container, Row, Col } from 'react-bootstrap'
import { whopicportfolio, meta, socialprofils } from '../../content_option'

const whoimages = require.context('../../assets/portfolio', true)
const imageList = whoimages.keys().map(image => whoimages(image))

function ImageGallery () {
  return (
    <div className="mb-5 po_items_ho">
      {imageList.map((whoimages, index) => (
        <div className="po_item">
        <img key={index} src={whoimages} alt={`whovisions-${index}`} />
        </div>
      ))}
      <div className="content">
      <p>{whopicportfolio.description}</p>
      <a href={socialprofils.instagram}>See More</a>
      </div>
    </div>
  )
}
export default ImageGallery

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{' '}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio | Who Shot Ya </h1>
            More images and inquiries can be found on <a href={socialprofils.instagram}>Instagram</a>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          <ImageGallery />
      </Container>
    </HelmetProvider>
  )
}
