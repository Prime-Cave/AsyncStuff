// A web worker is JavaScript code that runs in the background, without affecting the performance of the page because it runs in a separate thread which is parallel to the main thread. Web workers are used to run long-running scripts without blocking the main thread.
// A web is like a Chef that cooks food in the kitchen and the main thread is like a waiter that serves the food to the customers. The waiter doesn't cook the food, he just serves it. The chef cooks the food in the kitchen and the waiter serves it to the customers. The chef is like a web worker and the waiter is like the main thread.
// Web workers are used to run long-running scripts in the background without blocking the main thread. The main thread is responsible for updating the UI and handling user interactions. If a long-running script is executed on the main thread, it will block the UI and the user won't be able to interact with the page until the script is finished. Web workers are used to run long-running scripts in the background without blocking the main thread.
// Note: Web workers don't have access to the DOM, window object, or global variables. They run in a separate thread and don't have access to the main thread. They communicate with the main thread using the postMessage() method.
// In Node JS, we can use the worker_threads module to create web workers. The worker_threads module provides a Worker class that can be used to create web workers. The Worker class takes the path to the worker script as an argument and creates a new web worker that runs the script in a separate thread.