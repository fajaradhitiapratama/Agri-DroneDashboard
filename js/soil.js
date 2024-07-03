tampilSoil();
var data_soil;

async function tampilSoil() {
  data_soil = await getDataSoil();

  var silede = Object.keys(data_soil);
  var str = '<ul id="infoList">';
  var count = 1;

  silede.forEach(function (slide, index) {
    str +=
      '<li id="' +
      slide +
      '" class="' +
      (index === 1 ? "active" : "") +
      '" onclick="showInfo(\'' +
      slide +
      "')\"> Soil Test " +
      count +
      "</li>";
    count++;
  });

  str += "</ul>";
  document.getElementById("TampilSoil").innerHTML = str;
  if (silede.length > 0) {
    showInfo(silede[1]);
  }
}

async function getDataSoil() {
  const response = await fetch(
    "https://backend-agridrone.vercel.app/router/tampil_soil/"
  );
  const data = await response.json();
  return data.data;
}

async function getHistorySoil(id_alat) {
  const response = await fetch(
    "https://backend-agridrone.vercel.app/router/tampil_history_soil/",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id_alat }),
    }
  );
  const data = await response.json();
  console.log(data)
  return data.data.data;
}

function categorizeValues(nitrogen, phosphorous, potassium, ph, moisture) {
  const categories = {
    poor: {
      nitrogen: { min: 0, max: 149 },
      phosphorous: { min: 0, max: 5 },
      potassium: { min: 0, max: 64 },
      ph: { min: 0, max: 5 },
      moisture: { min: 0, max: 19 },
    },
    moderate: {
      nitrogen: { min: 150, max: 200 },
      phosphorous: { min: 6, max: 12 },
      potassium: { min: 65, max: 155 },
      ph: { min: 6, max: 7.5 },
      moisture: { min: 20, max: 60 },
    },
    good: {
      nitrogen: { min: 201, max: 412 },
      phosphorous: { min: 13, max: 39 },
      potassium: { min: 156, max: 270 },
      ph: { min: 7.6, max: 10 },
      moisture: { min: 61, max: 100 },
    },
  };

  let scores = {
    poor: 0,
    moderate: 0,
    good: 0,
  };

  for (const category in categories) {
    let nitrogenRange = categories[category].nitrogen;
    let phosphorousRange = categories[category].phosphorous;
    let potassiumRange = categories[category].potassium;
    let phRange = categories[category].ph;
    let moistureRange = categories[category].moisture;

    let nitrogenMembership = fuzzyMembership(
      nitrogen,
      nitrogenRange.min,
      nitrogenRange.max
    );
    let phosphorousMembership = fuzzyMembership(
      phosphorous,
      phosphorousRange.min,
      phosphorousRange.max
    );
    let potassiumMembership = fuzzyMembership(
      potassium,
      potassiumRange.min,
      potassiumRange.max
    );
    let phMembership = fuzzyMembership(ph, phRange.min, phRange.max);
    let moistureMembership = fuzzyMembership(
      moisture,
      moistureRange.min,
      moistureRange.max
    );

    scores[category] +=
      (nitrogenMembership +
        phosphorousMembership +
        potassiumMembership +
        phMembership +
        moistureMembership) /
      5;
  }

  // Fungsi logika Fuzzy
  function fuzzyMembership(value, min, max) {
    if (value <= min || value >= max) {
      return 0;
    }
    let mid = (min + max) / 2;
    if (value <= mid) {
      return (value - min) / (mid - min);
    } else {
      return (max - value) / (max - mid);
    }
  }

  let maxScore = -1;
  let chosenCategory = "unknown";

  for (const category in scores) {
    if (scores[category] > maxScore) {
      maxScore = scores[category];
      chosenCategory = category;
    }
  }

  return chosenCategory;
}

// Variabel global untuk menyimpan marker untuk setiap jenis tanah
var markers = {
  soil1: null,
  soil2: null,
  soil3: null,
};

// Fungsi untuk menambahkan marker untuk tanah1
function addMarkerSoil1(data) {
  removeMarkers();
  markers.soil1 = tambahkanMarker(data);
}

// Fungsi untuk menambahkan marker untuk tanah2
function addMarkerSoil2(data) {
  removeMarkers();
  markers.soil2 = tambahkanMarker(data);
}

// Fungsi untuk menambahkan marker untuk tanah3
function addMarkerSoil3(data) {
  removeMarkers();
  markers.soil3 = tambahkanMarker(data);
}

// Fungsi untuk menghapus marker untuk semua jenis tanah
function removeMarkers() {
  if (markers.soil1) {
    map.removeLayer(markers.soil1);
    markers.soil1 = null;
  }
  if (markers.soil2) {
    map.removeLayer(markers.soil2);
    markers.soil2 = null;
  }
  if (markers.soil3) {
    map.removeLayer(markers.soil3);
    markers.soil3 = null;
  }
}

// Fungsi untuk menambahkan marker dengan popup
function tambahkanMarker(data) {
  // Tentukan kategori tanah menggunakan logika Fuzzy
  const category = categorizeValues(
    data.n,
    data.p,
    data.k,
    data.ph,
    data.moisture
  );

  // Tentukan warna ikon berdasarkan kategori tanah
  var iconColor;
  if (category === "poor") {
    iconColor = "red";
  } else if (category === "moderate") {
    iconColor = "yellow";
  } else {
    iconColor = "green";
  }

  // Buat marker dengan popup
  var marker = L.marker([data.LAT, data.LONG], {
    icon: L.divIcon({
      className: "custom-icon " + iconColor,
      iconSize: [15, 15],
    }),
  })
    .bindPopup(
      `
  <b>Alat ${data.alat}</b><br>
  N: ${data.n}<br>
  P: ${data.p}<br>
  K: ${data.k}<br>
  pH: ${data.ph}<br>
  Moisture: ${data.moisture}`
    )
    .addTo(map);

  // Kembalikan marker yang dibuat
  return marker;
}

// Fungsi untuk mengatur class aktif pada item daftar yang diklik
function setActiveClass(type) {
  const infoListItem = document.querySelectorAll("#infoList li");
  infoListItem.forEach((item) => item.classList.remove("active"));

  const clickedItem = document.getElementById(type);
  clickedItem.classList.add("active");
}

// ganti nilai
async function showInfo(type) {
  var data_history = await getHistorySoil(type);
  console.log(type);
  data_history = data_history[data_history.length - 1];
  

  setActiveClass(type); // Set class active

  var alat = {
    alat: data_soil[type].jenis_iot,
    LAT: data_soil[type].lat,
    LONG: data_soil[type].long,
    n: data_history.N,
    p: data_history.P,
    k: data_history.K,
    ph: data_history.PH,
    moisture: data_history.mosit,
  };
  document.getElementById("infoMoisture").textContent = alat.moisture + " %";
  document.getElementById("infopH").textContent = alat.ph;
  document.getElementById("infoN").textContent = alat.n;
  document.getElementById("infoP").textContent = alat.p;
  document.getElementById("infoK").textContent = alat.k;
  document.getElementById("coordinateLat").textContent = alat.LAT;
  document.getElementById("coordinateLong").textContent = alat.LONG;
  const currentDate = new Date();
  const formattedTimestamp = currentDate.toISOString();
  console.log("Current Timestamp (ISO format):", formattedTimestamp);

  addMarkerSoil1(alat);

  map.setView([alat.LAT, alat.LONG], 18);
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

// pop up data
function myFunction(event) {
  var popup = event.currentTarget.querySelector(".popuptext");
  popup.classList.toggle("show");
}

// pop up map
function movemap() {
  window.location.href = "/html/map_ta.html";
}
