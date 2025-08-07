function startBreathing() {
  const circle = document.getElementById('circle');
  const statusText = document.getElementById('statusText');
  let time = 0;

  statusText.innerText = "Breathe in...";
  circle.style.transform = "scale(1.5)";

  const interval = setInterval(() => {
    time += 4;

    if (time % 8 === 0) {
      statusText.innerText = "Breathe in...";
      circle.style.transform = "scale(1.5)";
    } else {
      statusText.innerText = "Breathe out...";
      circle.style.transform = "scale(1)";
    }

    if (time >= 60) {
      clearInterval(interval);
      statusText.innerText = "Session complete! 🧘‍♂️";
      circle.style.transform = "scale(1)";
    }
  }, 4000);
}