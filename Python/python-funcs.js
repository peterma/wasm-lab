document.getElementById('squareForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const number = parseFloat(document.getElementById('numberInput').value);
    runPython(number);
});

async function runPython(number) {
    let pyodide = await loadPyodide();
    await pyodide.runPythonAsync(`
        def square(num):
            return num * num
    `);
    let square = pyodide.globals.get("square")(number);
    document.getElementById('result').textContent = `The square of ${number} is ${square}`;
}