let car: string = "subaru";
let age: number = 25;
let numbers : number[] = [1,2,3,4];

// TEST 1: EQUALITY (TRUE)
console.log("is car == 'subaru'? i predict true.");
console.log(car == 'subaru');

// TEST 2: STRICT EQUALITY (FALSE)
console.log("is car === 'subaru'? i predict true.");
console.log(car === 'subaru');

// TEST 3: INEQUALITY (TRUE)
console.log("is car != 'Toyota'? I predict true");
console.log(car != 'Toyota');

// TEST 4: INEQUALITY (FALSE)
console.log("is car !== 'subaru'? i predict false.");
console.log(car !== 'subaru');

// TEST 5: LOWERCASE CONVERSION (TRUE)
console.log("is car == car.tolowetcase() == 'subaru'? i predict true.");
console.log(car.toLocaleLowerCase() == 'subaru');

// TEST 6: LOWERCASE CONVERSION (FALSE)
console.log("is car == car.tolowetcase()? i predict false.");
console.log(car === car.toLocaleLowerCase());

// TEST 7: EQUALITY (TRUE)
console.log("is age == 25? i predict true.");
console.log(age == 25);

// TEST 8: INEQUALITY (FALSE)
console.log("is age != 30? i predict false.");
console.log(age != 30);

// TEST 9: GREATER THAN (FALSE)
console.log("is age > 30? i predict false.");
console.log(age > 25);


// TEST 10: LESS THAN OR EQUAL (TRUE)
console.log("is age <= 30? i predict true.");
console.log(age <= 25);

// TEST 11: AND (TRUE)
console.log("is age > 20 && age < 30? i predict true.");
console.log(age > 20 && age < 30);

// TEST 12: OR (FALSE)
console.log("is age > 30 || age < 18? i predict false.");
console.log(age > 30 || age < 18);

// TEST 13: IN ARRAY (TRUE)
console.log("is 3 in numbers? i predict true");
console.log(3 in numbers);

// TEST 14: NOT IN ARRAY (FALSE)
console.log("is 5 not in numbers? i predict false");
console.log(5 not in numbers);




