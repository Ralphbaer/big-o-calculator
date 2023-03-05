function checkTimeComplexity(code) {
    // Add your code here to analyze the algorithm and determine its time complexity
    return "O(n^2)"; // Replace this with the actual time complexity
}

document.getElementById("submit").addEventListener("click", function () {
    const code = document.getElementById("code").value;
    const timeComplexity = checkTimeComplexity(code);
    document.getElementById("output").textContent = `Time complexity: ${timeComplexity}`;
});
