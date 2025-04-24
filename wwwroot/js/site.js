// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function updatePhilippineTime() {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" });
    const timeText = new Date(now).toLocaleTimeString();

    const desktopClock = document.getElementById("phTime");
    const mobileClock = document.getElementById("phTimeMobile");

    if (desktopClock) desktopClock.textContent = timeText;
    if (mobileClock) mobileClock.textContent = timeText;
}

setInterval(updatePhilippineTime, 1000);
updatePhilippineTime(); // initialize immediately