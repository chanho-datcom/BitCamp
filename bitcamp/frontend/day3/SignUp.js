window.onload = init;
function init(){
  const button = document.getElementById("rt");
  button.onclick = handlebuttonclick;
}sss
function handlebuttonclick(){
  const Uname = document.getElementById('Uname').value;
  const Uaddress = document.getElementById('Uaddress').value;
  const Uid = document.getElementById('Uid').value;
  const Upwd = document.getElementById('Upwd').value;
  const Unumber = document.getElementById('Unumber').value;


  const li = document.createElement('li');
  li.innerHTML = Uname;
  const ul = document.getElementById('result');
  ul.appendChild(li);

  alert(Uname, Uaddress, Uid, Unumber, Upwd).value;
  
}