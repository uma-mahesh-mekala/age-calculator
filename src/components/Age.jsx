import React from "react";

function Age(props) {
  return (
    <p className="age-description">
      It’s been <span className="years">{props.years}</span>&nbsp;years,{" "}
      <span className="months">{props.months}</span>&nbsp; months, and{" "}
      <span className="days">{props.days}</span>
      &nbsp;days since you arrived on this Earth. I hope you’ve made every day
      count!
    </p>
  );
}

export default Age;
