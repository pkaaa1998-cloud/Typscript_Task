//---------------------------square fill pattern-----------------------------//
 let n1=6;
 for(let i=1;i<=n1;i++){
  let row ="";
  for(let j=1;j<=n1;j++){
    row +="*";
  }
  console.log(row);
 }  

//------------------number increasing pyramid--------------------//

let n2=4;
for(let i=1;i<=n2;i++){
  let row="";
for(let j=1;j<=i;j++){
  row+=i+"";
}
console.log(row);
}
 
//-------------number incress reverse pyramid-------------------//
 

  let n3=4;

 for(let i=n3;i>=1;i--){
  let row="";
  for(let j=1;j<=i;j++){
    row+=j+"";
  }
  console.log(row); 
  
}    
//-----------------------  number changing pyramid-------------------------------------//
 
let n4=4;
let num=1;
for(let i=1;i<=n4;i++){
  let row="";
for(let j=1;j<=i;j++){
  row+=num+"";
  num++;
}
console.log(row);
}
//----------------------triangle star pattern------------------------------------------------------//

  let n5= 5;
for (let i = 1; i <= n5; i++) {
  let row = " ";
  for(let s=1;s<=n5-i;s++){
    row+=" ";
  }
  for (let j= 1; j <=i; j++) {
   row+= " * ";

  }
  console.log(row); 
}  
//--------------------------------revers number triangle pattern-----------------------------------//
 let m=4;
for(let i=1;i<=m;i++){
  let row="";
  for(let s=1;s<=i;s++){
    row+=" ";
  }
  for(let j=i;j<=m;j++){
    row+=j+" ";
    }
    console.log(row);
}

//----------------------------right half pyramid ---------------------------------//

 let m1= 5;
for (let i = 1; i <= m1; i++) {
  let row = "";

  for (let j= 1; j <=i; j++) {
   row+= "*";

  }
  console.log(row); 
} 

//------------------------reverse right half pyramid---------------------//
 let m2= 5;
for (let i = m2; i >= 1; i--) {
  let row = "";

  for (let j= 1; j <=i; j++) {
   row+= "*";

  }
  console.log(row); 
}
 

//---------------------------left half pyramid--------------------------------------------//
 let m3=5;
    for (let i = 1; i <= m3; i++) {
        let row = "";

        for (let s = 1; s <= m3 - i; s++) {
            row += "  ";
        }

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }

        console.log(row);
    }  
//---------------------------reverse left half pyramid---------------------------------//
 let m4=5;
    for (let i = m4; i >= 1; i--) {
        let row = "";

        for (let s = 1; s <= m4 - i; s++) {
            row += "  ";
        }

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }

        console.log(row);
    } 

//---------------------------------zero-one triangle------------------------------------------------//
 let m5=4;
 for(let i=1;i<=m5;i++){
  let row ="";

  for(let j=1;j<=i;j++){
    row +=(i+j)%2===0?" 1 " : " 0 ";
  }
  console.log(row);
 }  

  //---------------------number triangular pattern-------------------------//
   let a=4;
  for(let i=1;i<=a;i++){
    let row="";
  for(let s=1;s<=a-i;s++){
    row+=" ";
  }
  for(let j=1;j<=i;j++){
    row+=i+" ";
  }
  console.log(row);
  } 
 //------------------------rhoombus pattern----------------------------//
 let n=5;
 for(let i=1;i<=n;i++){
  let row=" ";
  for (let s = 1; s <= n-i; s++) {
      row +=" ";
  } 
 for (let j=1;j<=n;j++){
  row+="* ";
 } 
 console.log(row);
} 