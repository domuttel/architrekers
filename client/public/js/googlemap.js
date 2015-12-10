

  // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#aeea00" },
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "ARCHiTREK"});
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;


  // Create a map object, and include the MapTypeId to add
  // to the map type control.

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 39.7371878, lng: -104.9893451}
  });
  directionsDisplay.setMap(map);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

/////////////////////////



var point1 = new google.maps.LatLng(39.7371878,-104.9893451);
var point2 = new google.maps.LatLng(39.752651, -105.001685);
var point3 = new google.maps.LatLng(39.7378285, -104.987871);

// build an array of the points
var wps = [{ location: point1 }, { location: point2 }, {location: point3}];

// set the origin and destination
var org = new google.maps.LatLng ( 39.772329, -104.983799);
var dest = new google.maps.LatLng ( 39.744452, -104.9867323);

function drawRoute (org, dest, wps) {
  return directionsService.route({
        origin: org,
        destination: dest,
        waypoints: wps,
        travelMode: google.maps.DirectionsTravelMode.WALKING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);

    } else {
      window.alert('Directions request failed due to ' + status);
    }

  });
}



//** DENVER ART MUSEUM **//
var damContentString = "<h1>Denver Art Museum</h1> <h6>The North Building</h6><p>The North Building or 'Gio Ponti Wing', a major and distinctive seven-story 210,000-ft2 addition, opened in 1971. It allowed the museum to finally display its collections under one roof. The building was designed by Italian modernist architect <a href='https://en.wikipedia.org/wiki/Gio_Ponti' title='Gio Ponti'>Gio Ponti</a>, with local architects James Sudler Assoc. of Denver. Ponti said that “Art is a treasure, and these thin but jealous walls defend it.” It is his only completed design built in the United States.[4] Ponti wanted the DAM building, housing the important art within, to break from the traditional museum archetypes by placing more than a million reflective glass tiles on the building’s exterior, along with a dramatic “castle-like” façade. The architecturally unique tower building has 24 sides, and is clad in reflective grey glass tiles specially designed by Dow Corning.<p/><h6>The Duncan Pavilion</h6><p>The Duncan Pavilion is a second story addition to the Morgan Wing of the Denver Art Museum, opened in February 2006. It is a link between the new <a href='https://en.wikipedia.org/wiki/Daniel_Libeskind' title='Daniel Libeskind'> Daniel Libeskind </a>designed Hamilton Building and the existing art museum buildings, including the famous 1971 Geo Ponti designed North Building tower.</p>" +
"<p>The project's intent included preserving the integrity of the oldest part of the museum, the landmark Morgan Wing of the art museum built in 1954, while providing a significant mechanical upgrade for it.</p>" + "<p>The Duncan Pavilion's open assembly area receives the pedestrian bridge from the Hamilton Building with a new pedestrian elevator and monumental glass stair linking pedestrian traffic to the existing Signature Gallery on the first floor. The strongly day lighted space provides a sense of transition between the new and old buildings and a resting point. An upgraded extension of the existing freight elevator creates the final link in the system facilitating artwork traffic between the existing and new buildings so the artwork can be received and serviced in the Hamilton Building and transported to and from the Ponti building’s gallery without exiting the protective environment of the museum.</p>" + "<p>The new rooftop patio provides panoramic city views of the City Capitol, Civic Center Park, Denver Library, Wellington Webb and other buildings as well as the unique view of standing directly under the new Hamilton Building “prow” almost exactly as you exit the building onto the patio, creating a very dramatic effect.</p>" + "<h6>Hamilton Building</h6><p>The Frederic C. Hamilton Building holds the Modern and Contemporary art collection, along with the Architecture and Design collection, and Oceanic art collection. The unique building also serves as the main entrance to the rest of the museum complex.[8] This ambitious project doubled the size of the museum, allowing for an expansion of the art on view, inside a bold aesthetic facade.</p>" + "<p> The complex deconstructivist geometric design of the Hamilton building consists 20 sloping planes, covered in 230,000 square feet of titanium shingles. The angular design juts in many directions, supported by a 2,740-ton structure that contains more than 3,100 pieces of steel. One of the angled elements extends 100 feet (30 m) over the street below. None of the 20 planes is parallel or perpendicular to another.</p>" + "<p>The design uses many extended angular planes to be reminiscent of the natural landscape. Similar to the peaked roof of the Denver International Airport, the Hamilton building emulates the sharp angles of the nearby Rocky Mountains, as well as the geometric crystals found at the mountains' base near Denver. Daniel Libeskind, architect of the building, said “I was inspired by the light and geology of the Rockies, but most of all by the wide-open faces of the people of Denver.”[10] The titanium panels also reflect the light of the Colorado sunshine.";

