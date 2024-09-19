document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.scroll-effect');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) * dividend
        );
    };

    const displayScrollElement = () => {
        scrollElements.forEach(el => {
            if (elementInView(el, 0.8)) {
                el.classList.add('in-view');
            }
        });
    };

    window.addEventListener('scroll', displayScrollElement);
    displayScrollElement(); // Initial check
});


// JavaScript for calculating ozone depletion
function calculateDepletion() {
    const item = document.getElementById('item').value;
    const hours = parseFloat(document.getElementById('hours').value);
    
    if (!item || isNaN(hours) || hours < 0) {
        alert('Please select an item and enter a valid number of hours.');
        return;
    }

    // Define the depletion factors for each item
    const depletionFactors = {
        'vehicle': 0.05, // Example factors, adjust as needed
        'airConditioner': 0.10,
        'refrigerator': 0.08,
        'industrial': 0.12,
        'other': 0.03
    };

    // Calculate the percentage of ozone layer depletion
    const factor = depletionFactors[item];
    const percentageHarmed = factor * hours;
    const ozoneDepleted = percentageHarmed * 0.1; // Example conversion factor, adjust as needed

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Depletion Results</h2>
        <p>Item or Activity: ${item}</p>
        <p>Hours of Use per Month: ${hours}</p>
        <p>Percentage of Ozone Layer Harmed: ${percentageHarmed.toFixed(2)}%</p>
        <p>Ozone Depleted to the Atmosphere: ${ozoneDepleted.toFixed(2)} units</p>
    `;
}

// Scroll effect detection
document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.scroll-effect');

    function handleScroll() {
        scrollElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('in-view');
            } else {
                el.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});

function calculateDepletion() {
    // Get form values
    const item = document.getElementById('item').value;
    const hours = document.getElementById('hours').value;

    // Perform calculation (example calculation)
    let depletion = 0; // Example value, replace with actual calculation logic

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Depletion Result</h2>
        <p><strong>Item:</strong> ${item}</p>
        <p><strong>Hours of Use per Month:</strong> ${hours}</p>
        <p><strong>Estimated Ozone Depletion:</strong> ${depletion} units</p>
    `;
}

function calculateDepletion() {
    // Get form values
    const item = document.getElementById('item').value;
    const hours = parseFloat(document.getElementById('hours').value);

    // Initialize depletion value
    let depletion = 0;

    // Example calculation logic based on item
    switch (item) {
        case 'vehicle':
            depletion = hours * 0.1; // Example value
            break;
        case 'airConditioner':
            depletion = hours * 0.2; // Example value
            break;
        case 'refrigerator':
            depletion = hours * 0.15; // Example value
            break;
        case 'industrial':
            depletion = hours * 0.3; // Example value
            break;
        case 'other':
            depletion = hours * 0.05; // Example value
            break;
        default:
            depletion = 0;
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Depletion Result</h2>
        <p><strong>Item:</strong> ${item}</p>
        <p><strong>Hours of Use per Month:</strong> ${hours}</p>
        <p><strong>Estimated Ozone Depletion:</strong> ${depletion.toFixed(2)} units</p>
    `;
}
