const promise = new Promise((resolve, reject) => { // Promise is a constructor that takes a function with two arguments, resolve and reject
    if(true){
        resolve('stuff worked'); // This will be caught by the then block
    } else {
        reject('Error, it broke'); // This will be caught by the catch block
    }
})

promise
    .then(result => console.log(result)) // This will run
    .then(() => {throw Error('Something failed')})  // This will be caught by the catch block
    .then(() => console.log('I ran after the promise')) // This will not run
    .catch(err => console.log(err)) // This will catch the error thrown in the previous then block
    .then(() => console.log('I will run no matter what'))  // This will run no matter what
    .then(() => {throw Error('Something failed')}) // This will not be cautght by the catch block

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII') // This will resolve after 100ms
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie') // This will resolve after 1000ms
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you are looking fall') // This will resolve after 100ms
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    }) // This will run after all promises have resolved
    .catch(err => console.log(err)) // This will catch any errors thrown by the promises