export function Countdown() {
  const container = document.createElement("div");
  let timeLeft = 3;
  container.innerText = timeLeft;

  const intervalId = setInterval(() => {
    timeLeft--;
    container.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(intervalId);
      alert("Time's over");
    }
  }, 1000);
  return container;
}
