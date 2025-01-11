// Finally is a block of code that will always run regardless of the outcome of the try and catch blocks. It is used to execute code after the try and catch blocks, regardless of the result.
const url = [
  "https://swapi.dev/api/people/1",
  "https://swapi.dev/api/people/2",
  "https://swapi.dev/api/people/3",
  "https://swapi.dev/api/people/4",
];

Promise.all(
  url.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((array) => {
    throw Error;
    console.log("1", array[0]);
    console.log("2", array[1]);
    console.log("3", array[2]);
    console.log("4", array[3]);
  })
  .catch((err) => console.log("ughhh fix it!", err)) // This would catch any error that occurs during the fetching of the data
  .finally(() => console.log("All fetch operations complete.")); // This would log a message after the fetching of the data
  //Finally does not receive any arguments, and it is not called in case of an unhandled error. It is called when the promise is settled, i.e., either fulfilled or rejected.