import "./app.css";

export function App() {
  const app = document.createElement("div");
  app.className = "app";
  app.innerHTML = "<b>Awesome</b> Webpack Template!";
  return app;
}
