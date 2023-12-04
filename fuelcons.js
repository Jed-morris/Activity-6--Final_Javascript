function calculateAverage() {
    // Get values from input fields
    var distance = parseFloat(document.getElementById('distance').value);
    var fuel = parseFloat(document.getElementById('fuel').value);

    // Check if the values are valid
    if (isNaN(distance) || isNaN(fuel) || fuel <= 0) {
        alert('Please enter valid values for distance and fuel.');
        return;
    }

    // Calculate average fuel consumption
    var averageFuelConsumption = distance / fuel;

    // Display the result
    document.getElementById('result').innerHTML =
        'Average Fuel Consumption: ' + averageFuelConsumption.toFixed(2) + ' km/l';
}