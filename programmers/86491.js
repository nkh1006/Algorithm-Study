/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */

function solution(sizes) {
  sizes.forEach((v, idx) => {
      sizes[idx] = v.sort((a, b) => a - b);
  });

  const left = sizes.map((v) => v[0]);
  const right = sizes.map((v) => v[1]);
  
  return Math.max(...left) * Math.max(...right);
}