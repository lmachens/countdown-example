export function Countdown() {
  const container = document.createElement("div");
  let timeLeft = 200;
  container.innerText = timeLeft;

  setInterval(() => {
    timeLeft--;
    container.innerText = timeLeft;
  }, 1000);
  return container;
}
