import React, { Fragment } from "react";
import "./scooters-list-item.scss";

const ScooterListItem = ({ scooter }) => {
  const {
    title,
    name,
    view,
    portion,
    portionnumb,
    present,
    presentnumb,
    review,
    image,
    description,
    question,
    buttun
  } = scooter;
  return (
    <Fragment>
      <div className="scooter-list-element">
        <p href="#" className="scooter-title">
          {title}
        </p>
        <div className="scooter-contents">
          <h2 className="scooter-name">
            {name}
            <span className="scooter-view">{view}</span>
          </h2>
          <p className="scooter-portion">
            <span className="scooter-portion-numb">{portionnumb}</span>
            {portion}
          </p>
          <p className="scooter-present">
            <span className="scooter-present-numb">{presentnumb}</span>
            {present}
          </p>
          <p className="scooter-review">{review}</p>
        </div>

        <div className="scooter-cover">
          <img src={image} alt="cover" className="scooter-cover-img" />
        </div>
      </div>
      <div className="scooter-description">{description} </div>
      <div className="scooter-question">
        {question} <span className="scooter-buttun">{buttun}</span>.
      </div>
    </Fragment>
  );
};

export default ScooterListItem;
