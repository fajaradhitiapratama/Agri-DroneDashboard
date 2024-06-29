document.addEventListener("DOMContentLoaded", () => {
  const id_alat = "AWS"; // Ganti dengan ID alat yang sesuai
  showInfo(id_alat); // Panggil showInfo untuk menginisialisasi data
});

async function getHistoryWeather(id_alat) {
  try {
    const response = await fetch(
      "https://backend-agridrone.vercel.app/router/tampil_history_weather/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id_alat }),
      }
    );

    // Periksa status respons
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Log untuk melihat data yang diterima
    console.log("Data received:", data);

    return data.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function showWeater() {
  var str = "";
  for (var i = 1; i <= 6; i++) {
    str +=
      "<div class='card'><div class='content_data'> <div class='info_data'> <h3 id='nextDay" +
      i +
      "'></h3> </div> <img src='/assets/sun-solid.svg' /> </div> </div>";
  }

  document.getElementById("tampilWeather").innerHTML = str;
}

async function showInfo(id_alat) {
  try {
    const data_history = await getHistoryWeather(id_alat);

    // Tambahkan log untuk data sejarah
    console.log("Data history:", data_history);

    if (data_history && data_history.length > 0) {
      const latestData = data_history[data_history.length - 1];

      // Tambahkan log untuk data terbaru
      console.log("Latest data:", latestData);

      updateInfo(latestData);
      updateNextDays(data_history);
    } else {
      console.error("No data received");
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

function updateInfo(data) {
  const infoMap = {
    humidity: data.Humid,
    intensity: data.Intensity,
    pressure: data.Pressure,
    rain: data.Rain,
    temp: data.Temp,
    winddir: data.Wind_dir,
    windspeed: data.Wind_speed,
  };

  // Log untuk infoMap
  console.log("Updating info with:", infoMap);

  document.getElementById("humidityData").textContent = infoMap.humidity + " %";
  document.getElementById("intensityData").textContent = infoMap.intensity + " mm/h";
  document.getElementById("pressureData").textContent = infoMap.pressure + " hPa";
  document.getElementById("rainData").textContent = infoMap.rain;
  document.getElementById("tempData").textContent = infoMap.temp + "°C";
  document.getElementById("winddirData").textContent = infoMap.winddir + "°";
  document.getElementById("windspeedData").textContent = infoMap.windspeed + " m/s";
}

// Menjalankan showWeater() pada awal
showWeater();


const cuaca = {
  0: "assets/smog-solid.svg",
  1: "assets/cloud-sun-solid.svg",
  2: "assets/cloud-rain-solid.svg",
  3: "assets/sun-solid.svg"
};

// Fungsi untuk mendapatkan data dari API
async function getCuaca() {
  try {
      const response = await fetch('URL_API_ANDA'); // Ganti dengan URL API Anda
      if (!response.ok) {
          throw new Error('Jaringan bermasalah');
      }
      const data = await response.json();
      
      // Misalkan API mengembalikan objek dengan properti status
      const status = data.status;
      
      // Ganti src dari img dengan id 'cuacaImg' berdasarkan status
      const cuacaImg = document.getElementById('cuacaImg');
      if (cuacaImg && cuaca[status]) {
          cuacaImg.src = cuaca[status];
      } else {
          console.error('Gambar cuaca tidak ditemukan untuk status:', status);
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error);
  }
}

// Panggil fungsi untuk mendapatkan data cuaca dari API
getCuaca();