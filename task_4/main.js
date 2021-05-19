let array = ["cat", "parrot", "horse", "fish", "chiken", "lion"]
let tempArray = array.slice()

let obj = "cat" // то что мы хотим удалить

tempArray.splice(tempArray.indexOf(obj), 1)    // удалить 1 выбраный элемент
console.log(tempArray)

tempArray = array.slice()

tempArray.splice(tempArray.length - 2, 2)      // удалить последние 2
console.log(tempArray)