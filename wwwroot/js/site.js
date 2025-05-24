// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const phTime = now.toLocaleTimeString('en-US', options);
    document.getElementById("phTime").innerText = phTime;
    document.getElementById("phTimeMobile").innerText = phTime;
}
setInterval(updateTime, 1000);
updateTime();

