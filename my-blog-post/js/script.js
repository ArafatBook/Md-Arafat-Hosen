// Simple JS to show extra content
document.getElementById('read-more').addEventListener('click', function() {
    const extra = document.getElementById('extra-content');
    if(extra.style.display === 'none') {
        extra.style.display = 'block';
        this.textContent = 'কম দেখান';
    } else {
        extra.style.display = 'none';
        this.textContent = 'আরও পড়ুন';
    }
});
