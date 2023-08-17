// fruits = ['apple', 'banana', 'grapes']

// fruits.forEach(capitalize)
// console.log(fruits[0]);
// fruits.forEach(print)

// function capitalize (element, index, array) {
//     array[index] = element[0].toUpperCase() + element.substring(1)

// }

// function print(element){
//     console.log(element)
// }

//

let temps = [0, 10, 20, 30];

let conversion = temps.map(function (temp){
    return temp * 9/5 + 32
})
console.log(conversion);