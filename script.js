const consumptionInput = document.getElementById("consumption");
const fuelInput = document.getElementById("fuel");
const distanceInput = document.getElementById("distance");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("reset");
const toast = document.getElementById("toast");

function showToast(text) {
    toast.textContent = text;
    toast.classList.add("show");
    setTimeout(function () {
toast.classList.remove("show");
    }, 2500);
}

calculateButton.addEventListener("click", function (){

    if (
        consumptionInput.value === "" ||
        fuelInput.value === "" ||
        distanceInput.value === ""
    ) {
        showToast("Заповність усі поля!");
        return;
    }


    const consumption = Number(consumptionInput.value);
    const fuel = Number(fuelInput.value);
    const distance = Number(distanceInput.value);
    const fuelUsed = (consumption * distance) / 100;
    const result = document.getElementById("result");

    if (fuelUsed > fuel) {
        showToast("☹️ У баку недостатьно пального для цієї поїздки.");
        return;
    }

    if (consumption <= 0 || fuel <= 0 || distance <=0) {
        showToast("Усі значення повинні бути більшими за 0.");
        return;
    }

// Анімація витрати палива
    function animateResult(targetValue) {
        let current = 0;

        const interval = setInterval(() => {
            current += targetValue / 40;

            if(current >= targetValue) {
                current = targetValue;
                clearInterval(interval);
            }
            result.textContent = `Ви витратите ${current.toFixed(1)} л. палива`;   
        }, 20);
    }
    animateResult(fuelUsed)
});

clearButton.addEventListener("click",
function (){
    consumptionInput.value = "";
    fuelInput.value = "";
    distanceInput.value = "";
});
