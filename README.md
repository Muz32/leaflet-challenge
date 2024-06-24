# leaflet-challenge
In this assignment challenge, I used geographic visualisation techniques to map GeoJSON data on earthquakes and tectonic plates. JavaScript libraries, including Leaflet and D3, were utilised to plot the data. The geographic visualisations are divided into two parts:

## Part 1: Creating the Earthquake Visualisation
This section visualises earthquake data from the past seven days sourced from the United States Geological Survey (USGS) via their GeoJSON API. Using Leaflet, spatial plots are generated from the earthquake API dataset based on their longitude and latitude. The data markers on the map represent the earthquake's magnitude through the size of the circles at the earthquake locations and the depth through colour. Darker colours indicate greater depth, while lighter colours indicate shallower depths. A legend in the map's bottom left corner provides further guidance on colour shades for earthquake depth. Clicking on a marker reveals detailed information about the earthquake's magnitude, depth, and precise location.

## Part 2: Tectonic Plates and Seismic Activity
Building upon the earthquake visualisation, this part introduces an additional layer of tectonic plate data to explore the relationship between plate boundaries and seismic events. You can toggle between a street map and a topographic map for varied geographical perspectives. Additionally, each dataset (on earthquakes and tectonic plates) is put into separate overlays, allowing you to select and view one dataset at a time or both datasets alongside each other.  

## GitHub Deployment
The geospatial visualisations illustrating seismic activity and tectonic plates are also deployed to GitHub Pages, enabling you to easily view the visualisations without the need to download the repository. Please visit: [Tectonic Plates and Seismic Activity Geospatial Visualisation](https://muz32.github.io/leaflet-challenge/) 

## Data Source

- **Earthquake Data**: United States Geological Survey (USGS), [Past seven days Earthquake feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson).
  
- **Tectonic Plates Data**: [Fraxen's tectonicplates GitHub repository]( https://github.com/fraxen/tectonicplates). The GeoJSON folder had four JSON files. Data from the ‘PB2002_boundaries.json’ file was used and put in a JavaScript file.

## Folder Structure

### Leaflet-Part-1
```
├── index.html
└── static
    ├── css
    │   └── style.css
    └── js
        └── logic.js
```

### Leaflet-Part-2
```
├── index.html
└── static
    ├── css
    │   └── style.css
    └── js
        ├── logic.js
        └── tectonicPlates.js
```

### GeoJSON (Tectonic Plates)
```
├── PB2002_boundaries.json
├── PB2002_orogens.json
├── PB2002_plates.json
└── PB2002_steps.json
```






