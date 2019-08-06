const rl = require('../Util/consoleReadLine');


const isAnagram = () => {
 console.log('Enter two strings and i\'ll tell you if they are anagrams:');
 rl.question( 'Enter the first string ', stringOne => {
  rl.question('Enter the second string ', stringTwo => {
    // if(stringTwo.split('').sort().join('').length  === stringOne.split('').sort().join('').length){
      if(stringOne.length === stringTwo.length) {
          const sortedStringOne = stringOne.split('').sort().join('');
          const sortedStringTwo = stringTwo.split('').sort().join('');
          if (sortedStringOne === sortedStringTwo) {
              console.log(`${stringOne} and ${stringTwo} are anagrams.`)
              return true
          }
      }else {
          console.log('They are not anagrams')
          return false
      }
   rl.close()

  });
 })
};


isAnagram();
