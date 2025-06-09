const inputs = document.querySelectorAll(".code");

inputs[0].focus(); // focus first input on page load

inputs.forEach((input, idx) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.match(/^[0-9]$/)) {
      if (idx < inputs.length - 1) {
        inputs[idx + 1].focus();
      }
    } else {
      e.target.value = ""; // allow only digits
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (idx > 0) {
          inputs[idx - 1].focus();
          inputs[idx - 1].value = "";
        }
      }
    }
  });
});
