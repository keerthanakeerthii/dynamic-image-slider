// List of image URLs (you can replace with your own)
const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3",
  "https://via.placeholder.com/400x200?text=Image+4"
];

let currentIndex = 0;

// Get DOM elements
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const thumbnailsDiv = document.getElementById('thumbnails');

// Function to show image at currentIndex
function showImage(index) {
  sliderImage.src = images[index];
  updateThumbnails(index);
}

// Event listeners for buttons
prevBtn.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Dynamically create thumbnails
function createThumbnails() {
  thumbnailsDiv.innerHTML = '';
  images.forEach((imgSrc, i) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('thumbnail');
    img.addEventListener('click', function() {
      currentIndex = i;
      showImage(currentIndex);
    });
    thumbnailsDiv.appendChild(img);
  });
}

// Highlight current thumbnail
function updateThumbnails(activeIndex) {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === activeIndex);
  });
}

// Initialize slider
createThumbnails();
showImage(currentIndex);