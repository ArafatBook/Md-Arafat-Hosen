function copyToClipboard(elementId) {
    // টেক্সট এলিমেন্ট খুঁজে বের করা
    var copyText = document.getElementById(elementId).innerText;

    // ক্লিপবোর্ডে কপি করা
    navigator.clipboard.writeText(copyText).then(function() {
        // সফল হলে এলার্ট দেখানো
        alert("Copied: " + copyText);
    }, function(err) {
        // এরর হলে কনসোলে দেখানো
        console.error('Could not copy text: ', err);
    });
}
