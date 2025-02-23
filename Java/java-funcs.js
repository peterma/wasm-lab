// Wait for the WASM to load
window?.TeaVM?.runtime?.waitForReady().then(function() {
    window.calculateSquare = SquareCalculator.calculateSquare;
    console.log(calculateSquare(5)); // Should output 25
});

function calculate(event) {
    event.preventDefault();
    const number = parseFloat(document.getElementById('numberInput').value);
    const square = calculateSquare(number);
    console.log(`The square of ${number} is ${square}`);
    document.getElementById('result').textContent = `The square of ${number} is ${square}`;
}