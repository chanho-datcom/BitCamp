let members=[

  ["kim","seoul","010-2211-0987","admin","1234##"],
  
  ["unknown","japan","010-5541-2234","html5","!2234@@"],
  
  ["john","us","010-4439-9876","javaman","**777**"],
  
  ["choi","china","010-9987-6546","ps5","%%1111"],
  
  ["jack","aus","010-2744-2988","xbox","98765$$"]
  
  ];
let i =0;
console.log(members.length);

function search_by_name(search_name){
  search_name = document.getElementById('id_search_box').value;
  for(i=0;i<members.length;i++){
    if(search_name == members[i][0]){
      document.getElementById('p1').innerHTML = members[i][0];
      return false;
    }
    else{
      document.getElementById('p1').innerHTML = "그런 이름은 없다"
      return false;
    }
  }
}