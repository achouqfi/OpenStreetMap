var carte = L.map('map').setView([48.852969, 2.349903], 13);
            
// On charge les "tuiles"
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20
}).addTo(carte);

let cercle = L.circle([48.852969, 2.349903], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.2,
    radius: 2500
}).addTo(carte);

cercle.bindPopup("Ville de Paris");

let triangle = L.polygon([
    [48.85779, 2.3392724],
    [48.852630, 2.3523187],
    [48.86, 2.35223293],
], {
    color: 'black',
    fillColor: 'black',
    fillOpacity: 0.5
}).addTo(carte);
triangle.bindPopup("Triangle sur Paris");

let polygon = L.polygon([
    [48.85779759188263, 2.339272499084472],
    [48.85703523304221, 2.3406243324279785],
    [48.85663993129474, 2.3412251472473145],
    [48.85505869308853, 2.342963218688965],
    [48.85497398248938, 2.3431777954101562],
    [48.854268055255545, 2.3447656631469727],
    [48.853646831055556, 2.3463964462280273],
    [48.852940885107614, 2.3480701446533203],
    [48.852220809985745, 2.3499369621276855],
    [48.85159956038226, 2.3526835441589355],
    [48.85206549830757, 2.3524260520935054],
    [48.852630265737005, 2.35231876373291],
    [48.853251502551096, 2.3522329330444336],
    [48.85394332538533, 2.351932525634765],
    [48.854536308777014, 2.3514175415039062],
    [48.85511516674166, 2.35032320022583],
    [48.85570813625314, 2.3483705520629883],
    [48.856244626425635, 2.3465466499328613],
    [48.85671052112145, 2.345151901245117],
    [48.85689405420504, 2.3442506790161133],
    [48.85703523304221, 2.343113422393799],
    [48.85727523615161, 2.3412466049194336],
    [48.85779759188263, 2.339272499084472],
]).addTo(carte);
polygon.bindPopup("cité");

let xmlhttp = new XMLHttpRequest();

// Sur changement de statut
xmlhttp.onreadystatechange = () => {
    // Si la transaction est terminée
    if (xmlhttp.readyState == 4){
        // Si la transaction est un succès
        if(xmlhttp.status == 200) {
            // On traite le json reçu
            let geojson = JSON.parse(xmlhttp.responseText)

            // On dessine le polygone
            let geojsonLayer = L.geoJSON(geojson, {
                style: {
                    "color": "red",
                    "opacity": 1,
                    "weight": 1,
                    "fillColor": "red", 
                    "fillOpacity": 0.5
                }
            });
            // On ajoute une popup
            geojsonLayer.bindPopup("Département 89");

            // On ajoute à la carte
            geojsonLayer.addTo(carte);
        } else {
            console.log(req.status);
        }
    }
}

// On ouvre la connexion vers le fichier geojson
xmlhttp.open('GET', 'departement-89.geojson', true);

// On envoie la requête
xmlhttp.send(null);