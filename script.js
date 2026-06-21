function analyzePassword() {
    const password = document.getElementById("password-input").value;
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");
    const crackTime = document.getElementById("crack-time");
    const feedbackText = document.getElementById("feedback-text");

    if (password === "") {
        strengthBar.style.width = "0%";
        strengthText.innerText = "Status: Awaiting Input...";
        crackTime.innerText = "0 seconds";
        feedbackText.innerText = "Enter a password to get security tips.";
        return;
    }

    let score = 0;

    
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    
    if (score <= 1) {
        strengthBar.style.width = "20%";
        strengthBar.style.backgroundColor = "#ff3333"; 
        strengthText.innerText = "CRITICAL: Extremely Weak! ❌";
        strengthText.style.color = "#ff3333";
        crackTime.innerText = "Instantly (In Milliseconds) ⚡";
        feedbackText.innerText = "Too short! Use mix of upper, lower case and numbers.";
    } else if (score === 2) {
        strengthBar.style.width = "40%";
        strengthBar.style.backgroundColor = "#ff9900"; 
        strengthText.innerText = "WARNING: Weak ⚠️";
        strengthText.style.color = "#ff9900";
        crackTime.innerText = "A few minutes ⏱️";
        feedbackText.innerText = "Add special characters (like @, #, $) to make it stronger.";
    } else if (score === 3) {
        strengthBar.style.width = "70%";
        strengthBar.style.backgroundColor = "#ffff00"; 
        strengthText.innerText = "GOOD: Medium Strength 👍";
        strengthText.style.color = "#ffff00";
        crackTime.innerText = "Around 2 to 5 years 🗓️";
        feedbackText.innerText = "Nice, making it longer than 12 characters makes it uncrackable!";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "#00ff66"; // പച്ച
        strengthText.innerText = "UNBREAKABLE: Pure Hacker Shield! 🛡️";
        strengthText.style.color = "#00ff66";
        crackTime.innerText = "Centuries (Millions of Years) 👑";
        feedbackText.innerText = "Excellent Boss! This password is safe from Brute-Force attacks.";
    }
}


function toggleVisibility() {
    const passwordInput = document.getElementById("password-input");
    const toggleBtn = document.getElementById("toggle-btn");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.innerText = "🔒";
    } else {
        passwordInput.type = "password";
        toggleBtn.innerText = "👁️";
    }
}