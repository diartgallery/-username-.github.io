function showPopup(style) {
    // Get all wheel items and apply defocus to all except the clicked one
    let wheelItems = document.querySelectorAll('.wheel-item');
    wheelItems.forEach(item => item.classList.add('defocused'));
    
    // Create and show the popup with style details
    let popup = document.createElement('div');
    popup.id = 'style-popup';
    popup.classList.add('popup');
    
    let styleDetails = getStyleDetails(style);
    popup.innerHTML = `
        <div class="popup-content">
            <h2>${styleDetails.name}</h2>
            <p>Price: ${styleDetails.price}</p>
            <p>Page Size: ${styleDetails.size}</p>
            <p>Shading Style: ${styleDetails.shading}</p>
            <button onclick="closePopup()">Close</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function closePopup() {
    let popup = document.getElementById('style-popup');
    if (popup) {
        popup.remove();
        let wheelItems = document.querySelectorAll('.wheel-item');
        wheelItems.forEach(item => item.classList.remove('defocused'));
    }
}

function getStyleDetails(style) {
    // Example data, you can replace this with actual dynamic data
    const styles = {
        style1: { name: 'Style 1', price: '₹2000', size: 'A4', shading: 'Pencil Sketch' },
        style2: { name: 'Style 2', price: '₹3000', size: 'A3', shading: 'Charcoal' },
        style3: { name: 'Style 3', price: '₹2500', size: 'A4', shading: 'Color' },
        style4: { name: 'Style 4', price: '₹4000', size: 'A2', shading: 'Watercolor' },
        style5: { name: 'Style 5', price: '₹5000', size: 'A1', shading: 'Oil Painting' },
    };
    return styles[style];
}
