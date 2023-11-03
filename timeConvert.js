function timeConversion(s) {
    // Write your code here
    let sum = 12;
    let hour = s.slice(0, 2);
    sum += Number(hour);
    if (s.includes("AM")) {
        if (hour == "00") {
            s = s.replace(s.slice(0, 2), sum);
        } else if (hour == "12") {
            s = s.replace(hour, "00");
        }
        console.log(s.replaceAll("AM", ""));
    } else {
        if (hour == "12") {
            console.log(s.replaceAll("PM", ""));
        } else {
            s = s.replace(hour, sum);
            console.log(s.replaceAll("PM", ""));
        };
    }
};

timeConversion("12:40:22PM");