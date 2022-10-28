

function addToZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ((array[i] + array[j]) === 0) {
                return true;
            }
        }
    }
    return false;
} 

console.log(addToZero([1,2,-2]))

//time: o(n^2)
//space:o(1)





const hasUniqueChars = (str) => {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
}
        return true;

}

console.log(hasUniqueChars('monday'));

//time:o(n^2)
//space:o(1)



//---------------------------------------------------------------------
//wanted to do it without checking a solution first, and wow. what a brain far. 

// const hasUniqueChars = (str) => {

//     let letterCount = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 letterCount++
//             }
//         }
//     }
//     if (letterCount > str.length) {
//         return false;
//     } else {
//         return true;
//     }
// }
//----------------------------------------------------------------------



const str = 'the quick brown fox jumps over the lazy dog';
const str2 = 'this is probably not a pangram'
const isPangram = (str) => {
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < str.length; i++){
      const holder = str[i];
    //   console.log(holder);
      const index = alphaArr.indexOf(holder);
    //   console.log(index);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
//    console.log(alphaArr);
//    console.log(alphaArr.length);
    if (alphaArr.length > 0) {
        return false;
    } else {
        return true;
    }

};
console.log(isPangram(str));

//time:o(n)
//space:0(1)






function findLongestWord(array) {
    let longestWord = array[0].length;
    for (let i = 0; i < array.length; i++) {
        let lengthOfArrayItem = array[i].length;
        if (lengthOfArrayItem > longestWord) {
            longestWord = array[i].length;
        }
    }
    return longestWord;
}

console.log(findLongestWord(['hi', 'hello', 'thiswordisprettylong']));

//time:o(1)
//space:o(1)

