function updateUTCTime() {
  const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const now = new Date();
  timeElement.textContent = `${now.toUTCString()}`;
}

setInterval(updateUTCTime, 1000);

updateUTCTime();
