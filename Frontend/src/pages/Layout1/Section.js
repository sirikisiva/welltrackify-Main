import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import HomeUrl from '../../assets/images/home-border.png';
import Img from '../../assets/images/features/img-2.png';

class Section extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home bg-light" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">
                      <p className="mb-0">Digital Marketing</p>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4">Grow Your <br /> Business Google Ads & Instagram Ads</h1>
                      <p className="text-muted mt-4 f-20">Vestibulum egestas magna ut aliquet sodales nunc
                      fermentum ligula
                                    quis tidunt vitae massa.</p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">Contact Us</Link>{" "}
                        <Link to="#" className="video-play-icon text-dark" onClick={this.openModal}><i className="mdi mdi-play-circle-outline text-dark mr-2"></i>Watch Intro Video</Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="home-img">
                      <div className="animation-1"></div>
                      <div className="animation-2"></div>
                      <div className="animation-3"></div>
                      <img src={Img} className="img-fluid" alt="" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
