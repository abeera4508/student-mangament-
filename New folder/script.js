// script.js
document.getElementById('marksheetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var name = document.getElementById('name').value;
    var rollno = document.getElementById('rollno').value;
    var subject1 = document.getElementById('subject1').value;
    var subject2 = document.getElementById('subject2').value;
    var subject3 = document.getElementById('subject3').value;

    // Calculate total and percentage
    var total = parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3);
    var percentage = (total / 300) * 100;

    // Show result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Marksheet for ${name}</h3>
        <p><strong>Roll Number:</strong> ${rollno}</p>
        <p><strong>Subject 1 Marks:</strong> ${subject1}</p>
        <p><strong>Subject 2 Marks:</strong> ${subject2}</p>
        <p><strong>Subject 3 Marks:</strong> ${subject3}</p>
        <p><strong>Total Marks:</strong> ${total} / 300</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    `;

    // Display result box
    resultDiv.style.display = 'block';



    
 

});
