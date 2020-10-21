import "./app.css";
import { Countdown } from "./Countdown";
import { CountdownForm } from "./CountdownForm";

export function App() {
  const app = document.createElement("div");
  app.className = "app";

  const countdownForm = CountdownForm((value) => {
    app.append(Countdown(value));
  });

  app.append(countdownForm);
  return app;
}
