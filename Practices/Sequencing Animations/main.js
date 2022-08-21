const aliceTombling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTimig = {
  duration: 2000,
  iteration: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1
  .animate(aliceTombling, aliceTimig)
  .finished.then(() => alice2.animate(aliceTombling, aliceTimig).finished)
  .then(() => alice3.animate(aliceTombling, aliceTimig))
  .catch((error) => console.log(`Error in the animation ${error}`));
