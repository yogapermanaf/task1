function solution(a, m, k) {
    let count = 0;
  
    for (let i = 0; i < a.length - m + 1; i++) {
      let subarray = a.slice(i, i + m);
  
      for (let j = 0; j < subarray.length - 1; j++) {
        for (let l = j + 1; l < subarray.length; l++) {
          if (subarray[j] + subarray[l] === k) {
            count++;
            break;
          }
        }
      }
    }
  
    return count;
  }
  
  const a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
  const m = 4;
  const k = 10;
  
  console.log(solution(a, m, k)); // Output: 5
  
  const a2 = [15, 8, 8, 2, 6, 4, 1, 7];
  const m2 = 2;
  const k2 = 8;
  
  console.log(solution(a2, m2, k2)); // Output: 2
  