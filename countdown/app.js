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
const giveawayFormat = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");
const tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
console.log(tempDay,tempYear,tempMonth)
// const endDate = new Date(2024, 6, 19, 11, 59, 0);
const endDate = new Date(tempYear,tempMonth,tempDay+10,11,59,0)
let Year = endDate.getFullYear();
let month = months[endDate.getMonth()];
let hour = endDate.getHours();
let minute = endDate.getMinutes();
let seconds = endDate.getSeconds();
let date = endDate.getDate();
let day = weekdays[endDate.getDay()];

giveaway.textContent = `Giveaway Ends On ${day}, ${date} ${month} ${Year}, ${hour}:${minute}am`;

let futureTime = endDate.getTime();

function getRemainingTime() {
  let today = new Date().getTime();
  let difference = futureTime - today;
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;
  let oneSecond = 1000;

  let day = Math.floor(difference / oneDay);
  let hour = Math.floor((difference % oneDay) / oneHour);
  let minute = Math.floor((difference % oneHour) / oneMinute);
  let seconds = Math.floor((difference % oneMinute) / oneSecond);

  let values = [day, hour, minute, seconds];
  // const className = value.firstElementChild.getElementsByTagName("span")[0].innerHTML
  // value.firstElementChild.getElementsByClassName(className)[0].innerHTML = values[index]
  giveawayFormat.forEach((value, index) => {
    value.innerHTML = format(values[index]);

    function format(item) {
      return item < 10 ? `0${item}` : item;
      //  if (item < 10){
      //   return `0${item}`
      //  }return item
    }
  });
  difference < 0 ? deadline.innerHTML = `<h4 class="expired" style="color:red">Sorry, this giveaway has expired</h4>`: difference
}
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
