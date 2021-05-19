
let array = [31, 10, "chiken", 9, "fish", "10"]

let newArray = array.filter(a => typeof (a) == "string" || a === 10)      // первый способ
console.log(newArray)


let secondArray = []
for (let item of array) {
    if (typeof (item) == "string" || item === 10) secondArray.push(item)  // второй способ
}
console.log(secondArray)