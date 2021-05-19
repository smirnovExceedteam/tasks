const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}


for (let item in person) {
    document.write("&lt" + item + "&gt" + ": " + "&lt" + person[item] + "&gt" + "</br>")
}

document.write("</br>")

for (let [key, value] of Object.entries(person)) {  
    document.write(key + ": " + value + "</br>")
}

