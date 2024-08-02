function calculateTotalMarks() {
    const theoryMarks = document.querySelectorAll(".theory-marks");
    const practicalMarks = document.querySelectorAll(".practical-marks");
    const totalMarksElements = document.querySelectorAll(".total-marks");
    const totalWordsElements = document.querySelectorAll(".total-words");

    let grandTotal = 0;

    for (let i = 0; i < theoryMarks.length; i++) {
        const theory = parseInt(theoryMarks[i].value) || 0;
        const practical = parseInt(practicalMarks[i].value) || 0;
        const total = theory + practical;
        totalMarksElements[i].textContent = total;

        // Update total in words
        totalWordsElements[i].textContent = getWords(total);

        grandTotal += total;
    }

    // Update grand total
    document.getElementById("grand-total").textContent = grandTotal;
    document.getElementById("grand-total-words").textContent = getWords(grandTotal);

    // Calculate and display result, percentage, and grade
    calculateResult();
}

// Function to get words for total marks
function getWords(total) {
    return "ZERO ZERO";
}

// Function to calculate result, percentage, and grade
function calculateResult() {
    const grandTotal = parseInt(document.getElementById("grand-total").textContent) || 0;
    const subjectOffered = parseInt(document.getElementById("subject-offered").value) || 8; // Default value
    const percentage = (grandTotal / (subjectOffered * 100)) * 100;

    document.getElementById("result").value = grandTotal >= (subjectOffered * 100 * 0.33) ? "PASS" : "FAIL"; // Assuming 33% passing criteria
    document.getElementById("percentage").value = percentage.toFixed(2) + "%";
    document.getElementById("grade").value = percentage >= 90 ? "A+" : percentage >= 80 ? "A" : percentage >= 70 ? "B+" : percentage >= 60 ? "B" : percentage >= 50 ? "C" : "D";
}

// Event listener for input fields to update calculations
const inputFields = document.querySelectorAll(".theory-marks, .practical-marks");
inputFields.forEach(input => {
    input.addEventListener("input", calculateTotalMarks);
});
