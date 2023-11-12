let arr = [5, 4, 8, 9, 3]
console.log(arr.length)

for (let i = 0; i<arr.length; i++) {
    console.log(arr[i])
}

for (let i in arr) {
    console.log(arr[i])
}

for (let i of arr) {
    console.log(i)
}


console.log(arr[2])
console.log(arr.length)
arr.push(10)
console.log(arr)

let truong = {
    name: "Trường",
    age: 80
}
console.log(truong.name)


let animals = []
console.log(animals)
// CRUD
// C: Create
animals.push("Rabbit")
console.log(animals)
// R: Read
console.log(animals[0])
// U: Update
animals[0] = 'Cat'
console.log(animals)
// D: Delete
animals.pop()
console.log(animals)
// Tính tổng các số trong arr
//let arr = [5, 4, 8, 9, 3]

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum)

sum = 0
for (let i in arr) {
    sum += arr[i];
}
console.log(sum)

sum = 0
for (let i of arr) {
    sum += i
}
console.log(sum)