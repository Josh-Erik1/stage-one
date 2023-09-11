"use strict";

const dayOfTheWeekElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

function updateUTCTime() {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
  });

  const day = String(currentDate.getUTCDate()).padStart(2, "0");
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, "0");
  const year = currentDate.getUTCFullYear();
  const hours = String(currentDate.getUTCHours()).padStart(2, "0");
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(currentDate.getUTCMilliseconds()).padStart(
    2,
    "0"
  );

  const formattedUTCDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${milliseconds}`;

  // Update the elements
  dayOfTheWeekElement.textContent = currentDayOfWeek;
  utcTimeElement.textContent = formattedUTCDateTime;
}

updateUTCTime();

setInterval(updateUTCTime, 1000);
