# leaflet-challenge
In this assignment challenge, I used geographic visualisation techniques to map GeoJSON data on earthquakes and tectonic plates. JavaScript libraries, including Leaflet and D3, were utilized to plot the data. The geographic visualizations are divided into two parts.

## Part 1: Creating the Earthquake Visualization
This section visualises earthquake data from the past seven days sourced from the United States Geological Survey (USGS) via their GeoJSON API. Using Leaflet, spatial plots are generated from the earthquake API dataset based on their longitude and latitude. The data markers on the map represent the earthquake's magnitude through the size of the circles at the earthquake locations and the depth through color. Darker colors indicate greater depth, while lighter colors indicate shallower depths. A legend in the map's bottom left corner provides further guidance on colour shades for earthquake depth. Clicking on a marker reveals detailed information about the earthquake's magnitude, depth, and precise location.

## Part 2: Tectonic Plates and Seismic Activity
Building upon the earthquake visualization, this part introduces an additional layer of tectonic plate data to explore the relatioship between plate boundaries and seismic events. You can toggle between a street map and a topographic map for varied geographical perspectives. Also, each data set (on earthquakes and tectonic plates) are put into separate overlays so you can select to view one dataset at a time or both datsets alongside each other.  

## Data Source

- **Earthquake Data**: United States Geological Survey (USGS), United States Geological Survey, API link: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
  
- **Tectonic Plates Data**: Fraxen's tectonicplates GitHub repository https://github.com/fraxen/tectonicplates. The GeoJSON folder had four JSON files. Data from the ‘PB2002_boundaries.json’ file was used.

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


