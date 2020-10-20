export function Countdown(timeLeft) {
  const container = document.createElement("div");
  container.innerText = timeLeft;

  const intervalId = setInterval(() => {
    timeLeft--;
    container.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
  return container;
}
