let Uid = "";
let Upwd = "";

function Signup(){
  Uid = document.getElementById('Uid').value;
  console.log(Uid);
  Upwd = document.getElementById('Upwd').value;
}

function Signin(){
  authid = document.getElementById('authID').value;
  authPwd = document.getElementById('authPwd').value;

  if((authid == Uid) && (authPwd==Upwd)){
    alert("success")
  }
}