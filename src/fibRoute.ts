// Endpoint for querying the fibonacci numbers

// import fibonacci from "./fib";

// export default (req, res) => {
//   const { num } = req.params;

//   const fibN = fibonacci(parseInt(num));
//   let result = `fibonacci(${num}) is ${fibN}`;

//   if (fibN < 0) {
//     result = `fibonacci(${num}) is undefined`;
//   }

//   res.send(result);
// };
import fibonacci from "./fib";

export default (req: any, res: any) => { // Add type annotations for req and res
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result: string; // Specify the type of 'result'

  if (fibN !== undefined) { // Check if fibN is not undefined
    result = `fibonacci(${num}) is ${fibN}`;
  } else {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};