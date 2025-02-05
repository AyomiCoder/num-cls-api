// Function to check if a number is prime
export const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  // Function to check if a number is an Armstrong number
  export const isArmstrong = (num: number): boolean => {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
  };
  
  // Function to check if a number is a Perfect number
  export const isPerfect = (num: number): boolean => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) sum += num / i;
      }
    }
    return sum === num && num !== 1;
  };
  
  // Function to classify a number
  export const classifyNumber = (num: number) => {
    const properties: string[] = [];
  
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");
  
    return {
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: num.toString().split("").reduce((acc, digit) => acc + Number(digit), 0),
    };
  };
  