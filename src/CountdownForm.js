export function CountdownForm(onSubmit) {
  const input = document.createElement("input");
  input.type = "number";

  const button = document.createElement("button");
  button.innerText = "GO! 😛";

  const form = document.createElement("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    onSubmit(input.value);
  };
  form.append(input, button);
  return form;
}
