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

    // Update popup content with the selected style
    styleTitle.innerText = style;
    styleDetails.innerText = `Details for ${style}: Price, Size, Shading, etc.`;

    // Show the popup by
