// This array contains the coordinates for all bus stops between MIT and Harvard

  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2xhdG9ycmVsIiwiYSI6ImNrbmdweXM3NjAzamkycHAxNWVlcDE1bHAifQ.hQYmIvPQoDOmhXCN_CcjQQ';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-71.0942, 42.3601],
    zoom: 13,
  });

  map.addControl(new mapboxgl.NavigationControl());
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  

  var currentMarkers=[];

async function run () {
  const locations = await getBusLocations();
  console.log(new Date());
  console.log(locations);

  if (currentMarkers!==null) {
    for (var i = currentMarkers.length - 1; i >= 0; i--) {
      currentMarkers[i].remove();
    }
}

for (let i = 0; i< locations.length; i++){

  let poptext = "Bus code: " + locations[i]["id"];
  let coordinates = [0,0];
  coordinates[0]= locations[i]["attributes"]["longitude"];
  coordinates[1]= locations[i]["attributes"]["latitude"];

// Create a default Marker and add it to the map.
var marker1 = new mapboxgl.Marker()
.setLngLat(coordinates)
.addTo(map)
.setPopup(new mapboxgl.Popup().setHTML(poptext))
.togglePopup();
 
    currentMarkers.push(marker1);

}
  setTimeout(run, 5000);
}


async function getBusLocations() {
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}




run();