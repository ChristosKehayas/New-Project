let Participant= class {

    constructor(name, amountSpent){
    this.name=name;
    this.amountSpent=amountSpent;

    }
}

let participantArray=[];


const CreateParticipant = (_name, _amount)=>{ myf:{

    if (typeof(_amount)!=="number" || _amount<0){
        console.log("Positive Number Required");
        break myf;
    }

    const newParticipant = new Participant(_name, _amount);
    participantArray.push(newParticipant);
                                                } 
}


CreateParticipant("G", 4);
CreateParticipant("A", 54);
CreateParticipant("B", 4);
CreateParticipant(2, "-87");

console.log(participantArray[0].name);
console.log(participantArray[0].amountSpent);
console.log(participantArray);
