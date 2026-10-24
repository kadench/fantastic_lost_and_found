const clues = [
  "UH-OH. WRONG TURN.",
  "SECRET PASSAGE? NOPE. JUST ANOTHER 404.",
  "THE PAGE LEFT NO FORWARDING ADDRESS.",
  "NEXT CLUE: RETURN TO HQ.",
  "THIS CASE JUST GOT INTERESTING."
];

const rerouteButton = document.querySelector("#reroute");
const clueMessage = document.querySelector("#clue");
let clueIndex = 0;

rerouteButton?.addEventListener("click", () => {
  clueIndex = (clueIndex + 1) % clues.length;
  clueMessage.textContent = clues[clueIndex];
});
