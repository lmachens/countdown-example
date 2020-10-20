export function Countdown() {
  const container = document.createElement("div");
  container.innerText = "0";

  const intervalId = setInterval(() => {
    if (container.innerText === "0") {
      clearInterval(intervalId);
    } else {
      container.innerText = container.innerText - 1;
    }
  }, 1000);
  return container;
}
