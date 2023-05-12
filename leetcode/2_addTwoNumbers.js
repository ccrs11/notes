let addTwoNumbers = function (l1, l2) {
    alma = 0;
    res = [];
/*     if (l1.length < l2.length) {
        const diff = l2.length - l1.length;
        l1 = l1.concat(Array(diff).fill(0));
    } else if (l2.length < l1.length) {
        const diff = l1.length - l2.length;
        l2 = l2.concat(Array(diff).fill(0));
    } */
    let long = l1.length > l2.length ? l1.length : l2.length;
    for (i = 0; i < long; i++) {
        suma1 = l1[i] + l2[i];
        if (suma1 < 10) {
            res.push(suma1);
        }else if(suma1>=10 && i===l1.length-1){
            res.push(suma1-10);
            res.push(1);
        } 
        else {
            alma = suma1 - 10;
            res.push(alma);
            l1[i + 1] = (l1[i + 1] + 1);
        }
    } return res;
};

/* const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  const res = [];

  while (l1.length || l2.length || carry) {
    const sum = (l1.pop() || 0) + (l2.pop() || 0) + carry;
    res.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }

  return res;
}; */

let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];
console.log(addTwoNumbers(l1, l2));
//output  [7,0,8]
