const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums'
] // Array of urls

Promise.all(urls.map(url =>{
    return fetch(url).then(resp => resp.json())
})).then(results => { // This will run after all promises have resolved 
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error')) //    This will catch any errors thrown by the promises

// fetch is a function that returns a promise
// A promise can only scucceed or fail once
// fetch is a promise that returns a response object