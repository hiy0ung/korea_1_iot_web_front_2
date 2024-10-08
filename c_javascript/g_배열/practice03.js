// practice03.js

//! 함수 & 배열 종합 문제

// 문제 1: 최솟값 찾기
// 주어진 숫자 배열에서 최솟값을 찾는 함수를 작성

function findmin(array) {
  let min = array[0];
  // 배열명.키워드: 배열이 가지는 "속성"(데이터)
  // 배열명.키워드(): 배열이 가지는 "동작"(기능) >> 기능 호출
  let length = array.length; 

  for(let i = 1; i < length; i++) { 
    // 배열의 두번째 요소부터 마지막 요소까지 순회(초기값을 이미 [0]으로 지정했기 때문에)
    if (array[i] < min) {
      // 해당 값으로 min을 재할당
      min = array[i];
    }
  }

  return min; // findmin을 호출하면 숫자 데이터 타입이 나옴
}
console.log(findmin([10, 3, 45, 21, 22]));

// 문제 2: 홀수 찾기
//>> 주어진 숫자 배열에서 홀수만 추출하여 새로운 배열로 반환하는 함수를 작성

let findOdds = (arr) => {
  // 홀수를 담을 빈 배열을 선언
  let odds = [];
  let length = arr.length;

  for(let index = 0; index < length; index++) { // index 대신 i 사용해도 무관
    if (arr[index] % 2 !== 0) {
      // 홀수를 새로운 배열에 담기
      odds.push(arr[index]);
    }
  }
  return odds;
}
console.log(findOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9] 출력