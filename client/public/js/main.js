// add scripts

$(document).on('ready', function() {
     for (var i = 0; i < locations.length; i++) {
      $('#location').append('<br><br>Title: '+locations[i].title + '<br>Address: '+locations[i].address+'<br>Architect and/or Firm: '+locations[i].architectAndOrFirm + '<div class="row"><a class="waves-effect waves-light lime accent-4 btn" id="g-login">Add Comment</a></div>');
  }
  console.log('sanity check!');
});


// Side Nav Functionality
$( document ).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});



$( ".freedom-nav-logo" ).css( {"margin-top": "4px", "margin-right": "15px"} );
