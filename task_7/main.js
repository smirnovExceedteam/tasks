

function compareObject(obj_1, obj_2) {
    return (JSON.stringify(obj_1) == JSON.stringify(obj_2))
}


let firstObject =
{
    name: "name",
    age: 1,
    secondName: "secondName"
}
let secondObject =
{
    name: "name",
    age: 1,
    secondName: "secondName"
}

alert(compareObject(firstObject, secondObject))