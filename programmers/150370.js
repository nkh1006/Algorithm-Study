/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370
 */

 function solution(today, terms, privacies) {
  const answer = [];
  const termObj = {};    
  const expiredDate = new Date(today);
  //=========================================================
  terms.forEach((item) => {
      const [type, term] = item.split(" ");
      termObj[type] = Number(term);
  });
  //=========================================================
  privacies.forEach((item, idx) => {
      const [date, type] = item.split(" ");
      const checkedDate = new Date(date);
      //=========================================================
      checkedDate.setMonth(checkedDate.getMonth() + termObj[type]);
      if (checkedDate <= expiredDate) answer.push(idx + 1);
  });
  return answer;
}