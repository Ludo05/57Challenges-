const rl = require('../Util');


const isAnagram = () => {
 console.log('Enter two strings and i\'ll tell you if they are anagrams:');
 rl.question( 'Enter the first string ', stringOne => {
  rl.question('Enter the second string ', stringTwo => {
    if( stringTwo.split('').sort().join('') === stringOne.split('').sort().join('')){
     console.log(`${stringOne} and ${stringTwo} are anagrams.`)
    } else {
     console.log('They are not anagrams')
    }
   rl.close()

  });
 })
};


isAnagram();
