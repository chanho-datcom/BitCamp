function appendImg() {
  var img1 = "<li class='info1'><img id='img1' onclick='info()' src='./img/homecoming.jpg'></li>"; // Create text with HTML
  var img2 = "<li class='info2'><img id='img2' onclick='info()' src='./img/farfromehome.jpg'></li>";
  var img3 = "<li class='info3'><img id='img3' onclick='info()' src='./img/noway.jpg'></li>";
  $("ul").append(img1, img2, img3); // Append new elements
  $('li').css("display", "inline");
}

function removeImg(){
  $("li").remove();
}

function info(){
  console.log('ji')

  let text1 = "<label>spiderman : homecoming!</label>"
  let text2 = "<label>spiderman : farfromhome!</label>"
  let text3 = "<label>spiderman : no way home!</label>"
  $('.info1').prepend(text1);
  $('.info2').prepend(text2);
  $('.info3').prepend(text3);
    
}