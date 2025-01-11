// Underneat the hood an Async Await is a function that returns a promise
// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(330, 'Left'))

// async function playerStart() {
//     const firstMove = await movePlayer(100, 'Left')
//     await movePlayer(400, 'Left');
//     await movePlayer(10, 'Right');
//     await movePlayer(330, 'Left');
// }
async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}
// Async is basically the same as fetch, but it is more of a syntactic sugar sugar for promises

// fetchUsers();

// Real world example
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// My implementation
const getDataMine = async (urls) => {
    urls.map(
        (url) =>
            async function () {
                const resp = await fetch(url);
                return await resp.json();// This is the same as return resp.json();
            }
    );
};
// Co-Pilot Fix for the above function
const getDataCoPilot = async (urls) => {
    try {
        const [data] = await Promise.all( // This would wait for all the promises to resolve before returning the data
            urls.map(async (url) => { // This would map through the urls and return a promise for each url
                const resp = await fetch(url);// This would fetch the data from the url
                return resp.json(); // This would return the data in json format
            })
        );
        console.log(data);
    } catch (error) { // This would catch any error that occurs during the fetching of the data
        console.error("Error fetching data:", error);
    }
};
// ZTM implementation
const getDataZTM = async (urls) => {
    try {
        const [users, posts, albums] = await Promise.all( // The Function pauses until all the promises are resolved
            urls.map(async (url) => {
                const resp = await fetch(url);
                return resp.json();
            })
        );
        console.log("users", users);
        console.log("posts", posts);
        console.log("albums", albums);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

getDataZTM(urls)