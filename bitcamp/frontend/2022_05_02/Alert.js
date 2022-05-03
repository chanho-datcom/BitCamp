
let count = -1;

function Alert() {
  const qArr = ["html", "css", "js"];

  count = count + 1;

  console.log(count);
  
  if (count == 0) {
    //alert(qArr[count]);
    document.getElementById('p1').innerHTML = qArr[count];
  } else if (count == 1) {
    //alert(qArr[count]);
    document.getElementById('p1').innerHTML = qArr[count];
  } else {
    //alert(qArr[count]);
    document.getElementById('p1').innerHTML = qArr[count];
    count = -1;
  }
  
}
function Alert2() {
  let data = 20;
  let data2 = 3;
  let result = 0;
  result = Math.round(data/data2);
  alert(Math.round(data/data2));
  }