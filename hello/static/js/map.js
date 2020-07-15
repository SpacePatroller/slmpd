// window.alert("sometext");

mapboxgl.accessToken =
  'pk.eyJ1IjoiZW1hbnNodSIsImEiOiJja2NqY2xpbzIxNmJwMnpxeTl0dXloZm1kIn0.qYZsVTr44ir2M4S6jLrTFQ'
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-90.257, 38.59], // starting position [lng, lat]
  zoom: 11, // starting zoom
})

testURL = '/data'

d3.json(testURL, function (data) {
  console.log(data)
})
