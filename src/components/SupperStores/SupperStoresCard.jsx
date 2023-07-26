import React from "react";
import { Col } from "reactstrap";
import "../../style/supper-store-card.css";

const SupperStoreCard = () => {
  return (
    <Col lg='3' md='4' sm='6' style={{ height: "479px" }}>
      <div className='carousel__item'>
        <div className='carousel__img'>
          <img
            src='https://img1.superbuy.com/images/daigou-admin/2022/06/02/8546b477-18ff-4ad7-a4a9-d2415f7667d8.jpg'
            alt=''
          />
        </div>
        <p className='carousel__title'>Owner Qshoes</p>
        <p className='carousel__detail'>Hot sale trendy shoes</p>
      </div>
    </Col>
  );
};

export default SupperStoreCard;
