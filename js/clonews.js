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


// day update
var currentDate = new Date();
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayOfWeek = currentDate.getDay();
document.getElementById('dayOfWeek').textContent = weekdays[dayOfWeek];
var daysUntilWednesday = [];

for (var i = 1; i <= 6; i++) {
    var nextDayIndex = (dayOfWeek + i) % 7;
    daysUntilWednesday.push(weekdays[nextDayIndex]);
}

for (var i = 0; i < daysUntilWednesday.length; i++) {
    document.getElementById('nextDay' + (i + 1)).textContent = daysUntilWednesday[i];
}


//chart wind
const xValues = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let yValues = [22, 24, 24, 25, 27, 30, 33, 32, 31, 29, 27, 26, 25]; 

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,0,1.0)",
        borderColor: "rgba(0,0,0,0.5)",
        data: yValues,
        borderWidth: 5,
        borderDash: [5, 2],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Weather Station (Temperature Sensors)",
      fontFamily: "Poppins",
      fontSize: 8,
      fontStyle: "italic",
      fontColor: "black",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Temperature (C)",
            fontFamily: "Poppins",
            fontSize: 8,
            fontStyle: "italic",
            fontColor: "black",
          },
          ticks: {
            min: 22,
            max: 34,
            fontColor: "black",
            callback: function(value) {
              return value + "°C";
            },
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 1)',
            lineWidth: 1,
            borderDash: [3, 3],
          }
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Time (Hour)",
            fontFamily: "Poppins",
            fontSize: 8,
            fontStyle: "italic",
            fontColor: "black",
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 1)',
            lineWidth: 1,
            borderDash: [3, 3],
          },
          ticks: {
            fontColor: "black",
            callback: function(value, index) {
              if (value >= 6 && value <= 11) {
                return value + " a.m.";
              } else if (value == 12){
                return (value) + " p.m.";
              }
              else{
                return (value - 12) + " p.m."
              }
            },
          },
        },
      ],
    },
  },
});

// temperature call api
function fetchDataAndUpdateDOM() {
  // Ambil data dari API (disimulasikan)
  setTimeout(() => {
    const temperature = 27; // Suhu 22 derajat Celsius

    document.getElementById('windSpeed').textContent = temperature + ' °C';

    // Perbarui emoji berdasarkan nilai suhu
    const emojiElement = document.querySelector('.emoji-berubah');

// Fungsi untuk mengubah kelas emoji sesuai dengan nilai suhu
function updateEmojiClass(temperature) {
  if (temperature < 24) {
    emojiElement.classList.remove('fa-regular', 'fa-face-smile');
    emojiElement.classList.add('fa-regular', 'fa-face-sad-cry');
    emojiElement.style.color = '#c2a346;';
  } else if (temperature > 26) {
    emojiElement.classList.remove('fa-regular', 'fa-face-smile');
    emojiElement.classList.add('fa-regular', 'fa-face-tired');
    emojiElement.style.color = '#D24545';
  } else {
    emojiElement.classList.remove('fa-regular', 'fa-face-sad-cry', 'fa-face-tired');
    emojiElement.classList.add('fa-regular', 'fa-face-smile');
    emojiElement.style.color = '#337357';
  }
}

// Memanggil fungsi untuk pertama kalinya
updateEmojiClass(temperature);
  }, 1000); // Simulasikan pengambilan data setelah 2 detik
}

// Panggil fetchDataAndUpdateDOM() untuk menguji suhu 22 derajat
fetchDataAndUpdateDOM();

