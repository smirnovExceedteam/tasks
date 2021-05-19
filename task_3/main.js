
function myFind(arr, obj) {
    for (let i in array) {
        if (arr[i] == obj) return i
    }
}
function myFind_2(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == obj) return i
    }
}
function myFind_3(arr, obj) {
    for (let [key, value] of arr.entries()) {
        if (value == obj) return key
    }
}

let array = ["cat", "dog", "parrot", "horse"]
let obj = "dog"

console.log(myFind(array, obj))      // первый вариант
console.log(array.indexOf(obj))      // второй метод
console.log(myFind_2(array, obj))    // третий вариант 
console.log(myFind_3(array, obj))    // четвертый вариант