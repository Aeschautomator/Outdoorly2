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
var address;
$("#submitHome").on("click", function(){
  event.preventDefault();
  address = $("#searchBar").val().trim();
  address = address.replace(/ /g, "+");
  window.location.href = "maps_stuff.html";
  localStorage.setItem("address", address);
});
address = localStorage.getItem("address");
var mapUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyB8KmcbXCn9lulhHKjc593b5nskOQLDAIw";

function initMap() {
    console.log(address);
    $.ajax({
    url: mapUrl,
    method: "GET"
}).then(function (response) {
    var lat = response.results[0].geometry.location.lat;
    var lng = response.results[0].geometry.location.lng;
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 13
    });
});
}


var url = "https://api.nasa.gov/planetary/apod?api_key=6NprwCeXJI4VjBtN7Sgn2stKHJZGCiUF6JIToxzr";


$.ajax({
 url: url,
 success: function(result){
 if("copyright" in result) {
   $("#copyright").text("Image Credits: " + result.copyright);
 }
 else {
   $("#copyright").text("Image Credits: " + "Public Domain");
 }

 if(result.media_type == "video") {
   $("#apod_img_id").css("display", "none");
   $("#apod_vid_id").attr("src", result.url);
 }
 else {
   $("#apod_vid_id").css("display", "none");
   $("#apod_img_id").attr("src", result.url);
 }
 $("#reqObject").text(url);
 $("#returnObject").text(JSON.stringify(result, null, 4));
 $("#apod_explaination").text(result.explanation);
 $("#apod_title").text(result.title);
}


});
$(document).on("click", "#apod_img_id", function(){
    $("#apod_img_id").wrap("<a href='apod.html'></a>");
});

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
      alert("Name must be filled out");
      return false;
  }
}


