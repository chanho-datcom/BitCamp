function space(){
  let d = $("#Uname").val();
  if($("#Uname").val()=="" || $("#Uaddress").val()=="" || $("#Unumber").val()=="" || $("#Uid").val()=="" || $("#Upwd").val()==""){
    alert("다시 입력하세요");
  }else{
    
    $("#submit").prop("type", "submit");
    alert(d);
  }
}
//   // $(".User_info").val() = $("User_info").val().replace(" ", "");
// }

// // $(".User_info").change(function(){
// //   console.log("hello")
// //   $(".User_info").value = $("User_info").value.replace(" ", "");
// // }