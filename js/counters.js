const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Делаем расчеты

const futureDate = new Date("September 21 2023 07:00:00");

function updateCounter() {
  const currentDate = new Date();
  const diff = futureDate - currentDate;

  // Convert to days
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // convert hours
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  // convert minutes
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  //convert seconds
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

//запускаем расчет 1 раз в секунду
setInterval(updateCounter, 1000);
