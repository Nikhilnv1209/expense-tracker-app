const formate_date = (date) => {
  const formate_date = new Date(date);
  let month = `${formate_date.getMonth() + 1}`;
  let day = `${formate_date.getDate()}`;
  let year = formate_date.getFullYear();

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year,month,day].join("-");
};

export default formate_date;
