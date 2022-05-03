let numCheck = false;
function addnum(char){
  let inum = document.getElementById('inum');
  if(numCheck==false){
    if(isNaN(char)==true){
    }else{
      inum.value = inum.value + char;
    }
  }else{
    inum.value = inum.value + char;
  }

  if(isNaN(char)==true){
    numCheck = false;
  }else{
    numCheck = true;
  }
  

}


function calculate(){
  let rt = document.getElementById('inum').value;
  let result = document.getElementById('result');
  let TotalResult = eval(rt);
  result.value = result.value + TotalResult;
}

