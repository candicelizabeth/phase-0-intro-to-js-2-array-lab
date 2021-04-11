// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
   return cats.push(name)
}

function destructivelyPrependCat(name){
   return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
   let newCats = [...cats, name]
    return newCats
}

function prependCat(name){
    let newCats = [name, ...cats]
    return newCats
}

function removeLastCat(){
    return cats.slice(0,- 1) //slice is not destructive 
    // let newCats = [...cats]
    // // first make copy 
    // newCats.pop() //returns the removed item
    // //remove value
    // //return array 
    // return newCats
}

function removeFirstCat(){
    return cats.slice(1) // slice is not destructive
    // let newCats = [...cats]
    // newCats.shift() //returns the removed item
    // return newCats
}