document.querySelectorAll('.wheel-segment').forEach(segment => {
    segment.addEventListener('click', function() {
        const selectedStyle = this.getAttribute('data-style');
        showPopup(selectedStyle);
    });
});

function showPopup(style) {
    const popup = document.getElementById('style-popup');
    const styleTitle = document.getElementById('style-title');
    const styleDetails = document.getElementById('style-details');

    // Update popup content with selected style
    styleTitle.innerText = style;
    styleDetails.innerText = `Details for ${style}: Price, Size, Shading, etc.`;

    // Show the popup
    popup.classList.remove('hidden');

    // Blur the rest of the page
    document.querySelector('.container').style.filter = 'blur(5px)';
}

// Close the popup and restore focus
document.getElementById('close-popup').addEventListener('click', function() {
    const popup = document.getElementById('style-popup');
    popup.classList.add('hidden');
    document.querySelector('.container').style.filter = 'none';
});

