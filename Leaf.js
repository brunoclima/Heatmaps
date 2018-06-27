var map = L.map('leafmap').setView([-23.533773, -46.625290], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJ1bm9jbGltYSIsImEiOiJjaml4Mjl4cHIzYWJtM3BwODczODJ0amF1In0.BrU4E_5s8aTGuD36bQvkIg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnJ1bm9jbGltYSIsImEiOiJjaml4Mjl4cHIzYWJtM3BwODczODJ0amF1In0.BrU4E_5s8aTGuD36bQvkIg'
}).addTo(map);

var states = [{
    "type": "Feature",
    "properties": {"level": "1"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-46.5960974,-23.24256801],
            [-46.5960974,-23.2435691],
            [-46.59509673,-23.2435691],
            [-46.59509673,-23.24256801],
            [-46.5960974,-23.24256801]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"level": "2"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-46.56807872,-23.24256801],
            [-46.56807872,-23.2435691],
            [-46.56707805,-23.2435691],
            [-46.56707805,-23.24256801],
            [-46.56807872,-23.24256801]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"level": "3"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-46.56507672,-23.2435691],
            [-46.56507672,-23.24457018],
            [-46.56407605,-23.24457018],
            [-46.56407605,-23.2435691],
            [-46.56507672,-23.2435691]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.level) {
            case '1': return {
                color: "#027e3f",
                weight: 10,
                opacity: 1,
                fillColor: "#12ff00",
                fillOpacity: 0.5
            };
            case '2': return {
                color: "#f3c800",
                weight: 10,
                opacity: 1,
                fillColor: "#fffe00",
                fillOpacity: 0.5
            };
            case '3': return {
                color: "#c61620",
                weight: 10,
                opacity: 1,
                fillColor: "#ff0101",
                fillOpacity: 0.5
            };
        }
    }
}).addTo(map);