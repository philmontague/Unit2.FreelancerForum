const freelancerTable = document.getElementById('freelancer-table');
const averagePriceSpan = document.getElementById('average-price');

const freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
    { name: 'Carol', occupation: 'Programmer', startingPrice: 70 }, 
    { name: 'Phil', occupation: 'Writer', startingPrice: 40 }
];

// To keep track of the current freelancer
let currentIndex = 0; 

function calculateAveragePrice() {
    const total = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
    const average = total / freelancers.length;
    return average;
}

function addFreelancerToTable(freelancer) {
    const row = freelancerTable.querySelector('tbody').insertRow();
    row.insertCell(0).textContent = freelancer.name;
    row.insertCell(1).textContent = freelancer.occupation;
    row.insertCell(2).textContent = `$${freelancer.startingPrice}`;
}

function updateTableAndAverage() {
    addFreelancerToTable(freelancers[currentIndex]);

    const averagePrice = calculateAveragePrice();
    averagePriceSpan.textContent = `$${averagePrice.toFixed(2)}`;

    currentIndex++;

    if (currentIndex === freelancers.length) {
        // Stop the interval if all freelancers have been added
        clearInterval(addFreelancerInterval);
    }
}

updateTableAndAverage();

// Display each freelancer one by one every 5 seconds
const addFreelancerInterval = setInterval(updateTableAndAverage, 5000);

