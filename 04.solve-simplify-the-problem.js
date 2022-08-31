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

//Solution version 1
// let charCount = (str) => {
//     //create object to return at the end
//     let result = {};
//     //loop over the string, and for each char....
//         for (let i = 0; i < str.length; i++) {
//             let char = str[i].toLowerCase();
//             //if char is a number/letter AND is a key in object, increment count by 1
//             if (result[char] > 0) {
//                 result[char] += 1;
//             } else {
//                 result[char] = 1;
//             }
//             //if char is something else (space, period, etc)...don't do anything
//         }
      
//     //return object at the end
//     return result;
// }

//Solution version 2
// let charCount = (str) => {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
        
//     }
//     return obj;
// }

// //Refactoring stage 1
// let charCount = (str) => {
//     let obj = {};
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

// //Refactoring stage 2
// let charCount = (str) => {
//     let obj = {};
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             //replace code with conditional operator
//             obj[char] = ++obj[char] || 1; //if obj[char] is truthy, do ++obj[char] or if obj[char] is falsy
//                                           // assign it a value of 1
//         }
//     }
//     return obj;
// }

// //Refactoring stage 3
// let charCount = (str) => {
//     let obj = {};
//     for (let char of str) {
//         if (isAlphaNumeric(char)) {
//             char = char.toLowerCase();
//             //replace code with conditional operator
//             obj[char] = ++obj[char] || 1; //if obj[char] is truthy, do ++obj[char] or if obj[char] is falsy
//                                           // assign it a value of 1
//         }
//     }
//     return obj;
// }

// //a function that uses character codes to check if a given character is alpha numeric
// //this function is used instead of the regular expression approach because it has a higher performance
// let isAlphaNumeric = (char) => {
//     let code = char.charCodeAt(0);
//     if (!(code > 47 && code < 58) && //numeric (0-9) 
//         !(code > 64 && code < 91) && // upper alpha (A-Z)
//         !(code > 96 && code < 123)) { // lower alpha (a-z)
//             return false
//     }
//     return true;
// }

let alphaNumeric = (char) => {
	//find the char Code
    let charCode = char.charCodeAt(0);
    
    if ((charCode > 47 && charCode <  58) || 
        (charCode > 64 && charCode < 91) ||
        (charCode > 96 && charCode < 123)) {
            return true;
	} else {
	    return false;
	}
}

// let charCount = (str) => {
//             //create an empty object that will be used to store our results
// 	let result = {};
	
// 	//loop through the string
// 	for (let char of str) {
// 		//use the helper function to check if current char is alpha numeric/you can employ a 
//         //regular expression at this point as well
// 		if(alphaNumeric(char)) {
//             char = char.toLowerCase();
// 			if(!(char in result)) {
// 				result[char] = 1;
// 			} else {
// 				result[char] += 1;
// 			}
// 		}
// 	}
// 	return result;
// }

//Refactor 1
// let charCount = (str) => {
//     //create an empty object that will be used to store our results
//     let result = {};

//     //loop through the string
//     for (let char of str) {
//         //use the helper function to check if current char is alpha numeric/you can employ a 
//         //regular expression at this point as well
//         if(alphaNumeric(char)) {
//             char = char.toLowerCase();
//             if(!result[char]) {
//                 result[char] = 1;	
//             } else {
//                 result[char] += 1;
//             }
//         }
//     }
//         return result;
// }

//Refactor 2
let charCount = (str) => {
    //create an empty object that will be used to store our results
    let result = {};

    //loop through the string
    for (let char of str) {
        //use the helper function to check if current char is alpha numeric/you can employ a 
        //regular expression at this point as well
        if(alphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
        return result;
}


console.log(charCount('aaa'))
console.log(charCount('Hello'));
console.log(charCount('Hello She is tHere'));
