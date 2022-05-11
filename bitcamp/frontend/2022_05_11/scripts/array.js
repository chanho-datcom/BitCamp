// let games=["godofwar", "uncharted4", "lastofus", "infamous"];

// let members_info = [
//   ["박씨", "성남"],
//   ["이씨", "대전"],
//   ["진씨", "양평"],
//   ["조씨", "파주"]
// ];
// let i;
// let j;
// console.log(members_info.length);
// for(i=0; i<members_info.length; i++){
//   console.log("hi");
//   document.write(members_info[i][0]);
//   document.write("&nbsp");
//   document.write(members_info[i][1]);
//   document.write("&nbsp");
//   document.write("<hr/>")
// }
let i;
let j;

document.write("<table border=1>")
for(i=0; i<5; i++){
  document.write("<tr></tr>")

  for(j=0; j<3;j++){
    document.write("<td>a</td>")
  }
}
document.write("</table>")

// function calc(a, b){
//   return a+b;  
// }
// let c = calc(1, 2)
// document.write(c);