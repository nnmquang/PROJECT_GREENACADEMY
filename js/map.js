// var map;
// var geocoder;
// function InitializeMap() {

// // var latlng = new google.maps.LatLng(-34.397, 150.644);
// var latlng = new google.maps.LatLng(10.776530, 106.700981);
// var myOptions =
// {
//     zoom: 8,
//     center: latlng,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     disableDefaultUI: true
// };
// map = new google.maps.Map(document.getElementById("map"), myOptions);
// }

// function FindLocaiton() {
// geocoder = new google.maps.Geocoder();
// InitializeMap();

// var address = document.getElementById("addressinput").value;
// geocoder.geocode({ 'address': address }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
// 	map.setCenter(results[0].geometry.location);
// 	var marker = new google.maps.Marker({
// 	    map: map,
// 	    position: results[0].geometry.location
// 	});

//     }
//     else {
// 	alert("Geocode was not successful for the following reason: " + status);
//     }
// });

// }


// function Button1_onclick() {
// FindLocaiton();
// }

// window.onload = InitializeMap;


var map;
function initialize() {
var latlng = new google.maps.LatLng(10.776530, 106.700981);
var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById("map"), myOptions);
var marker = new google.maps.Marker
(
    {
	position: new google.maps.LatLng(10.776530, 106.700981),
	map: map,
	title: 'Click me'
    }
);
var infowindow = new google.maps.InfoWindow({
    content: 'Location info:Nha Hang 1<br/>Country Name:Nguyen Binh Khiem<br/>LatLng:'
});
google.maps.event.addListener(marker, 'click', function () {
    // Calling the open method of the infoWindow 
    infowindow.open(map, marker);
});

function FindLocaiton() {
    geocoder = new google.maps.Geocoder();
    InitializeMap();
    
    var address = document.getElementById("addressinput").value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
    
        }
        else {
        alert("Geocode was not successful for the following reason: " + status);
        }
    });
    
    }
}
window.onload = initialize;

// var marker=new google.maps.Marker({
//     // position:myCenter(10.788600 , 106.703540),   //Nguyễn Bỉnh Khiêm Hồ Chí Minh
//     position:myCenter(10.867010 , 106.616810),  //Nguyễn Ảnh Thủ Hồ Chí Minh
//     icon: "pinkball.png",
//     title: "Landmark 72 ^_^",
//     draggable: true,
//     animation:google.maps.Animation.BOUNCE,
//     });
  
//   marker.setMap(map);

//   var infowindow = new google.maps.InfoWindow({
//     // nội dung của InfoWindow
//     content:"Hello World!"
//     });
  
//   infowindow.open(map,marker);

// let marker;

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 13,
//     center: { lat: 10.867010, lng: 106.616810 },
//   });

//   marker = new google.maps.Marker({
//     map,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     position: { lat: 10.867010, lng: 106.616810 },
//   });
//   marker.addListener("click", toggleBounce);
// }

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }


