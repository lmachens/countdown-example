import "./app.css";
import { Countdown } from "./Countdown";
import { CountdownForm } from "./CountdownForm";

export function App() {
  const countdown = Countdown();
  function onSubmit(value) {
    countdown.innerText = value;
    const intervalId = setInterval(() => {
      if (countdown.innerText === "0") {
        clearInterval(intervalId);
      } else {
        countdown.innerText = countdown.innerText - 1;
      }
    }, 1000);
  }
  const countdownForm = CountdownForm(onSubmit);
  const app = document.createElement("div");
  app.className = "app";

  app.append(countdownForm, countdown);
  return app;
}
