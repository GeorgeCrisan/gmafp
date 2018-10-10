//check that my script, lodash and jquerty are ready

console.log('ready',_,$);

// declare vars

let map, markers, service, bounds, infoWindow, geocoder,mapNode;
mapNode = document.getElementById('map');

//helper function clear location 

function clearLocations(){
   markers.forEach(element => {

    element.setMap(null);
     
   });
   markers = [];
}

//declare callback for google maps api located in script on index.html file

const initMap = function(){
  map = new google.maps.Map(mapNode,{
      center: {lat: 52.6351223 , lng: 1.28681},
      zoom: 14
  });

  markers = [];
  geocoder = google.maps.Geocoder();
  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
}

//add event listnener to search location

document.getElementById('searchButton').addEventListener('click',(event)=>{
   // event.preventDefault();
   let searchTerm, location, radius;
   searchTerm = document.getElementById('searchTerm').value;
   location = document.getElementById('location').value;
   radius = document.getElementById('mileRadius').value;
   //validation if no value return false ... to add
   console.log(searchTerm,location,radius);

});

