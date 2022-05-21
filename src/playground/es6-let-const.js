var nameVar = 'Yogay'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Chester'
nameLet = 'talinda'
console.log('nameLet', nameLet)

const nameConst = 'Bruce Wayne'
console.log('nameConst', nameConst)

const fullName = 'Andrew Mead'
let firstName

if (fullName){
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)

// var
// -can be REDEFINED and REASSIGNED
// -function scoped

// let
// -cannot be REDEFINED, only REASSIGNED
// -block scoped(includes functions)

// const
// -cannot be REDEFINED or REASSIGNED
// -block scoped(includes functions)
