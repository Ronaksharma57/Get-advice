const h1 = document.getElementById("h1");
const btn = document.getElementById("btn");
const span = document.querySelector("span");
let count = 0;

btn.addEventListener("click", async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    h1.innerText = data.slip.advice;
    count++;
    span.innerText = count;
  } catch {
    console.error();
  }
});
