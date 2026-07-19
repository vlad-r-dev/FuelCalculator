const consumptionInput = document.getElementById("consumption");
const fuelInput = document.getElementById("fuel");
const distanceInput = document.getElementById("distance");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("reset");

calculateButton.addEventListener("click", function (){

    if (
        consumptionInput.value === "" ||
        fuelInput.value === "" ||
        distanceInput.value === ""
    ) {
        alert("Заповність усі поля!");
        return;
    }


    const consumption = Number(consumptionInput.value);
    const fuel = Number(fuelInput.value);
    const distance = Number(distanceInput.value);

    const fuelUsed = (consumption * distance) / 100;

    const result = document.getElementById("result");
    result.textContent = `Ви витратите ${fuelUsed} л. палива`;
});

clearButton.addEventListener("click",
function (){
    consumptionInput.value = "";
    fuelInput.value = "";
    distanceInput.value = "";
});