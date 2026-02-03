function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const yOffset = -70; // height of navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

function showPopup(service) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    let text = '';
    if(service === 'youtubeVideo') {
        text = 'Professional YouTube Video Editing to engage your audience and satisfy clients.';
    } else if(service === 'thumbnail') {
        text = 'Creative YouTube Thumbnails designed to attract views and client satisfaction.';
    } else if(service === 'emailMarketing') {
        text = 'Effective Email Marketing campaigns delivering results and happy clients.';
    }
    popupText.innerText = text;
    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function copyText(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
    });
}