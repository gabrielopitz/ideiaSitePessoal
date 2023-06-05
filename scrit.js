function expandImage(img) {
    // Show the overlay
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';

    // Set the image source in the overlay
    const overlayImg = overlay.querySelector('img');
    overlayImg.src = img.src;
  }

  function closeOverlay() {
    // Hide the overlay
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
  }