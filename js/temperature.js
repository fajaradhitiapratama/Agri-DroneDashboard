const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,0,1.0)",
        borderColor: "rgba(255,0,0,0.5)",
        data: yValues,
        borderWidth:5,
        borderDash: [1, 2]
      },
    ],
  },
  options: {
    legend: { display: false },
    title:{
        display: true,
        text: "Weather Station (Temperature Sensors)"
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Temperature (C)",
          },
          ticks: { min: 6, max: 16 },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Time (Hour)",
          },
        },
      ],
    },
  },
});

function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return day + '/' + month + '/' + year;
}

function updateCalendar() {
    document.getElementById('tglsekarang').value = getCurrentDate();
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