var daminfowindow = new google.maps.InfoWindow({
    content: damContentString
});


var DenverArtMuseum = new google.maps.Marker({ position: {lat: 39.7371878, lng: -104.9893451}, map: map,
  title: location[0]
 });

DenverArtMuseum.addListener('click', function(a,b) {

    daminfowindow.open(map, DenverArtMuseum);
});

//** MUSEUM OF CONTEMPORARY ART **//

  var mcacontentString = "<h1>Museum of Contemporary Art Denver</h1><p>In October 2007, under the directorship of Cydney Payton, MCA Denver opened its new, 27,000-square foot, environmentally sustainable facility in lower downtown Denver designed by architect <a href='https://en.wikipedia.org/wiki/David_Adjaye' title='David Adjaye'>David Adjaye</a> of Adjaye Associates (UK).The building, Adjaye's first museum commission, was designed to minimize boundaries between the exterior spaces of the city and the interior galleries of the museum. Hidden skylights fill the interior spaces with natural light, and large windows look out on the city streets. The building has five galleries as well as dedicated education spaces, a shop, library and rooftop cafe.</p>";

  var mcainfowindow = new google.maps.InfoWindow({
    content: mcacontentString
  });

  var McaDenver = new google.maps.Marker({ position: {lat: 39.751665, lng: -105.001312},
    map: map,
    title: location[1]
  });

  McaDenver.addListener('click', function() {
    mcainfowindow.open(map, McaDenver);
  });

//** Union Station **//
  var unionContentString = "<h1>Union Station</h1>";

  var unioninfowindow = new google.maps.InfoWindow({
    content: unionContentString
  });


  var UnionStation = new google.maps.Marker({ position: {lat: 39.752651, lng: -105.001685},
    map: map,
    title: location[2]
  });

  UnionStation.addListener('click', function() {
    unioninfowindow.open(map, UnionStation);
  });

//** Denver Central Library **//
  var centralLibraryContentString = "<h1>Denver Central Library</h1>";

  var centrallibraryinfowindow = new google.maps.InfoWindow({
      content: centralLibraryContentString
  });


  var DenverCentralLibrary = new google.maps.Marker({ position: {lat: 39.7378285, lng: -104.987871},
    map: map,
    title: location[3]
  });

  DenverCentralLibrary.addListener('click', function() {
    centrallibraryinfowindow.open(map, DenverCentralLibrary);
  });

//** Ellie Caulkins Opera House **//
  var ellieContentString = "<h1>Ellie Caulkins Opera House</h1>";

  var ellieinfowindow = new google.maps.InfoWindow({
      content: ellieContentString
  });


  var EllieCaulkinsOperaHouse = new google.maps.Marker({ position: {lat: 39.7452546, lng: -104.998336},
    map: map,
    title: location[4]
  });

  EllieCaulkinsOperaHouse.addListener('click', function() {
    ellieinfowindow.open(map, EllieCaulkinsOperaHouse);
  });

//** Wells Fargo Center **//
  var wellsContentString = "<h1>Wells Fargo Center</h1>";

  var wellsinfowindow = new google.maps.InfoWindow({
      content: wellsContentString
  });


  var WellsFargoCenter = new google.maps.Marker({ position: {lat: 39.744452, lng: -104.9867323},
    map: map,
    title: location[5]
  });

  WellsFargoCenter.addListener('click', function() {
    wellsinfowindow.open(map, WellsFargoCenter);
  });

//** Taxi **//
  var taxiContentString = "<h1>Taxi</h1>";

  var taxiinfowindow = new google.maps.InfoWindow({
      content: taxiContentString
  });


  var Taxi = new google.maps.Marker({ position: {lat: 39.772329, lng: -104.983799},
    map: map,
    title: location[6]
  });

  Taxi.addListener('click', function() {
    taxiinfowindow.open(map, Taxi);



  });
