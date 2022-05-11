// =====================================================================
// step1
// 일단 어떤 박스를 필터링할건지 정한다.
// 그 박스의 valUe를 가져온다
// 가져온 valUe를 일단 alert해서 확인하다
// =====================================================================
// step2
// 박스의 값을 별도의 변수에 저장한다
// 저장된 값에서 공백을 제거한다. (space바를 누르면 데이터가 들어감)
// 공백을 제거하는 방법은 .trim() 이라는 명령어를 사용한다.AbortController
// ======================================================================
// step3
// 제거하고 난 후에 데이터가 진짜로 NULL이면 에러처리함 (경고창을 띄워줌)
// 경고창을 닫고난 후에는 더이상 진행이 되면 안된다.

function check(){
  let Uname = document.getElementById('Uname').value;
  document.getElementById('Uname').value = Uname.replace(/(\s*)/g, "");
  let Uaddress = document.getElementById('Uaddress').value;
  document.getElementById('Uaddress').value = Uaddress.replace(/(\s*)/g, "");
  let Unumber = document.getElementById('Unumber').value;
  document.getElementById('Unumber').value = Unumber.replace(/(\s*)/g, "");
  let Uid = document.getElementById('Uid').value;
  document.getElementById('Uid').value = Uid.replace(/(\s*)/g, "");
  let Upwd = document.getElementById('Upwd').value;
  document.getElementById('Upwd').value = Upwd.replace(/(\s*)/g, "");

  if(Uname.replace(/\s /gi, "").length == 0){
    alert("이름을 입력해주어라");
    document.getElementById('Uname').focus();
    return false;
  }else if(Uaddress.replace(/\s /gi, "").length == 0){
    alert("주소을 입력해주어라");
    document.getElementById('Uaddress').focus();
    return false;
  }else if(Unumber.replace(/\s /gi, "").length == 0){
    alert("전화번호를 입력해주어라");
    document.getElementById('UnUmber').focus();
    return false;
  }else if(Uid.replace(/\s /gi, "").length == 0){
    alert("아이디를 입력해주어라");
    document.getElementById('Uid').focus();
    return false;
  }else if(Upwd.replace(/\s /gi, "").length == 0){
    alert("패스워드를 입력해주어라");
    document.getElementById('Upwd').focus();
    return false;
  }
  Store();
}
