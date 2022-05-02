window.onload = init;
function init(){
  const button = document.getElementById("rt");
  button.onclick = handlebuttonclick;
}
function handlebuttonclick(){
  const q = document.getElementsByName('chk_info')


  alert("button was clicked!");
  var textinput = document.getElementById("songtextinput");
  var songname = textinput.value;
  var li = document.createElement("li");
  li.innerHTML = songname;
  var ul = document.getElementById("playlist");
  ul.appendChild(li);
  save(songname);
}