document.getElementById('wasmFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const go = new Go();
        WebAssembly.instantiate(e.target.result, go.importObject)
        .then(result => {
            go.run(result.instance);
        })
        .catch(console.error);
    };
    reader.readAsArrayBuffer(file);
});

function calculate(event) {
    event.preventDefault();
    const number = parseFloat(document.getElementById('numberInput').value);
    const square = calculateSquare(number);
    console.log(`The square of ${number} is ${square}`);
    document.getElementById('result').textContent = `The square of ${number} is ${square}`;
}