const AnagramChecker = (word1,word2) => {
 return  word2.split('').sort().join('') === word1.split('').sort().join('');
};

console.log(AnagramChecker('lewis','eilsw'));


