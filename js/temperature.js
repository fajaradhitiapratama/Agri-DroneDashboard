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
      fontSize: 25,
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
            fontSize: 20,
            fontStyle: "italic",
            fontColor: "black",
          },
          ticks: {
            min: 0,
            max: 35,
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
            fontSize: 20,
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


function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();
  return day + "/" + month + "/" + year;
}

function updateCalendar() {
  document.getElementById("tglsekarang").value = getCurrentDate();
}

// Panggil updateCalendar setiap detik untuk memperbarui tampilan tanggal secara real-time
setInterval(updateCalendar, 1000);

// Panggil updateCalendar untuk memperbarui tampilan tanggal saat halaman dimuat
updateCalendar();

//ml => api
// const apiUrl = "URL_API_MODEL_ML"; // Ganti dengan URL API model machine learning Anda

// // Fungsi untuk membuat permintaan ke API dan mendapatkan prediksi
// async function fetchPredictions() {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data.predictions; // Misalkan API mengembalikan prediksi dalam bentuk array
//   } catch (error) {
//     console.error("Error fetching predictions:", error);
//     return [];
//   }
// }

// // Inisialisasi chart setelah mendapatkan prediksi dari API
// async function initializeChart() {
//   const predictions = await fetchPredictions();
//   const xValues = predictions.map((_, i) => i + 1); // Contoh: 1, 2, 3, ...
//   const yValues = predictions;

//   new Chart("myChart", {
//     type: "line",
//     data: {
//       labels: xValues,
//       datasets: [
//         {
//           fill: false,
//           lineTension: 0,
//           backgroundColor: "rgba(0,0,255,1.0)",
//           borderColor: "rgba(0,0,255,0.1)",
//           data: yValues,
//         },
//       ],
//     },
//     options: {
//       legend: { display: false },
//       scales: {
//         yAxes: [
//           {
//             scaleLabel: {
//               display: true,
//               labelString: "Temperature (C)",
//             },
//           },
//         ],
//         xAxes: [
//           {
//             scaleLabel: {
//               display: true,
//               labelString: "Time (minutes)",
//             },
//           },
//         ],
//       },
//     },
//   });
// }

// // Panggil fungsi untuk inisialisasi chart setelah halaman dimuat
// initializeChart();
