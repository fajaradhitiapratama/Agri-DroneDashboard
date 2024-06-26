var data_soil;
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
  return data.data.data;
}

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
      nitrogen: { min: 201, max: 300 },
      phosphorous: { min: 13, max: 300 },
      potassium: { min: 156, max: 300 },
      ph: { min: 7.6, max: 14 },
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

var markers = [];

// Fungsi untuk menambahkan marker
function addMarker(data) {
  var marker = tambahkanMarker(data);
  markers.push(marker);
}

// Fungsi untuk menghapus semua marker
function removeMarkers() {
  markers.forEach((marker) => {
    map.removeLayer(marker);
  });
  markers = [];
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
