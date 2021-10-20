
function getAllCombinationsOfASet(text) {
    var results = [];
    for (var i = 0; i < text.length; i++) {
      // Record size as the list will change
      var resultsLength = results.length;
      for (var j = 0; j < resultsLength; j++) {
        results.push(text[i] + results[j]);
      }
      results.push(text[i]);
    }



    const splitter= results
                    .map(x=>(x.split("")));

    const combos = splitter
                    .map(x=>x.map(z=>parseInt(z)));


//let combos=[ [ 2, 1 ],[ 3, 2 ]]

let candidateArr=[[]];
let candidateI="";
let candidateZ="";
let counter=-1;


    console.log(combos);

    //console.log(combos.length);
    //console.log(combos[6][6]);

       for(let i =0; i<combos.length-1;i++){
          

         for (let z=i+1;z<combos.length;z++){
                     //console.log(i+""+z);
                  if(candidateI!=="" && candidateZ!==""){       

                      counter++
                      if (!candidateArr[counter]) candidateArr[counter] = [] 
                      console.log(candidateI + "   " + candidateZ);

                        candidateArr[counter][candidateI]=combos[candidateI];
                        candidateArr[counter][candidateZ]=combos[candidateZ];
                  }

                  //if statement to assess order. For example check if
                  //combos[i].length<combos[z].length then do as follows
                  //else reverse order of for (first k then j)
  
        loop:  for(let j=0;j<combos[i].length;j++){

                  for(let k=0;k<combos[z].length;k++){   

                        candidateI="";
                        candidateZ="";

                     if(combos[i][j]!==combos[z][k]){

                        candidateI=i;
                        candidateZ=z;

                       }else{

                         candidateI="";
                         candidateZ="";
                         break loop;
                                    }
    }
      }
        }
         }
                         return combos;

 }



    getAllCombinationsOfASet("123");



//   const dummyF=()=>
//   {
//         const combos = getAllCombinationsOfASet("1234");
//   }
// //dummyF();


