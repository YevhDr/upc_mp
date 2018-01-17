
// var redPoint = L.icon({
//     iconUrl: 'img/red.svg',
//     iconSize:     [20, 20], // size of the icon
//
//     iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
//
//     popupAnchor:  [-10, -10] // point from which the popup should open relative to the iconAnchor
// });

var yellowPoint = L.icon({
    iconUrl: 'img/yellow.svg',
    iconSize:     [20, 20], // size of the icon

    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location

    popupAnchor:  [-10, -10] // point from which the popup should open relative to the iconAnchor
});

var cities = L.layerGroup();

////////////////////////////////////////
// add stations/////////////////////////
///////////////////////////////////////


 L.marker([49.207883, 24.666714], {icon: yellowPoint}).addTo(cities);
 L.marker([48.463149, 38.202597], {icon: yellowPoint}).addTo(cities);
 L.marker([50.446638, 30.639666], {icon: yellowPoint}).addTo(cities);
 L.marker([47.5086, 34.6256], {icon: yellowPoint}).addTo(cities);
 L.marker([49.071129,24.319353], {icon: yellowPoint}).addTo(cities);
 L.marker([48.747775,37.573545], {icon: yellowPoint}).addTo(cities);
 L.marker([47.566448,33.64328], {icon: yellowPoint}).addTo(cities);
 L.marker([47.99459,37.237741], {icon: yellowPoint}).addTo(cities);
 L.marker([48.706825,29.220188], {icon: yellowPoint}).addTo(cities);
 L.marker([48.748741,39.260899], {icon: yellowPoint}).addTo(cities);
 L.marker([48.403499,35.118088], {icon: yellowPoint}).addTo(cities);
 L.marker([48.871596,37.764766], {icon: yellowPoint}).addTo(cities);
 L.marker([47.799096,38.004681], {icon: yellowPoint}).addTo(cities);
 L.marker([49.797068,36.590277], {icon: yellowPoint}).addTo(cities);
 L.marker([50.134847,30.745404], {icon: yellowPoint}).addTo(cities);
 L.marker([49.386221,32.060906], {icon: yellowPoint}).addTo(cities);
 L.marker([51.455278,31.262222], {icon: yellowPoint}).addTo(cities);
 L.marker([49.5865,36.52525], {icon: yellowPoint}).addTo(cities);
 L.marker([49.5865,36.52525], {icon: yellowPoint}).addTo(cities);
 L.marker([50.219662,24.373773], {icon: yellowPoint}).addTo(cities);


///////////////////////////////////
////////////////////////////////
///////////////////////////////////

var mbAttr = "&copy;<a href='http://www.openstreetmap.org/copyright'>mapbox</a>";

mbUrl = 'https://api.mapbox.com/styles/v1/evgeshadrozdova/cj8q5dbpxaa2g2rqni1psrh7g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZnZXNoYWRyb3pkb3ZhIiwiYSI6ImNqMjZuaGpkYTAwMXAzMm5zdGVvZ2c0OHYifQ.s8MMs2wW15ZyUfDhTS_cdQ';


var grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});

var map = L.map('map', {
    center: [49.0, 32.0],
    zoom: 5,
    layers: [grayscale, cities]
});


var baseLayers = {
    "Grayscale": grayscale
};

var overlays = {
    "Cities": cities
};



