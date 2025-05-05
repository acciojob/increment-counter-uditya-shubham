//your JS code here. If required.
const counter = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    incrementBtn.addEventListener("click", function () {
      const currentCount = parseInt(counter.textContent);
      alert(`${currentCount}`);
      counter.textContent = currentCount + 1;
    });