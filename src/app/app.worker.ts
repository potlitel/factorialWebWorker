/// <reference lib="webworker" />

// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`;
//   postMessage(response);
// });

import { factorialCalculator } from "./functions/factorial.function";

addEventListener('message', ({ data }) => {
  const response = factorialCalculator(data);
  postMessage(response);
});
