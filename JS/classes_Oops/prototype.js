

let myHeros = ["thor", "Spiderman"]

let heroPower = {
    thor:"Hammer",
    Spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.getSpiderPower}`);
    }
}

/*

function ------>|
                |
Array    ------>|---------> object --------> null
                |
string   ------>|


*/
Object.prototype.akash = function(){
    console.log("akash is present in all objects");
}

Array.prototype.heyAkash = function(){
    console.log(`Akash says hi`);
}

// heroPower.akash();

myHeros.akash();
myHeros.heyAkash();

// heroPower.heyAkash();