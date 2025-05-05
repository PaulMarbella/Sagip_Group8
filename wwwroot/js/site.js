// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function updatePhilippineTime() {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" });
    const date = new Date(now);

    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const time = date.toLocaleTimeString('en-US', { hour12: true });

    const dateTimeText = `${day} ${time}`;

    const desktopClock = document.getElementById("phTime");
    const mobileClock = document.getElementById("phTimeMobile");

    if (desktopClock) desktopClock.textContent = dateTimeText;
    if (mobileClock) mobileClock.textContent = dateTimeText;
}

setInterval(updatePhilippineTime, 1000);
updatePhilippineTime(); // run immediately

