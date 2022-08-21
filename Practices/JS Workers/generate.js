addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

function generatePrimes(quota) {
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); ++i) {
      if (n % i === 0) {
        return false;
      }
      return true;
    }
  }
  const prime = [];
  const maximum = 1000000;

  while (prime.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      prime.push(candidate);
    }
  }

  postMessage(prime.length);
}
