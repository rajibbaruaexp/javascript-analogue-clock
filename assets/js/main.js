const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

function setClock() {
  const currentDate = new Date();

  const theSecond = currentDate.getSeconds();
  const theMinute = currentDate.getMinutes();
  const theHour = currentDate.getHours();

  const secondRatio = theSecond / 60;
  const minuteRatio = (secondRatio + theMinute) / 60;
  const hourRatio = (minuteRatio + theHour) / 12;

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(elem, rotationRatio) {
  elem.style.setProperty("--rotation", rotationRatio * 360);
}

setInterval(setClock, 1000);
setClock();

// function calc(x, y) {
//   return x + y;
// }
// console.log(calc(1, 7));
