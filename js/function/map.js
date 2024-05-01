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
  alat: 1,
  LAT: -6.82435,
  LONG: 107.5615,
  n: 150, 
  p: 55,
  k: 50,
  ph: 6,
  moisture: 20
};

var alat2 = {
  alat: 2,
  LAT: -6.82442,
  LONG: 107.56175,
  n: 250,
  p: 55,
  k: 50,
  ph: 6,
  moisture: 20,
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

// Tambahkan marker untuk setiap titik


