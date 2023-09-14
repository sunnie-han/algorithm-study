const solution = (numbers) => {
  const n = Number(numbers[0][0]);
  const m = Number(numbers[1][0]);
  const graph = numbers.slice(2, -1);
  const plan = numbers.at(-1).map((val) => Number(val) - 1);

  const parent = Array(n)
    .fill("dummy")
    .map((_, index) => index);

  const find = (x) => {
    if (x !== parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX < rootY) {
      parent[rootY] = rootX;
    } else {
      parent[rootX] = rootY;
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 0) {
        continue;
      }
      union(i, j);
      // console.log(i, j, parent, plan);
    }
  }
  const isReachable = plan
    .map((dest) => {
      // console.log(parent[dest], parent[plan.at(0)]);
      return parent[dest] === parent[plan.at(0)];
    })
    .every((val) => val === true);

  if (isReachable) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

// /dev/stdin
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");
// const list = input.map((val) => val.split(" ").map((el) => parseInt(el)));
// // console.log(list);
// solution(list);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((val) => {
    list.push(val.split(" ").map((el) => parseInt(el)));
  });

  solution(list);
  process.exit();
});
