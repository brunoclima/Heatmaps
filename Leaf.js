var map = L.map('leafmap').setView([-23.533773, -46.625290], 10);
var mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJ1bm9jbGltYSIsImEiOiJjaml4Mjl4cHIzYWJtM3BwODczODJ0amF1In0.BrU4E_5s8aTGuD36bQvkIg';
var urlAlagamento = 'http://betageo.climatempo.com.br/geoserver/sc/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sc:alertAlagamentoFake&maxFeatures=1000&outputFormat=application%2Fjson';

L.tileLayer(mapboxUrl, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnJ1bm9jbGltYSIsImEiOiJjaml4Mjl4cHIzYWJtM3BwODczODJ0amF1In0.BrU4E_5s8aTGuD36bQvkIg'
}).addTo(map);

$(function() {
   $.getJSON(urlAlagamento, function(data) {
       success: {
           map.createPane("Nivel 1");
           map.createPane("Nivel 2");
           map.createPane("Nivel 3");
           alert("Sucesso na requisição de dados! =)");
           triagem(data);
       }
   });
});

function triagem(niveis) {
    console.log(niveis);
    L.geoJSON(niveis, {
        style: function(feature) {
            console.log(feature);
            switch (feature.properties.level) {
                case 1: return {
                    color: "#027e3f",
                    weight: 10,
                    opacity: 1,
                    fillColor: "#12ff00",
                    fillOpacity: 0.5,
                    pane: "Nivel 1"
                };
                break;

                case 2: return {
                    color: "#f3c800",
                    weight: 10,
                    opacity: 1,
                    fillColor: "#fffe00",
                    fillOpacity: 0.5,
                    pane: "Nivel 2"
                };
                break;

                case 3: return {
                    color: "#c61620",
                    weight: 10,
                    opacity: 1,
                    fillColor: "#ff0101",
                    fillOpacity: 0.5,
                    pane: "Nivel 3"
                };
                break;
            }
        }
    }).addTo(map);
};