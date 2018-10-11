//check that my script, lodash and jquerty are ready
//console.log('ready',_,$);

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

// helper function get geoCodeAddress
function geoCodeAddress(address){
     return new Promise((resolve,reject)=>{

                geocoder.geocode({'address': address}, function(results,status){

                     if(status == google.maps.GeocoderStatus.OK){

                        resolve(results);

                     } else {

                       reject(status);

                     }
                });
     });
}

//declare callback for google maps api located in script on index.html file

const initMap = function(){
  map = new google.maps.Map(mapNode,{
      center: {lat: 52.6351223 , lng: 1.28681},
      zoom: 14
  });

  markers = [];
  geocoder = new google.maps.Geocoder();
  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
}

//add event listnener to search location

document.getElementById('searchButton').addEventListener('click',(event)=>{
   // event.preventDefault();
   let searchTerm, location, radius,country;
   searchTerm = document.getElementById('searchTerm').value;
   location = document.getElementById('location').value;
   radius = document.getElementById('mileRadius').value;
   country = document.getElementById('selectCountry').value;
   //validation if no value return false ... to add
   console.log(searchTerm,typeof location,radius,`${country} ${location}`);


   geoCodeAddress(`${location}, ${country}`).then((result)=>{
     console.log(result,'from geo coder');
   }).catch((status)=>console.log(status));

});



