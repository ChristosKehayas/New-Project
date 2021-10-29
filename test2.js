
// let maping= {


//     humans:["A","B","C","D"], 
//     moneySpent:[10,2,20,12]
// };

// let a = permutator(maping.humans);
// let b = permutator(maping.moneySpent);

// console.log(a[15],b[15]);

// const target = maping.moneySpent.reduce(
// (accumulator, a) => accumulator+a  
//       ,0)/maping.moneySpent.length; //reduce reduces an array to a single digit
//                                     //target is the amount to be reached by all participants

// let debt=maping.moneySpent.map(x=>target-x);


//next step: map a debt value to a name.



//var Map = {};


// Map["foo"] = 5;
// Map["foo"] = Map["foo"] * 5;
// Map["bar"] = 10;
// Map["baz"] = Map["foo"] + Map["bar"];


// console.log(Map.baz);


let maping= {
	humans:["A","B","C","D","E","F","G","H"], 
	moneySpent:[10,0,20,0,40,34,12,0]
};



const target = maping.moneySpent.reduce(
(accumulator, a) => accumulator+a  
	  ,0)/maping.moneySpent.length; //reduce reduces an array to a single digit
									//target is the amount to be reached by all participants

//let debt=maping.moneySpent.map(x=>target-x);
//console.log(debt)

let humans=["A","B","C"]
let debt=[10,20,30]

// class Participant {
// 	constructor(name, debt) {
// 	  this.name = name;
// 	  this.debt = debt;
// 	}
//   }

 class Debt {
	 constructor(debt){
		 this.debt=debt;
	 }
 }

let debtObj = debt.map(item=>{
	let newDebt = new Debt(item)
	return newDebt;
})
 console.log(debtObj);


const arr1 = [  {"debt":debt[0],"name":humans[0]},{"debt":debt[1],"name":humans[1]},
					{"debt":debt[2],"name":humans[2]}]


const arr2 = [{"debt":debt[1]}, {"debt":debt[0]}, {"debt":debt[2]}]


const result = arr2.map(item=>{

	const newItem=item;
	
	arr1.forEach(item2=>{

		
		if(item.debt===item2.debt){
			newItem.name=item2.name;
		}
	});

return newItem

});


let newNames=[];

	for (let i =0;i<result.length;i++){
	newNames.push(result[i].name);
	}


// console.log(humans);
// console.log(newNames);



//flip debt flip humans accordingly.

// [
// 	4.5,  14.5,  -5.5,
// 	14.5, -25.5, -19.5,
// 	 2.5,  14.5
//   ] this is the output from the debt. 
//This corresponds to A->4.5, B->14.5 etc. I need to find
//a way so that when this is ppermutated to say [14.5, 4.5 ...] then the humans:["B","A" . . . ]

//When it will take debt as input, we need to change maping below that so that it knows what letter corresponds to what debt value