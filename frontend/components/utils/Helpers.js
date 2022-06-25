import moment from "moment";
moment().format();

export const newAmount = (amount) => {
  if (amount === 0) {
    return "Free";
  } else return "Fee: " + amount + " matic";
};

export const daysFn = (eventDate) => {
  const getDays = moment(eventDate).diff(moment(), "days");
  if (getDays < 0) {
    return "ended";
  } else {
    return getDays + " days left";
  }
};
