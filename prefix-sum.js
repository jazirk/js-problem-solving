const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const B = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
(function (A) {
  function createPrefixSum(A) {
    const sum = [];
    sum[0] = A[0];
    for (let i = 1; i < A.length; i++) {
      sum[i] = sum[i - 1] + A[i];
    }
    return sum;
  }
  const prefixSum = createPrefixSum(A);
  const res = [];
  for (let i = 0; i < B.length; i++) {
    let L = B[i][0]; // if 1 - indexed  B[i][0] - 1
    let R = B[i][1]; // if 1 - indexed  B[i][1] - 1

    if (L === 0) {
      res[i] = BigInt(prefixSum[R]);
    } else {
      res[i] = BigInt(prefixSum[R]) - BigInt(prefixSum[L - 1]);
    }
  }
  console.log(res);
})(arr);

// TC : O(n)
// SC: O(n) can be made to O(1) by changing same array
