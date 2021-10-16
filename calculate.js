document
  .querySelector("#submitCalculate")
  .addEventListener("click", calculateCalories);
function calculateCalories() {
  const weight = document.querySelector(".weight").value,
    minutes = document.querySelector(".minutes").value,
    pounds = document.querySelector("#pounds").checked,
    kilos = document.querySelector("#kilos").checked,
    caloriesBurned = document.querySelector("#caloriesBurned");

  const caloriesCalculated =
    ((8 * (pounds === true ? weight / 2.2 : weight) * 3.5) / 200) * minutes;

  if (minutes !== "" || pounds !== "") {
    caloriesBurned.innerHTML = `Calories burned: ${Math.floor(
      caloriesCalculated
    )}`;
  }
}
