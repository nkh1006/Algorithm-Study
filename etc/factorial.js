function factorial(n) {
  let result = 1;
  for(let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

const result = factorial(5);

console.log(result);