// city data from http://www.city-data.com/
var villes = [
    {"nom": "Paris", "lat": 48.852969, "lon": 2.349903},
    {"nom": "Lyon", "lat": 45.764043, "lon": 4.835659},
    {"nom": "Marseille", "lat": 43.296482, "lon": 5.36978},
    {"nom": "Lille", "lat": 50.637222, "lon": 3.063333},
    {"nom": "Toulouse", "lat": 43.604652, "lon": 1.444209},
    {"nom": "london", "lat": 51.507351, "lon": -0.127613},
    {"nom": "Bordeaux", "lat": 44.837789, "lon": -0.57918},
    {"nom": "Rome", "lat": 41.902783, "lon": 12.496365},
    {"nom": "Milan", "lat": 45.465422, "lon": 9.185924},
    {"nom": "Madrid", "lat": 40.416775, "lon": -3.703787},
    {"nom": "Barcelona", "lat": 41.38506, "lon": 2.173404},
    {"nom": "Valencia", "lat": 39.469, "lon": -0.376},
    {"nom": "Seville", "lat": 37.38, "lon": -5.966},
    {"nom": "Zurich", "lat": 47.37, "lon": 8.55},
    {"nom": "Geneva", "lat": 46.204391, "lon": 6.145496},
    {"nom": "Basel", "lat": 47.57, "lon": 7.567},
    {"nom": "Bern", "lat": 46.947, "lon": 7.447},
    {"nom": "Strasbourg", "lat": 48.58, "lon": 7.75},
];

//map initialisation
var map = L.map('map').setView([48.852996, 2.349903], 4);

//map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution : 'données openstreetmap france',
    maxZoom : 20,
    minZomm : 1
}).addTo(map);

// marker layer
var markers = L.markerClusterGroup();

// custom marker
var icon = L.icon({
    iconUrl: './image/marker.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -45]
});

// create popup and marker
for (let index = 0; index < villes.length; index++) {
    var marker = L.marker([villes[index].lat, villes[index].lon], { icon:icon }); //create marker
    marker.bindPopup((villes[index].nom)); //bind popup
    markers.addLayer(marker); //add marker
}

console.log(markers);
// add marker to map
map.addLayer(markers);