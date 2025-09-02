// 1. 
function formatDate(date) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    return `${weekdays[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// 2. 
function elapsedMinutes(t1, t2) {
    return Math.floor((t2 - t1) / (1000 * 60));
}

// 3.
function calculateAge(birthdateStr) {
    const birth = new Date(birthdateStr);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    return `${years} years, ${months} months, ${days} days`;
}

// 4.
function firstDayOfMonth() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
}

// 5.
function lastDayOfMonth() {
    return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
}

// 6.
function timeAgo(timestamp) {
    const now = new Date();
    const diff = Math.floor((now - timestamp) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
}

// 7. 
function countdown(toDate) {
    const now = new Date();
    let diff = Math.floor((toDate - now) / 1000);
    const days = Math.floor(diff / 86400); diff %= 86400;
    const hours = Math.floor(diff / 3600); diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 8. 
function diffHoursMinutes(d1, d2) {
    let diff = Math.abs(d2 - d1) / 1000;
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    return `${hours} hours ${minutes} minutes`;
}

// 9. 
function checkDay(dateStr) {
    const day = new Date(dateStr).getDay();
    return (day === 0 || day === 6) ? "Weekend" : "Weekday";
}

// 10. 
function compareBirthdays(b1, b2) {
    const d1 = new Date(b1);
    const d2 = new Date(b2);
    const daysDiff = Math.abs((d1 - d2) / (1000 * 60 * 60 * 24));
    if (d1 < d2) return `Person 1 is older by ${daysDiff} days`;
    if (d2 < d1) return `Person 2 is older by ${daysDiff} days`;
    return "Same birthday!";
}

// 11.
function checkAlarm(dayTime) {
    const [day, time] = dayTime.split(" ");
    const now = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = weekdays[now.getDay()];
    const currentTime = now.toTimeString().slice(0, 5);
    return (day === currentDay && time === currentTime);
}

// 12.
function isValidDate(dateStr) {
    const d = new Date(dateStr);
    return !isNaN(d.getTime());
}

// 13.
function relativeDate(ts) {
    const now = new Date();
    const diff = Math.floor((now - ts) / 1000);
    if (diff < 86400 && ts.getDate() === now.getDate()) {
        return `Today at ${ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    if (diff < 2 * 86400 && ts.getDate() === now.getDate() - 1) {
        return `Yesterday at ${ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    if (diff < 7 * 86400) return `${Math.floor(diff / 86400)} days ago`;
    return ts.toDateString();
}

// 14.
function next7Days() {
    const arr = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        arr.push(d.toLocaleDateString("en-GB").split("/").join("-"));
    }
    return arr;
}

// 15.
function generateSlots(dateStr) {
    const slots = [];
    const start = new Date(dateStr + " 09:00");
    const end = new Date(dateStr + " 17:00");
    let current = new Date(start);
    while (current < end) {
        slots.push(current.toTimeString().slice(0, 5));
        current.setMinutes(current.getMinutes() + 30);
    }
    return slots;
}

// 16.
function monthDates() {
    const arr = [];
    const now = new Date();
    const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= days; i++) {
        arr.push(`${String(i).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`);
    }
    return arr;
}

// 17. 
function utcToLocal(utcStr) {
    return new Date(utcStr + "Z").toString();
}

// 18.
function measure(fn) {
    const start = Date.now();
    fn();
    return `Execution time: ${Date.now() - start} ms`;
}

// 19. 
function formatISODate() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// 20. 
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}