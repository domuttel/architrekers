// add scripts



// Side Nav Functionality
$( document ).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  $('ul.tabs').tabs('select_tab', 'tab_id');
       for (var i = 0; i < locations.length; i++) {
      $('#location').append('<div id="list" class="row">'+locations[i].title + '<hr>'+locations[i].address+'<hr>Architect and/or Firm: '+locations[i].architectAndOrFirm + '<br><a class="waves-effect waves-light lime accent-4 btn"><i class="tiny material-icons">control_point</i>Add Comment</a><a class="waves-effect waves-light lime accent-4 btn"><i class="tiny material-icons">remove_red_eye</i>View Comments</a></div><br>');
  }
});

$( ".freedom-nav-logo" ).css( {"margin-top": "4px", "margin-right": "15px"} );



$("#route").on("click", function(){
  drawRoute(org, dest, wps);
});

$("#locations").on("click", function(){
directionsDisplay.set('directions', null)
});




