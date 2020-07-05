window.alert("sometext");

mapboxgl.accessToken = 'pk.eyJ1IjoiZW1hbnNodSIsImEiOiJja2MxYm51d2EwZWI4MnB2dGNqNXk1amowIn0._GhY7C1S3tbc_w3ULJq3QQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});