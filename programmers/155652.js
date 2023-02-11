/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/155652
 */

 function solution(s, skip, index) {
  const alphaObj = new Set('abcdefghijklmnopqrstuvwxyz');
  //=========================================================
  skip.split("").map((e) => alphaObj.delete(e));
  const alphaSkipObj = Array.from(alphaObj).join("").repeat(3);
  //=========================================================
  return s.split("").map((e)=>alphaSkipObj[alphaSkipObj.indexOf(e)+index]).join("");
}