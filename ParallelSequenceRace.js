//Parallel
//Sequence
// Race

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay)); // This line of code is a promise that will resolve after a certain delay

const a = () => promisify("a", 1000);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() { // This function will run all the promises in parallel which is the fastest way to run promises
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises); // This line of code will wait for all the promises to resolve
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

// parallel().then(console.log);// This line of code will log the output of the parallel function

// RACE
async function race(){
    const promises = [a(), b(), c()];
    const output = await Promise.race(promises); // This line of code will wait for the fastest promise to resolve and return only that promise
    return `race is done: ${output}`;
}

// race().then(console.log); // This line of code will log the output

// SEQUENCE
async function sequence(){
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done: ${output1} ${output2} ${output3}`;
}

// sequence().then(console.log); // This line of code will log the output of the sequence function

parallel().then(console.log);
sequence().then(console.log);
race().then(console.log);