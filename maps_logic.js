// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjD6alEMUlP0u9ubyVRe1w_V-aT8WF9Zo",
    authDomain: "outdoorly2-1537372469520.firebaseapp.com",
    databaseURL: "https://outdoorly2-1537372469520.firebaseio.com",
    projectId: "outdoorly2-1537372469520",
    storageBucket: "outdoorly2-1537372469520.appspot.com",
    messagingSenderId: "982019906690"
};
firebase.initializeApp(config);
var map;

var queryUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=3461+Corley+Home+Drive,+Richmond,+VA&key=AIzaSyB8KmcbXCn9lulhHKjc593b5nskOQLDAIw";

function initMap() {
    $.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {
    var lat = response.results[0].geometry.location.lat;
    var lng = response.results[0].geometry.location.lng;
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 8
    });
});
}
