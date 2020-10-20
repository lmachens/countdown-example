import "./app.css";
import { Countdown } from "./Countdown";
import { CountdownForm } from "./CountdownForm";

export function App() {
  const countdown = Countdown();
  function onSubmit(value) {
    countdown.innerText = value;
    console.log(value);
  }
  const countdownForm = CountdownForm(onSubmit);
  const app = document.createElement("div");
  app.className = "app";

  app.append(countdownForm, countdown);
  return app;
}
