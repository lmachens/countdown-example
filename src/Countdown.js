export function Countdown() {
  const container = document.createElement("div");
  container.textContent = "100";

  let timeLeft = 100;
  setInterval(() => {
    timeLeft--;
    console.log(timeLeft);
  }, 1000);
  return container;
}
