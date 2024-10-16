// Add hover event listeners to each wheel segment
document.querySelectorAll('.wheel-segment').forEach(segment => {
    segment.addEventListener('mouseenter', function() {
        const selectedStyle = this.getAttribute('data-style');
        showPopup(selectedStyle, this);
    });

    segment.addEventListener('mouseleave', function() {
        hidePopup();
    });
});

// Function to show the popup with style details next to the hovered segment
function showPopup(style, element) {
    const popup = document.getElementById('style-popup');
    const styleTitle = document.getElementById('style-title');
    const styleDetails = document.getElementById('style-details');

    // Update popup content with the selected style
    styleTitle.innerText = style;
    styleDetails.innerText = `Details for ${style}: Price, Size, Shading, etc.`;

    // Position the popup next to the hovered element
    const rect = element.get
