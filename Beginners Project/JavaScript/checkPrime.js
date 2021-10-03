const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the Number to check Prime : ", async (numberString) => {
  const number = parseInt(numberString);
  const answer = checkPrime(number);

  console.log(answer)

  rl.close();
})

const checkPrime = (number) => {
  let flag = 0;

  for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
      flag++;
    };
  };

  if (flag == 1) {
    return ("Number is Prime");
  } else {
    return ("Number is not Prime");
  }
}
