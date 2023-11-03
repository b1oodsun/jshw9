// Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в 
// котором ключ будет равен элементу массива, а значение (элемент * 100)
// input: [1, 2, 3, 4, 5]
// output: {1: 100, 2: 200, 3: 300 ...}

// const array = [1,2,3,4,5]
// const out = array.reduce((acc,b) => {
//     acc[a] = a*100
//     return acc
// },{});
// console.log(out);


// Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать. 
// Написать функцию которая создает из массива skills объект с рандомными значениями от 1 до 100, 
// использовать reduce и Math.random()
// input: ['hook', 'blackhole']
// output: {'hook': 20, 'blackhole: 100'}


// const array = ['Blade','hammer arms','Tentacles', 'Hunt', 'Whip hand']
// const out = array.reduce((acc,a) => {
//     acc[a] = Math.floor(Math.random() * 101)
//     return acc
// },{});
// console.log(out);


// Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
// input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
// output: { even: 100, odd: 100 } // 100 это для примера, сумма должна высчитываться.


// const array = [2,3,4,5,10,11]
// const out = array.reduce((acc,a) => {
//     if (a % 2 === 0){
//      acc.even += b
//     } else{
//      acc.odd += b
//     }
//     return acc
// },{even:0, odd:0,});
// console.log(out)



// Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, 
// { name: 'Cedric Diggory', house: 'Hufflepuff' }, { name: 'Tonks', house: 'Hufflepuff' }, 
// { name: 'Ronald Weasley', house: 'Gryfindor' }, { name: 'Hermione Granger', house: 'Gryfindor' }];
//  Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа. Сделайте эту задачу двуми способоами:
// C помощью filter и map
// C помощью reduce


// const movie = [ { name: 'Harry Potter', house: 'Gryfindor' },
//  { name: 'Cedric Diggory', house: 'Hufflepuff' }, 
//  { name: 'Tonks', house: 'Hufflepuff' },
//   { name: 'Ronald Weasley', house: 'Gryfindor' },
//    { name: 'Hermione Granger', house: 'Gryfindor' }];
// const out = movie.reduce((acc,a) => {
//     if (a.house === 'Hufflepuff'){
//         acc.push(b.name)
//     } else{
//     return acc
//     }
//     return acc
// },[]);
// console.log(out)


// const movie = [
//     { name: 'Harry Potter', house: 'Gryfindor' },
//     { name: 'Cedric Diggory', house: 'Hufflepuff' },
//     { name: 'Tonks', house: 'Hufflepuff' },
//     { name: 'Ronald Weasley', house: 'Gryfindor' },
//     { name: 'Hermione Granger', house: 'Gryfindor' }
// ];
// const out = movie.filter(a => a.house === 'Hufflepuff').map(a => a.name);
// console.log(out);



// Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
// От большего к меньшему
// От меньшего к большему

// let number = [3, 4, 1, 2, 7];
// number.sort(function (a, b) {
//   return a - b;
// });
// console.log(number);


// let numbers = [3, 4, 1, 2, 7];
// numbers.sort(function (a, b) {
//      return b - a;
//    });
// console.log(numbers); 



// Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки: 
// От A-Z


// const some = ['alim', 'alik', 'aziz', 'abdrahman', 'erlan']
// const sorted = some.sort()
// console.log(sorted)

// const some = ['alim', 'alik', 'aziz', 'abdrahman', 'erlan']
// const sorted = some.sort((a, b) => {
//     if (b < a) {
//       return -1;
//     }
//     if (b > a) {
//       return 1;
//     }
//     return 0;
// });
// console.log(sorted)

