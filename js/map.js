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

function haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng() - mk1.position.lng()) * (Math.PI / 180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
    return d;
}

function FindLocaiton() {
    geocoder = new google.maps.Geocoder();
    InitializeMap();

    var pinColor = "#808";
    var pinColor_2 = "#000";

    var pinSVGFilled = "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";
    var labelOriginFilled = new google.maps.Point(12, 9);


    var markerImage = { // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
        path: pinSVGFilled,
        anchor: new google.maps.Point(12, 17),
        fillOpacity: 1,
        fillColor: pinColor,
        strokeWeight: 2,
        strokeColor: "white",
        scale: 2,
        labelOrigin: labelOriginFilled
    };

    var markerImage_2 = { // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
        path: pinSVGFilled,
        anchor: new google.maps.Point(12, 17),
        fillOpacity: 1,
        fillColor: pinColor_2,
        strokeWeight: 2,
        strokeColor: "white",
        scale: 2,
        labelOrigin: labelOriginFilled
    };

    var array_geo = [{
            lat: 10.766923,
            lng: 106.6691148
        },
        {
            lat: 10.747702,
            lng: 106.6735587
        },
        {
            lat: 10.7804059,
            lng: 106.6325155
        },
        {
            lat: 10.8933752,
            lng: 106.6337062
        },
        {
            lat: 10.8204788,
            lng: 106.68069
        }
    ];


    var pos_cn1 = new google.maps.Marker({
        position: array_geo[0],
        map: map
    });

    var pos_cn2 = new google.maps.Marker({
        position: array_geo[1],
        map: map
    });

    var pos_cn3 = new google.maps.Marker({
        position: array_geo[2],
        map: map
    });

    var pos_cn4 = new google.maps.Marker({
        position: array_geo[3],
        map: map
    });

    var pos_cn5 = new google.maps.Marker({
        position: array_geo[4],
        map: map
    });

    var array_pos = [pos_cn1, pos_cn2, pos_cn3, pos_cn4, pos_cn5];




    var address = document.getElementById("addressinput").value;
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: markerImage
            });


            var array_distance = [];

            for (var i = 0; i < 5; i++) {
                var distance = haversine_distance(marker, array_pos[i]);
                array_distance.push(distance.toFixed(2));
            }
            //document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " mi.";

            //console.log("Distance between markers: " + distance.toFixed(2) + " mi.");

            console.log(array_distance);

            var min_pos = 0;
            for (var i = 1; i < array_distance.length; i++) {
                if (array_distance[min_pos] > array_distance[i]) {
                    min_pos = i;
                }
            }

            console.log(array_pos[min_pos] + ' khoang cach ' + array_distance[min_pos]);
            array_pos[min_pos] = new google.maps.Marker({
                position: array_geo[min_pos],
                map: map,
                icon: markerImage_2
            });

        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });

}


function Button1_onclick() {
    FindLocaiton();
}

// window.onload = InitializeMap;


var map;

function InitializeMap() {
    var latlng = new google.maps.LatLng(10.776530, 106.700981);
    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), myOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(10.776530, 106.700981),
        map: map,
        title: 'Click me'
    });


    var infowindow = new google.maps.InfoWindow({
        content: 'Location info:Nha Hang 1<br/>Country Name:Nguyen Binh Khiem<br/>LatLng:'
    });
    google.maps.event.addListener(marker, 'click', function() {
        // Calling the open method of the infoWindow 
        infowindow.open(map, marker);
    });
}
window.onload = InitializeMap;

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