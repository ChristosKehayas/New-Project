
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

    //console.log(results[14].split(""));
    //console.log(parseInt(results[15].split("")[0]));

    const splitter= results
                    .map(x=>(x.split("")));

    const combos = splitter
                    .map(x=>x.map(z=>parseInt(z)));


   // const d= ar.concat(combos[0],combos[2],combos[6]);



    console.log(combos);
    //console.log(combos.length);
    //console.log(combos[6][6]);

 let inspector=[];


    for(let i =0; i<combos.length-1;i++){


            for (let z=i+1;z<combos.length;z++){
                     //console.log(i+""+z);
              if (!inspector[i]) inspector[i] = []

                for(let j=0;j<combos[i].length;j++){

                  for(let k=0;k<combos[z].length;k++){

                    if(combos[i][j]!==combos[z][k]){

            
                      //match i and z
                      inspector[i][z]=z;

                      }else{

                      inspector[i][z]="";

                            }
                                                      }
                                                    }

                      //}

                                            }

        }

      console.log(inspector);

        return combos;

    }



    getAllCombinationsOfASet("123");


//   const dummyF=()=>
//   {
//         const combos = getAllCombinationsOfASet("1234");
//   }
// //dummyF();


