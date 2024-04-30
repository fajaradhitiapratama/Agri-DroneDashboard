var map = L.map("map").setView([-6.8245, 107.5615], 18);

// OSM layer
var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);

// map satelit
var googleSat = L.tileLayer("http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});
googleSat.addTo(map);

var myStyle = {
  color: "#ff0000",
  weight: 4,
  opacity: 1,
};

// GeoJSON
L.geoJSON(mapgeoJSON, {
  style: myStyle,
}).addTo(map);

// Data contoh
var alat1 = {
  LAT: -6.82435,
  LONG: 107.5615,
  n: 150, 
  p: 55,
  k: 50,
  ph: 6,
  moisture: 20
};

var alat2 = {
  LAT: -6.82442,
  LONG: 107.56175,
  n: 250,
  p: 55,
  k: 50,
  ph: 6,
  moisture: 20,
};

var alat3 = {
  LAT: -6.82472,
  LONG: 107.5615,
  n: 200,
  p: 55,
  k: 50,
  ph: 6,
  moisture: 20,
};

// Tambahkan marker untuk setiap titik
var tambahkanMarker = function(data) {
  // Tentukan warna ikon berdasarkan nilai n
  var iconColor;
  if (data.n <= 150) {
    iconColor = "red";
  } else if (data.n >150 && data.n <= 200) {
    iconColor = "yellow";
  } else {
    iconColor = "green";
  }

  L.marker([data.LAT, data.LONG], {
    icon: L.divIcon({
      className: "custom-icon " + iconColor,
      iconSize: [40, 40],
    }),
  })
  .bindPopup(
    `
              <b>Data</b><br>
              N: ${data.n}<br>
              P: ${data.p}<br>
              K: ${data.k}<br>
              pH: ${data.ph}<br>
              Moisture: ${data.moisture}`
  )
  .addTo(map);
};

tambahkanMarker(alat1);
tambahkanMarker(alat2);
tambahkanMarker(alat3);
