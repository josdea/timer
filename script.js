function timerPrompt() {
  let t = "10:00";
  t = prompt(
    "Please enter countdown time. Refresh the page to start again. (ex. '10:00') [Created by Josh Dean 2020]",
    t
  );
  let intMinutes = t.replace(/(\d?\d):(\d\d)/g, "$1");
  let intSeconds = t.replace(/(\d?\d):(\d\d)/g, "$2");
  return intMinutes * 60 * 1000 + intSeconds * 1000;
}

var vid = document.getElementById("myVideo");
timer = timerPrompt();
document.getElementById("message").innerHTML = prompt(
  "Initial onscreeen message. You can change this at any point by clicking it and typing new text.",
  "Welcome. Please mute your microphone until you're ready to speak."
);
var endTime = new Date();
endTime.setTime(new Date().getTime() + timer);

function countdownTimer() {
  difference = +new Date(endTime) - +new Date();
  let remaining = "";

  var now = new Date().getTime();
  if (difference > 0) {
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
    remaining =
      // (parts.hours + "").padStart(2, "0") +
      // ":" +
      (parts.minutes + "").padStart(2, "0") +
      ":" +
      (parts.seconds + "").padStart(2, "0");
  }
  document.getElementById("countdown").innerHTML = remaining;
}

countdownTimer();
setInterval(countdownTimer, 1000);
// TODO preload video and prompt after loading
// numbers are clickable to restart or update time
// use bootstrap modals instead of alert prompts


