const inputs = document.querySelectorAll('.code');

inputs.forEach((input, idx) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value) {
        input.value = '';
      } else if (idx > 0) {
        inputs[idx - 1].focus();
        inputs[idx - 1].value = '';
      }
    }
  });
});
