function climbStairs(n) {
  if (n <= 2) {
    return n;
  }

  let ways = new Array(n + 1);
  ways[1] = 1;
  ways[2] = 2;

  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n];
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
