document
  .getElementById("weatherLink")
  .addEventListener("click", function (event) {
    // Check if the link has already been clicked
    if (this.classList.contains("disabled")) {
      // Prevent default if the link is already disabled
      event.preventDefault();
    } else {
      // Add a class to signify the link is disabled
      this.classList.add("disabled");

      // Optionally, add a visual cue that the link is disabled
      this.style.pointerEvents = "none";
      this.style.opacity = "0.5";
    }
  });

document.getElementById("soilLink").addEventListener("click", function (event) {
  // Check if the link has already been clicked
  if (this.classList.contains("disabled")) {
    // Prevent default if the link is already disabled
    event.preventDefault();
  } else {
    // Add a class to signify the link is disabled
    this.classList.add("disabled");

    // Optionally, add a visual cue that the link is disabled
    this.style.pointerEvents = "none";
    this.style.opacity = "0.5";
  }
});

document.getElementById("us").addEventListener("click", function (event) {
  // Check if the link has already been clicked
  if (this.classList.contains("disabled")) {
    // Prevent default if the link is already disabled
    event.preventDefault();
  } else {
    // Add a class to signify the link is disabled
    this.classList.add("disabled");

    // Optionally, add a visual cue that the link is disabled
    this.style.pointerEvents = "none";
    this.style.opacity = "0.5";
  }
});

//this for real time date
function updateDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var formattedDate =
    (day < 10 ? "0" : "") +
    day +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    year;
  document.getElementById("date").textContent = formattedDate;
}
updateDate();
setInterval(updateDate, 1000);

//this for real time clock
function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedTime = hours + ":" + minutes + " " + ampm;
  document.getElementById("realtime").textContent = formattedTime;
}
updateClock();
