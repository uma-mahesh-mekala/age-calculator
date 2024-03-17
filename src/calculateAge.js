async function calculateAge(birthDate, date) {
  birthDate = new Date(birthDate);
  date = new Date(date);

  // calculate te difference in years
  let years = date.getFullYear() - birthDate.getFullYear();

  // calculate the difference in months
  let months = date.getMonth() - birthDate.getMonth();

  // calculate the difference in days
  let days = date.getDate() - birthDate.getDate();

  // Adjust the months and years
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  // Adjust the days
  if (days < 0) {
    months--;
    let daysInMonths = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    days += daysInMonths;
  }

  return { years, months, days };
}

export default calculateAge;
