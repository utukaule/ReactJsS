function climb(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == n) {
        count++;
      }
      if (i + j == n) {
        count++;
      }
    }
  }
  return count;
}

let n = 2;
// climb(n);
console.log(climb(n));
