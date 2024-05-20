// Fuzzy Logic Function
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
      'poor': {
          nitrogen: { min: 0, max: 150 },
          phosphorous: { min: 160, max: 200 },
          potassium: { min: 200, max: 250 },
          ph: { min: 0, max: 6 },
          moisture: { min: 0, max: 20 }
      },
      'moderate': {
          nitrogen: { min: 151, max: 200 },
          phosphorous: { min: 201, max: 350 },
          potassium: { min: 251, max: 400 },
          ph: { min: 6, max: 7.5 },
          moisture: { min: 20, max: 60 }
      },
      'good': {
          nitrogen: { min: 201, max: 250 },
          phosphorous: { min: 351, max: 500 },
          potassium: { min: 401, max: 600 },
          ph: { min: 7.5, max: 14 },
          moisture: { min: 61, max: 80 }
      }
  };

  let scores = {
      'poor': 0,
      'moderate': 0,
      'good': 0
  };

  for (const category in categories) {
      let nitrogenRange = categories[category].nitrogen;
      let phosphorousRange = categories[category].phosphorous;
      let potassiumRange = categories[category].potassium;
      let phRange = categories[category].ph;
      let moistureRange = categories[category].moisture;

      let nitrogenMembership = fuzzyMembership(nitrogen, nitrogenRange.min, nitrogenRange.max);
      let phosphorousMembership = fuzzyMembership(phosphorous, phosphorousRange.min, phosphorousRange.max);
      let potassiumMembership = fuzzyMembership(potassium, potassiumRange.min, potassiumRange.max);
      let phMembership = fuzzyMembership(ph, phRange.min, phRange.max);
      let moistureMembership = fuzzyMembership(moisture, moistureRange.min, moistureRange.max);

      scores[category] += (nitrogenMembership + phosphorousMembership + potassiumMembership + phMembership + moistureMembership) / 5;
  }

  let maxScore = -1;
  let chosenCategory = 'unknown';

  for (const category in scores) {
      if (scores[category] > maxScore) {
          maxScore = scores[category];
          chosenCategory = category;
      }
  }

  return chosenCategory;
}

// Define global variables to store markers for each soil type
var markers = {
soil1: null,
soil2: null,
soil3: null
};

// Function to add marker for soil1
function addMarkerSoil1(data) {
removeMarkers();
markers.soil1 = tambahkanMarker(data);
}

// Function to add marker for soil2
function addMarkerSoil2(data) {
removeMarkers();
markers.soil2 = tambahkanMarker(data);
}

// Function to add marker for soil3
function addMarkerSoil3(data) {
removeMarkers();
markers.soil3 = tambahkanMarker(data);
}

// Function to remove markers for all soil types
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

// Function to add marker with popup
function tambahkanMarker(data) {
// Determine soil category using fuzzy logic
const category = categorizeValues(data.n, data.p, data.k, data.ph, data.moisture);

// Tentukan warna ikon berdasarkan kategori tanah
var iconColor;
if (category === 'poor') {
  iconColor = "red";
} else if (category === 'moderate') {
  iconColor = "yellow";
} else {
  iconColor = "green";
}

// Create marker with popup
var marker = L.marker([data.LAT, data.LONG], {
  icon: L.divIcon({
    className: "custom-icon " + iconColor,
    iconSize: [10, 10],
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

// Return the created marker
return marker;
}

// change value
function showInfo(type) {
const infoListItem = document.querySelectorAll("#infoList li");
infoListItem.forEach((item) => item.classList.remove("active"));

const clickedItem = document.getElementById(type);
clickedItem.classList.add("active");

if (type === "soil1") {
  var alat1 = {
    alat: 1,
    LAT: -6.82435,
    LONG: 107.5615,
    n: 150, 
    p: 80,
    k: 70,
    ph: 4,
    moisture: 60  
  };   
  document.getElementById("infoMoisture").textContent = alat1.moisture + " %";
  document.getElementById("infopH").textContent = alat1.ph;
  document.getElementById("infoN").textContent = alat1.n;
  document.getElementById("infoP").textContent = alat1.p;
  document.getElementById("infoK").textContent = alat1.k ;
  document.getElementById("coordinateLat").textContent = alat1.LAT;
  document.getElementById("coordinateLong").textContent = alat1.LONG;
  addMarkerSoil1(alat1);
} else if (type === "soil2") {
  var alat2 = {
    alat: 2,
    LAT: -6.82442,
    LONG: 107.56175,
    n: 200,
    p: 360,
    k: 420,
    ph: 2,
    moisture: 75,
  };
  document.getElementById("infoMoisture").textContent = alat2.moisture + " %";
  document.getElementById("infopH").textContent = alat2.ph;
  document.getElementById("infoN").textContent = alat2.n;
  document.getElementById("infoP").textContent = alat2.p;
  document.getElementById("infoK").textContent = alat2.k ;
  document.getElementById("coordinateLat").textContent = alat2.LAT;
  document.getElementById("coordinateLong").textContent = alat2.LONG;
  addMarkerSoil2(alat2);
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

// pop up data
function myFunction(event) {
var popup = event.currentTarget.querySelector(".popuptext");
popup.classList.toggle("show");
}

// pop up map
function movemap(){
window.location.href = "map_ta.html";
}

