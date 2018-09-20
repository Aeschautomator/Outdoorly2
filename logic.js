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

// $("#apod_image_id").click(function() {
//     alert("clicked");
// });
