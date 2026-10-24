const clues = [
  "PSST... THE STORY STARTS HERE.",
  "A LITTLE CURIOSITY GOES A LONG WAY.",
  "YOUR NEXT CLUE IS RIGHT AROUND THE CORNER.",
  "EVERY HERO STARTS BY LOOKING CLOSER."
];

const clueButton = document.querySelector("#hero-quip");
const clueMessage = document.querySelector("#hero-message");
let clueIndex = 0;

clueButton?.addEventListener("click", () => {
  clueIndex = (clueIndex + 1) % clues.length;
  clueMessage.textContent = clues[clueIndex];
});
