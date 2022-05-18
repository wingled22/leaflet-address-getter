var myMap;
var lyrOSM;    

$(document).ready(function () {
    // create map object 
    myMap = L.map('map_div',  {center:[38.91454,-77.02171], zoom:12, zoomControl:false });

    //add basemap layer
    lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'); 
     myMap.addLayer(lyrOSM);

    // L.Control.geocoder().addTo(myMap);
    var geocoder = L.Control.geocoder({
        defaultMarkGeocode: true
    })
        .on('markgeocode', function(e) {
            var bbox = e.geocode.bbox;
            var poly = L.polygon([
                bbox.getSouthEast(),
                bbox.getNorthEast(),
                bbox.getNorthWest(),
                bbox.getSouthWest()
            ]).addTo(myMap);
            myMap.fitBounds(poly.getBounds());
        })
        .addTo(myMap);

});
