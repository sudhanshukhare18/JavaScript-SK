function co() {
    let n = parseInt(prompt("Enter a number"), 10); // Parse input as integer
    
    if (n >= 10 && n <= 21) { // Check if n is between 10 and 21
        for (let k = 1; k <= n; k++) {
            console.log(k);
        }
    } else if (n >= 1 && n <= 11) { // Check if n is between 1 and 11
        for (let k = 15; k >= 1; k--) {
            console.log(k);
        }
    } else {
        console.log("Number out of range.");
    }
}

co();
