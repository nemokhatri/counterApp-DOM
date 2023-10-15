let numberDispaly = 0

function increaseHandler() {
    numberDispaly++;
    updateCounter()
}

function resetHandler() {
    numberDispaly = 0;
    updateCounter()
}

function decreaseHandler() {
    numberDispaly--;
    updateCounter()
}

function updateCounter() {
    const count = document.getElementById("counter");
    count.textContent = numberDispaly;
    if (numberDispaly < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "black"
    }
}

console.log(updateCounter)
