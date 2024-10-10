
function calculateAge(day, monthInput, year) {
    var months = {
        "jan": 1, "january": 1, "feb": 2, "february": 2, "mar": 3, "march": 3,
        "apr": 4, "april": 4, "may": 5, "jun": 6, "june": 6, "jul": 7, "july": 7,
        "aug": 8, "august": 8, "sep": 9, "september": 9, "oct": 10, "october": 10,
        "nov": 11, "november": 11, "dec": 12, "december": 12  
};

    var month;
    if (!isNaN(monthInput)) {
        month = parseInt(monthInput); 
    } else {
        month = months[monthInput.toLowerCase()];
        if (!month) {
            console.error("Invalid month input");
            return;
        }
    }

    var birthDate = new Date(year, month - 1, day); 
    var today = new Date(); 

    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var ageMonths = today.getMonth() - birthDate.getMonth();
    var ageDays = today.getDate() - birthDate.getDate();

    
    if (ageDays < 0) {
        ageMonths--;
        var prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); 
        ageDays += prevMonth.getDate(); 
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    alert(`Your Age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days!`);
}


var day = prompt("Enter your birth date!","Date");
var monthInput = prompt("Enter your birth month!","Month");
var year = prompt("Enter your birth year!","Year");


if (isNaN(day) || day < 1 || day > 31) {
    console.log("Invalid day input.");
} else if (isNaN(year) || year.length !== 4 || year < 1900) {
    console.log("Invalid year input.");
} else {
    calculateAge(day, monthInput, year);
}


















































