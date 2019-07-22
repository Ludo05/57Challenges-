const calculateInterest = (principal, interest, years) => {
  return principal + ((principal / 100 * interest) * years)
};

console.log(calculateInterest(1500,4.3,4));
