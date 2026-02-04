// Copy to Clipboard Function
function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(copyText).then(function() {
        alert("Copied: " + copyText);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

// Mobile Menu Toggle Function
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
