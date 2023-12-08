// Object

const user = {
    username: "Äkash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggerdIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggerdIn = isLoggerdIn;
}

const userOne = new User("Akash", 5 , true )
const userTwo = new User("ChaiaurCode", 5 , true )

console.log(userOne);
console.log(userTwo);