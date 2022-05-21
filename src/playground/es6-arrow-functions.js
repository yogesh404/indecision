const getFirstName = fullName => fullName.split(' ')[0]
console.log(getFirstName('Will Smith'))

//arguments object - no longer bound with arrow functions
const add = function (a, b) {
    console.log(arguments)
    return a + b
}

const addArrow = (a, b) => {
    // console.log(arguments)
    return a + b
}
// console.log(add(55, 4, 453))
// console.log(addArrow(55, 4, 453))

//this keyword - no longer bound

const user = {
    name: 'Yogay',
    cities: ['Bengaluru', 'Hyderabad', 'Goa', 'Kerala'],
    printCitiesVisited() {
        return this.cities.map((city) => this.name + ' has visited ' + city)
    }
}
console.log(user.printCitiesVisited())

const multiplier = {
    numbers: [10, 34, 64],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}
console.log(multiplier.multiply())