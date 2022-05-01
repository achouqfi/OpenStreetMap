var villes = [
    {
        "nom": "Paris",
        "lat": 48.852969,
        "lon": 2.349903
    },
    {
        "nom": "Lyon",
        "lat": 45.764043,
        "lon": 4.835659
    },
    {
        "nom": "Marseille",
        "lat": 43.296482,
        "lon": 5.36978
    },
    {
        "nom": "Lille",
        "lat": 50.637222,
        "lon": 3.063333
    },
    {
        "nom": "Toulouse",
        "lat": 43.604652,
        "lon": 1.444209
    },
];


//map initialisation
var map = L.map('map').setView([48.852996, 2.349903], 10);

//"tuiles charge"
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution : 'données openstreetmap france',
    maxZoom : 100,
    minZomm : 1
}).addTo(map);

var markers = L.markerClusterGroup();
//custom marker
let icon = L.icon({
    iconUrl: './image/marker.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -45]
});

//create popup and marker
for (let index = 0; index < villes.length; index++) {
    var marker = L.marker([villes[index].lat, villes[index].lon], { icon:icon });
    marker.bindPopup((villes[index].nom));
    markers.addLayer(marker);
}

map.addLayer(markers);

