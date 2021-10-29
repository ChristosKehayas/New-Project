function* permutator(permutation) {
  var length = permutation.length,
      c = Array(length).fill(0),
      i = 1, k, p;

  yield permutation.slice();
  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      yield permutation.slice();
    } else {
      c[i] = 0;
      ++i;
    }
  }
}
  
const paySettle = (debtInput)=>{


 
  let humans= ["A","B","C","D","E","F","G","H"]; //need to call function that will take debtInput here and will return permutated humans.
  
  let debt=debtInput;                                                                                                                                    // and who is owned (negative)   
  let stateC=0;
  let stateD=0;
  let StateDim=-1;
  let negtracker=-1;
  let postracker=-1;
  let Remainder=0;
  let storage=0;
  let State=[];
  
  
  for (let i=0;i<debt.length;i++){
      if (debt[i]<0){
          negtracker=i;
          stateC++;
          
      }//end if
      
      for (let j=0;j<debt.length;j++){
          if(debt[j]>0){
             postracker=j;
             stateC++
              
           
          } //end if
  
          if (stateC>stateD && negtracker!==-1 && postracker!==-1 && debt[negtracker]!==0 && debt[postracker]!==0){
  
                  //stateC updates when a positive or negative balance has been spotted.
                  //This is not enough though - it might update StateC without updating the +ve or -ve trackers (thus returnig NaNs)
                  //We also don't have to loop when debt[X] is zero as acount balance has been settled.
                  
                  StateDim++
                  stateD=stateC;
                  Remainder=debt[negtracker]+debt[postracker];
  
                 
                  if(Remainder<=0){
                      storage =debt[postracker];
                      debt[negtracker]=Remainder;
                      debt[postracker]=0;
                      State[StateDim]=humans[postracker]+ "--> "+ humans[negtracker]+" " +storage;
                     
                      
                      } else {
                          storage=-debt[negtracker];
                          debt[negtracker]=0;
                          debt[postracker]=Remainder;
                          State[StateDim]=humans[postracker]+ "--> "+ humans[negtracker]+ " "+storage;
                   
                       
                      }
                      //end if 
          }//end if
      }//Next j
  }//Next i
  
   //console.log(State);
  
   return State;
  
  }

const countPos = (arr)=>{
  let poscounter=0;
  let negcounter=0;
  for (let i =0; i<arr.length;i++){
    if(arr[i]>0){poscounter++}else{
      if(arr[i]<0){negcounter++}
      
    }
  }

  return {poscounter, negcounter};
}


const trackerCalc=(debtInput)=>{

let permutatedInput= [...permutator(debtInput)].slice(0);
let minL=paySettle(permutatedInput[0].slice(0)).length;
console.log(paySettle(permutatedInput[0].slice(0)))
let maxL=Math.max(countPos(debtInput).poscounter, countPos(debtInput).negcounter);
let result=paySettle(permutatedInput[0].slice(0));


  for (let i=1; i<permutatedInput.length;i++){   
    
  if(paySettle(permutatedInput[i].slice(0)).length<=maxL ){
    result=paySettle(permutatedInput[i].slice(0));
    // result.push(paySettle(permutatedInput[i].slice(0)));
    break;
  }else{
    if(paySettle(permutatedInput[i].slice(0)).length<=minL){  
      result=paySettle(permutatedInput[i].slice(0))
      minL=paySettle(permutatedInput[i].slice(0)).length;
      //result.push(paySettle(permutatedInput[i].slice(0)));
    }
  }
}


return result;

}


let maping= {
	humans:["A","B","C","D","E"], 
	moneySpent:[30,40,0,10,20]
};

const target = maping.moneySpent.reduce(
(accumulator, a) => accumulator+a  
	  ,0)/maping.moneySpent.length; //reduce reduces an array to a single digit
									//target is the amount to be reached by all participants

let debt=maping.moneySpent.map(x=>target-x);
//console.log(debt);

trackerCalc(debt);


