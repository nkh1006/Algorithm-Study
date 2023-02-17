/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/136798
 */

 function solution(number, limit, power) {
    
  const powerArr = [];
  
  for(let i = 1; i <= number; i++) {
      let numberCount = 0;
      for(let k = 1; k <= i/2; k++) {
          if(i % k === 0) {
              numberCount += 1;
          }
      }
      numberCount += 1;
      numberCount = numberCount > limit ? power : numberCount;
      powerArr.push(numberCount);
      numberCount = 0;
  }
  
  const answer = powerArr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);   

  return answer;
}