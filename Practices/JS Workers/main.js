const worker = new Worker("./generate.js");

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${message.date} primes`;
});
