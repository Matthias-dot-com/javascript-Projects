const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const giveawayFormat = document.querySelectorAll(".giveaway-format");
const deadline = document.querySelector(".deadline");

const endDate = new Date(2024, 6, 31, 12, 0, 0);
let Year = endDate.getFullYear();
let month = months[endDate.getMonth()];
let hour = endDate.getHours();
let minute = endDate.getMinutes();
let seconds = endDate.getSeconds();
let date = endDate.getDate();
let day = weekdays[endDate.getDay()];


giveaway.textContent = `Giveaway Ends On ${day}, ${date} ${month} ${Year}, ${hour}:${minute}0am`;
 