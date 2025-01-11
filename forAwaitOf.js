// for await of 
// For of is used to loop over an array, while for await of is used to loop over the results of async functions
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
]

const getData = async function(){
    try{
        const [users, posts, albums] = await Promise.all(
            urls.map(async function(url){
                const resp = await fetch(url);
                return resp.json();
            })
        );
        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch(err){
        console.error("OOOOOOOOOOOPS", err);
    }
}

const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url)); // This would map through the urls and return a promise for each url
    for await (request of arrayOfPromises){ // This would loop through the promises and wait for each promise to resolve before moving to the next one
        const data = await request.json(); // This would get the data from the request
        console.log(data);
    };
}

getData2(urls); // This would log the data from the urls