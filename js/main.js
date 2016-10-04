$(function() {
    $(".col-content-wrap, .buy-text" ).click(function() {
      $( this ).parents(".col:not(.disabled)").toggleClass( "selected" );
    });
});
