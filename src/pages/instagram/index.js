import React from 'react'
import Gallery from '../../components/Gallery'
import { instaImages, meta } from '../../content_option'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './style.css'

function InstagramFeeds () {
  return <HelmetProvider>
  <Container>
   <Helmet>
      <meta charSet="utf-8" />
      <title> Portfolio | {meta.title} </title>{' '}
      <meta name="description" content={meta.description} />
    </Helmet>
    <Row className="mb-5 mt-3 pt-md-3">
      <Col lg="6">
        <h2 className='mb-4 t_border display-4'>Instagram Feed</h2>
        <hr className="t_border my-4 ml-0 text-left" />
      </Col>
    </Row>
  <Gallery images={instaImages}/>

  </Container>
  </HelmetProvider>
}

export default InstagramFeeds
