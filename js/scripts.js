$(document).ready(function() {
  $("#blanks form").submit(function(event) {

   $(".person1").text($("input#person1").val());
   $(".noun1").text($("input#noun1").val());
   $(".verb1").text($("input#verb1").val());
   $(".noun2").text($("input#noun2").val());
   $(".uppercase").text( $("input#uppercase").toUpperCase() );

   $("#story, .uppercase").show();

   event.preventDefault();
 });
});
