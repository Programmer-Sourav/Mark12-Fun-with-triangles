const baseSide = document.querySelector("#base-side");
const heightSide = document.querySelector("#height-side");
const calculate = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateArea(e) {
  e.preventDefault();

  const baseSideValue = Number(baseSide.value);
  const heightSideValue = Number(heightSide.value);


    const resultArea = (base * height) / 2;
    return resultArea.toFixed(2);
    output.innerText = `Area of a triangle using heron's formula is ${resultArea} units`;
  }

calculate.addEventListener("submit", calculateArea);