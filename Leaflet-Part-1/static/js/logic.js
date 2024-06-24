// Create the map object
let myMap = L.map("map", {
    center: [0, 50], 
    zoom: 3 
  });
  
  // Add the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Define a function to get the color based on depth
  function getColor(depth) {
    return depth > 90 ? '#4B0082' :  // Indigo
           depth > 70 ? '#6A0DAD' :  // Purple
           depth > 50 ? '#8A2BE2' :  // BlueViolet
           depth > 30 ? '#4169E1' :  // RoyalBlue
           depth > 10 ? '#4682B4' :  // SteelBlue
                        '#B0C4DE';   // LightSteelBlue
  }
  
  // Define a function to get the radius based on magnitude
  function getRadius(magnitude) {
    return magnitude * 4;
  }
  
  // Load the GeoJSON data.
  let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  // Get the data with d3.
  d3.json(geoData).then(function(data) {
    // Create a GeoJSON layer with the data
    L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: getRadius(feature.properties.mag),
          fillColor: getColor(feature.geometry.coordinates[2]),
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        });
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(
          `<h3>${feature.properties.title}</h3><hr>
           <p>Magnitude: ${feature.properties.mag}</p>
           <p>Depth: ${feature.geometry.coordinates[2]} km</p>
           <p>Location: ${feature.properties.place}</p>`
        );
      }
    }).addTo(myMap);
  
    // Create a legend
    let legend = L.control({ position: "bottomright" });
  
    legend.onAdd = function (map) {
      let div = L.DomUtil.create("div", "legend"),
          depths = [-10, 10, 30, 50, 70, 90],
          labels = [];
  
      // Loop through the depth intervals and generate a label with a colored square for each interval
      for (let i = 0; i < depths.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
          depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
      }
  
      return div;
    };
  
    legend.addTo(myMap);
  });
  