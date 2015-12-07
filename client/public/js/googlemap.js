// $(document).on('ready', function(){
  // initialize();
// });
// function initialize() {

  // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "road",
      stylers: [
        { hue: "#00ff00" }
    ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(39.7351193,-104.9909746),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
// }

// // *** Google Maps API ***
// // There are three (3) parts to successfully loading a google Maps API:
// //
// // First, you must designate a space for the map to be displayed on the HTML page (<div class="map-canvas">)
// // Second, you must load the Google Maps API v3 with a script tag, usually in the head of the views file. In TripStacker, we loaded it after the footer in the <body> tag.
// // Third, you must initialize the map with JavaScript. You can add a script tag directly in the HTML file, or you can require a separate Javascript file that initializes the map.

// // * initialize new google maps LatLng object *
// // the process of turning an address into a geographic point is known as geocoding.
// var latAndLong = new google.maps.LatLng(39.7351193,-104.9909746);





// // * create a Map options object *
// // these options are used to initialize the map's properties
// // center (what map will focus on) and zoom (0-22) are required fields. There are optional fields such as mapTypeId (ROADMAP, SATELLITE, HYBRID, TERRAIN).
// var mapOptions = {
//   center: latAndLong,
//   zoom: 13,
//   mapTypeId: google.maps.MapTypeId.ROADMAP

// };

// // * get the maps div's HTML obj *
// // this step was superfluous, but it shows how we can save the DOM element as a JavaScript variable
// // var map_canvas_obj = document.getElementById("map-canvas");

// // * create a map object with the Map constructor function. *
// // Map takes two parameters: DOM element and mapOptions object *
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// // * add a marker to the page with the Marker constructor *
// // Marker constructor takes a single object literal, which specifies the initial properties of the marker (position, map)
// // Google has a tutorial for markers: http://bit.ly/MpWc8W
// // Stack Overflow thread on changing color: http://bit.ly/1faa0yW
// var initialMarker = new google.maps.Marker({
//                     position: latAndLong,
//                     map: map,
//                     title: "Hello, Fullstack!",
//                     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
//                   });

var DenverArtMuseum = new google.maps.Marker({ position: {lat: 39.736164, lng: -104.989200}, map: map
 });

// // google.maps.event.addDomListener(window, 'load');
// console.log("Map initialized.");

// // Google recommends => google.maps.event.addDomListener(window, 'load', initialize);
// // Alternatively, you could wrap the entire API in a $(document).ready tag.
// // google.maps.event.addDomListener(window, 'load', initialize);