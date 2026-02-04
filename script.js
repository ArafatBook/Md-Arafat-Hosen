// মোবাইল সাইডবার মেনু টগল ফাংশন
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// কপি করার ফাংশন
function copyToClipboard(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    });
}
