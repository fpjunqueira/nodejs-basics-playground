/**
 * Entires
 */
const obj = {
    a: 1,
    b: 2,
    c: 3
}

// keys
console.log(Object.keys(obj))

// values
console.log(Object.values(obj))


// entries
console.log(Object.entries(obj))

Object
    .entries(obj)
    .forEach(item => {
        console.log(item)
    });

//destructive assignment
Object
    .entries(obj)
    .forEach(([key, value]) => {
        console.log(key, value)
    });

//or
Object
    .entries(obj)
    .forEach(item => {
        const [key, value] = item
        console.log(key, value)
    });