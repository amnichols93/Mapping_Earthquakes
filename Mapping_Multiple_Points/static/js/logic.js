// Get data from cities.js
let cityData = cities;

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
/*let map = L.map('mapid').setView([40.7, -94.5], 4);*/

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [40.7, -94.5],
    zoom: 4
  });

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: '#FFA500',
    fillColor: '#FFA500',
    weight: 4, 
    fillOpacity: 0.25,
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  /*L.marker(city.location)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")*/
  .addTo(map);
});

//  Add a marker to the map for Los Angeles, California.
/*L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: 'black',
  fillColor: '#ffffa1',
}).addTo(map);*/

// We create the tile layer that will be the background of our map.
// Using satellite-streets-v11 and dark-v10 instead of streets-v11
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);