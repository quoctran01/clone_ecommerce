import React from "react";
import "../../style/layout-content.css";
import { Container, Row, Col } from "reactstrap";
import SupperStoreList from "../SupperStores/SupperStoreList";

const LayoutContent = () => {
  return (
    <>
      <section className='shoppingAgent-rank'>
        <main>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='title-bar'>
                  <div className='shoppingAgent-rank__title'>
                    <div className='shoppingAgent-rank__title--left'>
                      <h3>SUPER STORES</h3>
                      <p>Selected stores , Limited-quantity discounts</p>
                    </div>
                    <div className='shoppingAgent-rank__title--right'>
                      <a href=''>More &gt;</a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <section className='carousel-wrap'>
              <div className='carousel-content-wrap'>
                <Row>
                  <SupperStoreList />
                </Row>
              </div>
            </section>
          </Container>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='title-bar'>
                  <div className='shoppingAgent-rank__title'>
                    <div className='shoppingAgent-rank__title--left'>
                      <h3>SUPER DEALS</h3>
                      <p>Limited supply,exclusive deals</p>
                    </div>
                    <div className='shoppingAgent-rank__title--right'>
                      <a href=''>More &gt;</a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <section className='carousel-wrap'>
              <div className='carousel-content-wrap'>
                <Row>
                  <SupperStoreList />
                </Row>
              </div>
            </section>
          </Container>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='title-bar'>
                  <div className='shoppingAgent-rank__title'>
                    <div className='shoppingAgent-rank__title--left'>
                      <h3>SUPER PICKS</h3>
                      <p>Fashion goodies of the season</p>
                    </div>
                    <div className='shoppingAgent-rank__title--right'>
                      <a href=''>More &gt;</a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <section className='carousel-wrap'>
              <div className='carousel-content-wrap'>
                <Row>
                  <SupperStoreList />
                </Row>
              </div>
            </section>
          </Container>
        </main>
      </section>
    </>
  );
};

export default LayoutContent;
