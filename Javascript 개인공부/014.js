let store = {snack: 1000, flower: 5000, beverage: 2000};

for (let item in store) {
    if (store.hasOwnProperty.call(store, item)) {
        const element = store[item];
        console.log(item + "아이템")
        console.log(element+ "엘리먼트")
        
    }
}
// hasOwnProperty.call 사용해볼라고 써본 예제
// 책의 내용에서는 for in 문을 사용할때는 hasOwnProperty.call으로 속성을 한 번 더 확인하는것을 권장한다