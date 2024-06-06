import React from "react";

const AllComponent = ({ Output, title, text }) => {
  console.log(Output);
  return (
    <>
      <div className="Output">
        <h1 className="service__title">
          {title?title: 'Our Services'}
        </h1>
        <p className="service__text">
          {text?text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}
        </p>
      </div>
    </>
  );
};

export default AllComponent;
