// // 두번째 문제는 감이 오지않아서 바로 답안을 확인
// // 답안을 확인하고 끝이아니라 공부를 해봐야 할 것을 찾는다.
// // filter 함수 사용법 익혀보자.

// function getChildren(persons) {
//   return persons.filter((person) => person.age < 20);
// }

// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.



var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var invalidEntries = 0;
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  
  var arrByID = arr.filter(filterByID);
  
  console.log('Filtered Array\n', arrByID);
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries);
  // Number of Invalid Entries = 5

//   mdn을 보고 느낀점은 True를 반환하게 되면 그 값을 새로운 배열에 넣는거 같다.