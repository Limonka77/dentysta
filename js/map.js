function mapStart() {
    //definition of the center point of the map with coordinates
    var coordinates = new google.maps.LatLng(53.1508401,17.9076419,17);
    //initial map parameters
    var mapOption = {
        zoom: 10,
        center: coordinates,
        mapTypedId: google.maps.MapTypeId.ROADMAP
    };
    var map =  new google.maps.Map(document.getElementById("map"),mapOption);
    //creating a marker
    var point = new google.maps.LatLng(53.1508401,17.9076419,17);
    var markerOption = {
        position: point,
        map: map,
        title: "Fresh-dent"
    };
    var marker =  new google.maps.Marker(markerOption);
}
