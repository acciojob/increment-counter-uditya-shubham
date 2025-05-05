//your JS code here. If required.
 const counterEl = document.getElementById("counter");
    const button = document.getElementById("incrementBtn");

    button.addEventListener("click", () => {
      const currentValue = parseInt(counterEl.textContent);
      alert(`Current value before increment: ${currentValue}`);
      counterEl.textContent = currentValue + 1;
    });