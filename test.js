

var combine = function(a, min) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}

function intersect(a, b) {
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
}


let breakdown=[];
let subarray=[];
arraytobebroken=[1,2,3,4,5,6];

 const breaker = (firstNumber)=>{


subarray[0]=firstNumber;
subarray[1]= arraytobebroken.length-firstNumber;
let index=1;
breakdown.push(subarray.slice(0));
 

while(subarray[1]!==1){
    index++
    subarray[1]=subarray[1]-1;
    subarray[index]=1
    breakdown.push(subarray.slice(0));
    
}

return breakdown;
}

arrayToBeCombined=arraytobebroken;
allCombinations = combine(arrayToBeCombined, 1)
breakOutput=breaker(1); //[1,3,1,1]


 //console.log(allCombinations);
console.log(breakOutput);
let finalArr=[];


    
        for (let brLength of breakOutput) {
            loop: for (let combElem of allCombinations){
                    if(combElem.length==brLength){
                        if( finalArr==0){
                            finalArr.push([1]); //maybe this first element should come from an external loop of length [1,3,1,1] which will be 1 (first one?)
                            break loop;
                        }else{ 
                            for (let finalArrElem of finalArr){
                                tracker=0;
                            if(intersect(combElem,finalArrElem)==0){ // no common elements
                                tracker++
                            
                            }else{
                                tracker=0;
                                continue loop;
                            }
                        }
                        if(tracker==!0){
                            finalArr.push(combElem);
                            break loop;
                        }
                    }
                    

                    }

            }
            }


   console.log(finalArr);
