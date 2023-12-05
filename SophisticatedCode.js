/*
 * Filename: SophisticatedCode.js
 * Description: This code calculates the sum of prime numbers up to a given number, using the Sieve of Eratosthenes algorithm.
 */

// Function to generate an array of prime numbers up to a given limit
function generatePrimes(limit) {
  let primes = Array(limit + 1).fill(true);  // Initialize all numbers as potential primes
  primes[0] = primes[1] = false;  // 0 and 1 are not prime
  
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;  // Mark multiples as non-prime
      }
    }
  }
  
  return primes;
}

// Function to calculate the sum of prime numbers up to a given number
function sumOfPrimes(limit) {
  const primes = generatePrimes(limit);
  let sum = 0;

  for (let i = 2; i <= limit; i++) {
    if (primes[i]) {
      sum += i;
    }
  }

  return sum;
}

// Example usage
const limit = 100;
const sum = sumOfPrimes(limit);
console.log(`The sum of prime numbers up to ${limit} is: ${sum}`);