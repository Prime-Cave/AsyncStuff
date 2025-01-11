// AllSettled

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, "one");
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "two");
});

Promise.allSettled([promiseOne, promiseTwo]) // This will wait for all promises to be settled
  .then((data) => console.log(data))
  .catch((e) => console.log("error", e));
//Promise.allSettled would return an array of objects with the status of each promise and the value or reason.