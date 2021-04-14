// This array contains the coordinates for all bus stops between MIT and Harvard

  const place = [
      { 
          "name": "This is my Home",
          "coordinates": [-76.968125, -12.104884] },

      { 
        "name": "Here is were my Job is",
        "coordinates": [-76.971502, -12.086293] }
   ]
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2xhdG9ycmVsIiwiYSI6ImNrbmdweXM3NjAzamkycHAxNWVlcDE1bHAifQ.hQYmIvPQoDOmhXCN_CcjQQ';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-76.968125, -12.104884],
    zoom: 14,
  });

  map.addControl(new mapboxgl.NavigationControl());
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  
  var marker = new mapboxgl.Marker({
    color: "#FF0000"})
    .setLngLat([-76.968125, -12.104884])
    .addTo(map);

  
  // counter here represents the index of the current bus stop
  let counter = 0;
  let poptext = "This is my home";
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    setTimeout(() =>{
    if(counter>=place.length) counter = 0;
    poptext = place[counter]["name"];
   marker.setLngLat(place[counter]["coordinates"])
    .setPopup(new mapboxgl.Popup().setHTML(poptext))
    marker.togglePopup();
    counter++;
    move();
    }, 5000);
   
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  