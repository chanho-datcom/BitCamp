$(document).ready(function(){
  $("#div2").hide();
  $("#div3").hide();
  $("#p1").click(function(){
    $("#div3").hide();
    $("#div2").fadeToggle(500);
  });
  $("#p2").click(function(){
    $("#div3").fadeToggle(500);
    $("#div2").hide();
  });
  
});