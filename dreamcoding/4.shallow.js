const pizza = {name:'🍕',price:2}
const ramen = {name:'🍜',price:3}
const sushi = {name:'🍣',price:1}
const store1 = [pizza,ramen];
const store2 = Array.from(store1);

store2.push(sushi);
console.log(store1);
console.log(store2);

pizza.price = 4;
console.log(store1);
console.log(store2);

// 얕은 복사 shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.form, concat, slice, spread(...), Object.assign...