module.exports = function multiply(first, second) {
  let arrA = first.split('').reverse();
  let arrB = second.split('').reverse();

  const stack = [];

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      let curNum = arrA[i] * arrB[j];
      stack[i + j] = stack[i + j] ? stack[i + j] + curNum : curNum;
    }
  }

  let result = [];
  let carry = 0;

  for (let i = 0; i < stack.length; i++) {
    result.push(stack[i] % 10);
    carry = Math.floor(stack[i] / 10);
    stack[i] = carry;

    if (stack[i + 1])
      stack[i + 1] += carry;
    else if (carry != 0)
      stack[i + 1] = carry;
  }

  return result.reverse().join('')
}
