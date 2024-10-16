// Add click event listeners to each wheel segment
document.querySelectorAll('.wheel-segment').forEach(segment => {
    segment.addEventListener('click', function() {
        const selectedStyle = this.getAttribute('data-style');
        showPopup(selectedStyle);
    });
});

// Function to show the popup and blur the rest of the page
function showPopup(style) {
    const popup = document.getElementById('style-popup');
    const styleTitle = document.getElementById('style-title');
    const styleDetails = document.getElementById('style-details');

    // Style details mapping
    const styleInfo = {
        'Style 1': 'This style features vibrant colors and abstract forms, perfect for modern spaces.',
        'Style 2': 'Characterized by its calm tones and serene landscapes, this style brings tranquility.',
        'Style 3': 'A fusion of traditional and contemporary elements, suitable for diverse environments.',
        'Style 4': 'Emphasizes texture and depth, making each piece a tactile experience.',
        'Style 5': 'Bold and dynamic, this style captures the energy of urban life.'
    };

    // Update popup content with selected style
    styleTitle.innerText = style;
    styleDetails.innerText = styleInfo[style] || 'No details available for this style.';

    // Show the popup
    popup.classList.remove('hidden');

    // Blur the rest of the page except the spinning wheel
    document.querySelectorAll('body > *:not(#style-popup):not(.spinning-wheel)').forEach(element => {
        element.style.filter = 'blur(5px)';
    });
}

// Close the popup and restore focus when the close button is clicked
document.getElementById('close-popup').addEventListener('click', function() {
    const popup = document.getElementById('style-popup');
    popup.classList.add('hidden');

    // Remove blur effect from the rest of the page
    document.querySelectorAll('body > *').forEach(element => {
        element.style.filter = 'none';
    });
});

// Close the popup when clicking outside of the popup content
document.getElementById('style-popup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.add('hidden');
        document.querySelectorAll('body > *').forEach(element => {
            element.style.filter = 'none';
        });
    }
});
