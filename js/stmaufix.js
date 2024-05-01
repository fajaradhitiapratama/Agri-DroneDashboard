// change value
function showInfo(type) {
  const infoListItem = document.querySelectorAll("#infoList li");
  infoListItem.forEach((item) => item.classList.remove("active"));

  const clickedItem = document.getElementById(type);
  clickedItem.classList.add("active");

  const infoLat = document.getElementById("coordinateLat");
  const infoLong = document.getElementById("coordinateLong");
  const data1 = document.getElementById("emoji-data1");
  const data2 = document.getElementById("emoji-data2");
  const data3 = document.getElementById("emoji-data3");

  if (type === "soil1") {
    infoLat.textContent = "__";
    infoLong.textContent = "__";
    data1.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> > 26°C </span> <span>High</span>';
    data2.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> 24°C - 26°C </span> <span>Normal</span>';
    data3.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> < 24°C </span> <span>Low</span>';

    //update data
    var data = {
      Moisture:"asdas",
      PH:"45"
    }
    const Moisture = data.Moisture;
    document.getElementById("infoValue").textContent = Moisture + " %";
    const emojiElement = document.querySelector(".emoji-berubah");
    function updateEmojiClass(Moisture, pH, ) {
      if (Moisture < 24) {
        emojiElement.classList.remove("fa-regular", "fa-face-smile");
        emojiElement.classList.add("fa-regular", "fa-face-sad-cry");
        emojiElement.style.color = "#c2a346";
      } else if (Moisture > 26) {
        emojiElement.classList.remove("fa-regular", "fa-face-smile");
        emojiElement.classList.add("fa-regular", "fa-face-tired");
        emojiElement.style.color = "#D24545";
      } else {
        emojiElement.classList.remove(
          "fa-regular",
          "fa-face-sad-cry",
          "fa-face-tired"
        );
        emojiElement.classList.add("fa-regular", "fa-face-smile");
        emojiElement.style.color = "#337357";
      }
    }
    updateEmojiClass(Moisture);
    
  } else if (type === "rainfall") {
    icon.className = "fa-solid fa-cloud-rain";
    infoValue.textContent = "__ mm";
    data1.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase">> 8 mm </span> <span>High</span>';
    data2.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> 2 mm - 8 mm </span> <span>Normal</span>';
    data3.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> < 2 mm </span> <span>Low</span>';
    // chart
    const HourTime = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const DataRain = [2, 2, 3, 2, 2, 3, 4, 4, 5, 2, 1, 2, 2];

    // Create canvas element
    const canvas = document.createElement("canvas");
    canvas.id = "myChart";
    canvas.style.width = "100%";
    canvas.style.maxWidth = "400px";

    if (rainfallChart) {
      rainfallChart.destroy();
    }

    // Append canvas to chart-wrapper
    const chartWrapper = document.querySelector(".chart-wrapper");
    chartWrapper.innerHTML = '';
    chartWrapper.appendChild(canvas);

    // Create chart
    rainfallChart = new Chart("myChart", {
      type: "line",
      data: {
        labels: HourTime,
        datasets: [
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,1.0)",
            borderColor: "rgba(0,0,0,0.5)",
            data: DataRain,
            borderWidth: 5,
            borderDash: [5, 2],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Weather Station (Rainfall Sensors)",
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
                labelString: "Rainfall (mm)",
                fontFamily: "Poppins",
                fontSize: 8,
                fontStyle: "italic",
                fontColor: "black",
              },
              ticks: {
                min: 0,
                max: 9,
                fontColor: "black",
                callback: function (value) {
                  return value + " mm";
                },
              },
              gridLines: {
                color: "rgba(0, 0, 0, 1)",
                lineWidth: 1,
                borderDash: [3, 3],
              },
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
                color: "rgba(0, 0, 0, 1)",
                lineWidth: 1,
                borderDash: [3, 3],
              },
              ticks: {
                fontColor: "black",
                callback: function (value, index) {
                  if (value >= 6 && value <= 11) {
                    return value + " a.m.";
                  } else if (value == 12) {
                    return value + " p.m.";
                  } else {
                    return value - 12 + " p.m.";
                  }
                },
              },
            },
          ],
        },
      },
    });

    //update data
    const rainFall = 4;
    document.getElementById("infoValue").textContent = rainFall + " mm";
    const emojiElement = document.querySelector(".emoji-berubah");
    function updateEmojiClass(rainFall) {
      if (rainFall < 2) {
        emojiElement.classList.remove("fa-regular", "fa-face-smile");
        emojiElement.classList.add("fa-regular", "fa-face-sad-cry");
        emojiElement.style.color = "#c2a346";
      } else if (rainFall > 8) {
        emojiElement.classList.remove("fa-regular", "fa-face-smile");
        emojiElement.classList.add("fa-regular", "fa-face-tired");
        emojiElement.style.color = "#D24545";
      } else {
        emojiElement.classList.remove(
          "fa-regular",
          "fa-face-sad-cry",
          "fa-face-tired"
        );
        emojiElement.classList.add("fa-regular", "fa-face-smile");
        emojiElement.style.color = "#337357";
      }
    }
    updateEmojiClass(rainFall);
  } else if (type === "windSpeed") {
    icon.className = "fa-solid fa-fan";
    infoValue.textContent = "__ m/s";
    infoValue.style.textTransform = "lowercase";
    data1.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase">> 9 m/s </span> <span>High</span>';
    data2.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> 4 m/s - 9 m/s </span> <span>Normal</span>';
    data3.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> < 4 m/s </span> <span>Low</span>';
    // chart
    // chart
    const HourTime = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const DataWinds = [4, 4, 5, 3, 2, 2, 2, 4, 7, 5, 6, 4, 4];

    // Create canvas element
    const canvas = document.createElement("canvas");
    canvas.id = "myChart";
    canvas.style.width = "100%";
    canvas.style.maxWidth = "400px";

    if (windspeedChart) {
      windspeedChart.destroy();
    }

    // Append canvas to chart-wrapper
    const chartWrapper = document.querySelector(".chart-wrapper");
    chartWrapper.innerHTML = '';
    chartWrapper.appendChild(canvas);

    // Create chart
    windspeedChart = new Chart("myChart", {
      type: "line",
      data: {
        labels: HourTime,
        datasets: [
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,1.0)",
            borderColor: "rgba(0,0,0,0.5)",
            data: DataWinds,
            borderWidth: 5,
            borderDash: [5, 2],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Weather Station (WindSpeed Sensors)",
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
                labelString: "WindSpeed (m/s)",
                fontFamily: "Poppins",
                fontSize: 8,
                fontStyle: "italic",
                fontColor: "black",
              },
              ticks: {
                min: 0,
                max: 7,
                fontColor: "black",
                callback: function (value) {
                  return value + " m/s";
                },
              },
              gridLines: {
                color: "rgba(0, 0, 0, 1)",
                lineWidth: 1,
                borderDash: [3, 3],
              },
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
                color: "rgba(0, 0, 0, 1)",
                lineWidth: 1,
                borderDash: [3, 3],
              },
              ticks: {
                fontColor: "black",
                callback: function (value, index) {
                  if (value >= 6 && value <= 11) {
                    return value + " a.m.";
                  } else if (value == 12) {
                    return value + " p.m.";
                  } else {
                    return value - 12 + " p.m.";
                  }
                },
              },
            },
          ],
        },
      },
    });
    //update data
    const windspeed = 20;
    document.getElementById("infoValue").textContent = windspeed + " m/s";
    const emojiElement = document.querySelector(".emoji-berubah");
    function updateEmojiClass(windspeed) {
      if (windspeed < 4) {
        emojiElement.classList.remove("fa-regular", "fa-face-smile");
        emojiElement.classList.add("fa-regular", "fa-face-sad-cry");
        emojiElement.style.color = "#c2a346";
      } else if (windspeed > 9) {
        emojiElement.classList.remove("fa-regular", "fa-face-smile");
        emojiElement.classList.add("fa-regular", "fa-face-tired");
        emojiElement.style.color = "#D24545";
      } else {
        emojiElement.classList.remove(
          "fa-regular",
          "fa-face-sad-cry",
          "fa-face-tired"
        );
        emojiElement.classList.add("fa-regular", "fa-face-smile");
        emojiElement.style.color = "#337357";
      }
    }
    updateEmojiClass(windspeed);
  } else if (type === "windDirection") {
    icon.className = "fa-solid fa-wind";
    infoValue.textContent = "__";
    data1.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>High</span>';
    data2.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>Normal</span>';
    data3.innerHTML =
      '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>Low</span>';
  }
}

// navbar
function toggleActiveClass(element) {
  var myList = document.getElementById("myList");
  var listItems = myList.getElementsByTagName("li");

  // Menonaktifkan class "active" dari semua elemen <li>
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].getElementsByTagName("a")[0].classList.remove("active");
  }

  // Mengaktifkan class "active" pada elemen yang diklik
  element.classList.add("active");
}
