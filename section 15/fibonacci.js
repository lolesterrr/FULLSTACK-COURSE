//chatgpt solution

function fibonacciGenerator(n) {

    var fibList = [0,1];          // Start with the first two Fibonacci numbers

    if (n === 1){                 
        return fibList.slice(0,1) // Return only [0] if n is 1
    }

    if (n === 2){  
        return fibList.slice(0,2) // Return [0,1] if n is 2
    }

    while (fibList.length < n){   // Keep looping until array size reaches n
        
        var last = fibList[fibList.length - 1];        // Get last number
        var secondLast = fibList[fibList.length - 2];  // Get second last number
        
        fibList.push(last + secondLast); // Add next Fibonacci number to array
    }

    return fibList;                // Return the completed Fibonacci list
}