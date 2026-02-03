function goHome() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}

function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

// popup animation on scroll
const popups = document.querySelectorAll(".popup");

window.addEventListener("scroll", () => {
    popups.forEach(popup => {
        const rect = popup.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            popup.classList.add("show");
        }
    });
});
