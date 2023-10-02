let counter = 0;
const counterValue = document.getElementById("counterVal");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
//Incrementing the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
//Decrementing the value of the counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
//Resetting the value of the counter
resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.innerHTML = counter;
});