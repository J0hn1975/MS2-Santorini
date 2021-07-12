let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.41999832 , lng: 25.43166494 },
    zoom: 10,
  });
}