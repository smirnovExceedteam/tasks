
"use strict"
function myreplace(str, change, newSub) {
    let pos = str.indexOf(change)
    if (pos != -1) {
        let firstPart = str.slice(0, pos)
        let secondPart = str.slice(pos + change.length, str.length)
        let result = firstPart + newSub + secondPart

        return result
    } else {
        console.log("input error")
        return undefined
    }

}

let str = "Я изучаю JavaScript"
let change = "JavaScript"       // что мы хотим поменять 
let newSub = "c++"              // на что заменить

str = myreplace(str, change, newSub)

if (str != undefined) console.log(str)
