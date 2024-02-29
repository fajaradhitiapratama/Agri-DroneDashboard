//this for real time date
function updateDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
    document.getElementById('date').textContent = formattedDate;
  }
  updateDate();
  setInterval(updateDate, 1000);

//this for real time clock
function updateClocks() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var formattedTime = hours + ':' + minutes + ' ' + ampm;

  // Update the time for each card
  var realtimeElements = document.querySelectorAll('.realtime');
  realtimeElements.forEach(function(element) {
    element.textContent = formattedTime;
  });
}

// Call updateClocks initially to set the time
updateClocks();

// Update the time every second
setInterval(updateClocks, 1000);
