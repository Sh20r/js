function countWellFormedParenthesis(n) {
    if (n < 1 || n > 15) return 0;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * (2 * n - i + 1) / i;
    }
    return Math.round(result / (n + 1));
}

function displayAllResults() {
    const resultsElement = document.getElementById('results');
    if (!resultsElement) return;
    
    let output = "n | count comn\n";
    output += "-----------------------\n";
    
    for (let n = 1; n <= 15; n++) {
        const count = countWellFormedParenthesis(n);
        output += `${n} | ${count}\n`;
    }
    
    resultsElement.textContent = output;
}

function runTests() {
    const testResultsElement = document.getElementById('test-results');
    if (!testResultsElement) return;
    
    const tests = [
        { n: 0, expected: 0, description: "Граничное значение: 0" },
        { n: 1, expected: 1, description: "База: n=1" },
        { n: 2, expected: 2, description: "n=2" },
        { n: 3, expected: 5, description: "n=3" },
        { n: 4, expected: 14, description: "n=4" },
        { n: 5, expected: 42, description: "n=5" },
        { n: 6, expected: 132, description: "n=6" },
        { n: 7, expected: 429, description: "n=7" },
        { n: 8, expected: 1430, description: "n=8" },
        { n: 9, expected: 4862, description: "n=9" },
        { n: 10, expected: 16796, description: "n=10" },
        { n: 11, expected: 58786, description: "n=11" },
        { n: 12, expected: 208012, description: "n=12" },
        { n: 13, expected: 742900, description: "n=13" },
        { n: 14, expected: 2674440, description: "n=14" },
        { n: 15, expected: 9694845, description: "n=15" },
        { n: 16, expected: 0, description: "Граничное значение: 16" },
        { n: -1, expected: 0, description: "Отрицательное значение" }
    ];
    
    let output = '';
    let allPassed = true;
    
    tests.forEach(test => {
        const result = countWellFormedParenthesis(test.n);
        const passed = result === test.expected;
        if (!passed) allPassed = false;
        
        output += `
            <div class="test ${passed ? 'passed' : 'failed'}">
                n = ${test.n}: ${result} (ожидалось ${test.expected}) 
                → ${passed ? '✓' : '✗'}
            </div>
        `;
    });
    
    output = `<h2>${allPassed ? 'all good!' : 'exeption!'}</h2>` + output;
    testResultsElement.innerHTML = output;
}
if (document.getElementById('results')) {
    window.onload = displayAllResults;
}

if (document.getElementById('test-results')) {
    window.onload = runTests;
}