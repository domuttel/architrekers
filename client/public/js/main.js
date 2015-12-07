// add scripts

$(document).on('ready', function() {
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
