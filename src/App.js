import "./app.css";
import { Countdown } from "./Countdown";

export function App() {
  const app = document.createElement("div");
  app.className = "app";
  const countdown = Countdown();

  app.innerHTML = "<b>Awesome</b> Webpack Template!";
  app.append(countdown);
  return app;
}
