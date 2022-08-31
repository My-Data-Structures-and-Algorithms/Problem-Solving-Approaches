//Write a function which takes in a string and returns counts of each character in the string
//charCount('aaa');
/*
    {
        a:3
    }
*/

//charCount('hihii');
/*
    {
        h:2,
        i:3
    }
*/

//charCount('My PIN number is 123245!');
/*
    {
        m:2,
        y:1,
        p:1,
        i:2,
        n:2,
        u:1,
        m:1,
        b:1,
        e:1,
        r:1,
        s:1,
        1:1,
        2:2,
        3:1,
        4:1,
        5:1
    }
*/

/*let charCount = (str) {
    //create object to return at the end
    //loop over the string, and for each char....
      //if char is a number/letter AND is a key in object, increment count by 1
      //if char is a number/letter AND NOT a key in object, add it and set value to 1
      //if char is something else (space, period, etc)...don't do anything
    //return object at the end
}*/

//testing objects
let result = {
    a:1,
    b:2
}

result.c = 4;
console.log(result);
result.c += 1;
console.log(result.c)

// if ('a' in result) {
//     console.log('clear');
// }

// result.a += 1;

// console.log(result.a);

// let b = 'a';
// console.log(typeof(b));

