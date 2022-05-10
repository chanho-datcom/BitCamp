'use strict'

let d = true;
function view(){
  const div2 = document.querySelector('.div2');
  if(d){
    div2.style.display = "block";
  }else{
    div2.style.display = "none";
  }
  d = !d;
}
