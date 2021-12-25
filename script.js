let studentName = prompt(`What is your name?`);
let studentNote = prompt(`Your passing grade?`);

if (parseInt(studentNote) >= 80 && parseInt(studentNote) < 100) {
    alert(`Student ${studentName} takes the "A" with the note ${studentNote}`);
} else if (parseInt(studentNote) >= 70 && parseInt(studentNote) < 80) {
    alert(`Student ${studentName} takes the "B" with the note ${studentNote}`);
} else if (parseInt(studentNote) >= 60 && parseInt(studentNote) < 70) {
    alert(`Student ${studentName} takes the "C" with the note ${studentNote}`);
} else if (parseInt(studentNote) >= 50 && parseInt(studentNote) < 60) {
    alert(`Student ${studentName} takes the "D" with the note ${studentNote}`);
} else if (parseInt(studentNote) >= 0 && parseInt(studentNote) < 50) {
    alert(`Student ${studentName} takes the "F" with the note ${studentNote}`);
} else {
    alert('Please insert a note between 0 and 100');
}