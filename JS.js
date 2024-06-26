const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");
function handleClock() {
  const clock = new Date();
  const hour = clock.getHours();
  const min = clock.getMinutes();
  const sec = clock.getSeconds();

  hourHand.style.transform = `rotate(${90 + hour * 30}deg)`;
  minHand.style.transform = `rotate(${90 + min * 6}deg)`;

  const secDeg = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(handleClock, 1000);
