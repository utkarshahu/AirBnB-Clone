maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: 'map', // container's id or HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: listing.geometry.coordinates, // Valid longitude and latitude
  zoom: 9, // Starting zoom
});

// const coordinates = { lng: 103.851959, lat: 1.290270 }; // Valid coordinates

const marker = new maptilersdk.Marker({color:"red"})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new maptilersdk.Popup({offset: 25})
  .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))
  
  .addTo(map);
        