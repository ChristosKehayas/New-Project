
const paySettle = ()=>{

let maping= {
                humans:["A","B","C","D","E"], 
                moneySpent:[10,20,30,40,0]
            };


const target = maping.moneySpent.reduce(
    (accumulator, a) => accumulator+a  
                  ,0)/maping.moneySpent.length; //reduce reduces an array to a single digit
                                                //target is the amount to be reached by all participants

  let debt=maping.moneySpent.map(x=>target-x);  //loops through all elements of array and calculates
                                                 // differences from target
                                                //in order to identify who owns (positive)                                         
                                                // and who is owned (negative)   
console.log(debt)

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
                    State[StateDim]=maping.humans[postracker]+ "--> "+ maping.humans[negtracker]+" " +storage;
                   
                    
                    } else {
                        storage=-debt[negtracker];
                        debt[negtracker]=0;
                        debt[postracker]=Remainder;
                        State[StateDim]=maping.humans[postracker]+ "--> "+ maping.humans[negtracker]+ " "+storage;
                 
                     
                    }
                    //end if 
        }//end if
    }//Next j
}//Next i

 console.log(State);
 return State;

}

paySettle();
