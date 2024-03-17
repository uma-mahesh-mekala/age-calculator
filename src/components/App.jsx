import React from "react";
import calculateAge from "../calculateAge";
import Age from "./Age";

function App() {
  let [birthDate, setBirthDate] = React.useState(
    new Date().toISOString().slice(0, 10)
  );
  let [calculationDate, setCalculationDate] = React.useState(
    new Date().toISOString().slice(0, 10)
  );

  let [isClicked, setIsClicked] = React.useState(false);

  const [age, setAge] = React.useState({
    years: 0,
    months: 0,
    days: 0,
  });

  function handleChange(e) {
    e.target.name === "birthDate"
      ? setBirthDate(e.target.value)
      : setCalculationDate(e.target.value);
  }

  async function handleClick() {
    if (birthDate > calculationDate) {
      alert("The birthdate should be less the calculation date");
      return null;
    }
    const age = await calculateAge(birthDate, calculationDate);
    setIsClicked(true);
    setAge(age);
  }
  return (
    <div>
      <h1 className="heading">Age Calculator</h1>
      <div className="ageCalculator">
        <label htmlFor="birthDate">Please select Birth Date:</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          defaultValue={birthDate}
          onChange={handleChange}
        />
        <label htmlFor="calculationDate">Age at the end of:</label>
        <input
          type="date"
          id="calculationDate"
          name="calculationDate"
          defaultValue={calculationDate}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClick}>
          Calculate Age
        </button>
        {isClicked ? (
          <Age years={age.years} months={age.months} days={age.days} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
