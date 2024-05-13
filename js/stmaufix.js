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
  // Tentukan warna ikon berdasarkan nilai n
  var iconColor;
  if (data.n <= 150) {
    iconColor = "red";
  } else if (data.n > 150 && data.n <= 200) {
    iconColor = "yellow";
  } else {
    iconColor = "green";
  }

  // Create marker with popup
  var marker = L.marker([data.LAT, data.LONG], {
    icon: L.divIcon({
      className: "custom-icon " + iconColor,
      iconSize: [30, 30],
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
      n: 250,
      p: 155,
      k: 200,
      ph: 7,
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
  } else if (type === "soil3") {
    var alat3 = {
      alat: 3,
      LAT: -6.82472,
      LONG: 107.5615,
      n: 200,
      p: 55,
      k: 50,
      ph: 6,
      moisture: 20,
    };
    document.getElementById("infoMoisture").textContent = alat3.moisture + " %";
    document.getElementById("infopH").textContent = alat3.ph;
    document.getElementById("infoN").textContent = alat3.n;
    document.getElementById("infoP").textContent = alat3.p;
    document.getElementById("infoK").textContent = alat3.k ;
    document.getElementById("coordinateLat").textContent = alat3.LAT;
    document.getElementById("coordinateLong").textContent = alat3.LONG;
    addMarkerSoil3(alat3);
  }
  else if (type === "all"){
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
    var alat2 = {
      alat: 2,
      LAT: -6.82442,
      LONG: 107.56175,
      n: 250,
      p: 155,
      k: 200,
      ph: 7,
      moisture: 75,
    };
    var alat3 = {
      alat: 3,
      LAT: -6.82472,
      LONG: 107.5615,
      n: 200,
      p: 55,
      k: 50,
      ph: 6,
      moisture: 20,
    };
    
    addMarkerSoil1(alat1);
    addMarkerSoil2(alat2);
    addMarkerSoil3(alat3);
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