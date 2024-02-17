function performArrayOperations() {
    var numbersInput = document.getElementById('numbersInput').value;
    var numbers = numbersInput.split(',').map(Number);
    
    if (numbers.length >= 1) {
        var sum = numbers.reduce((acc, curr) => acc + curr, 0);
        var maxNumber = Math.max(...numbers);
        var minNumber = Math.min(...numbers);
        var average = sum / numbers.length;
        
        var evenNumbers = numbers.filter(num => num % 2 === 0);
        var oddNumbers = numbers.filter(num => num % 2 !== 0);

        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = '';

        var sumElement = document.createElement("p");
        sumElement.textContent = "Сума масиву: " + sum;
        resultsDiv.appendChild(sumElement);
        
        var maxNumberElement = document.createElement("p");
        maxNumberElement.textContent = "Максимальне число в масиві: " + maxNumber;
        resultsDiv.appendChild(maxNumberElement);
        
        var minNumberElement = document.createElement("p");
        minNumberElement.textContent = "Мінімальне число в масиві: " + minNumber;
        resultsDiv.appendChild(minNumberElement);
        
        var averageElement = document.createElement("p");
        averageElement.textContent = "Середнє значення масиву: " + average;
        resultsDiv.appendChild(averageElement);

        var evenNumbersElement = document.createElement("p");
        evenNumbersElement.textContent = "Парні числа в масиві: " + evenNumbers.join(', ');
        resultsDiv.appendChild(evenNumbersElement);
        
        var oddNumbersElement = document.createElement("p");
        oddNumbersElement.textContent = "Непарні числа в масиві: " + oddNumbers.join(', ');
        resultsDiv.appendChild(oddNumbersElement);
    } else {
        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "Будь ласка, введіть принаймні одне число.";
    }
}
