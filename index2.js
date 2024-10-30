<script>
let currentSlide = 0;

function changeSlide(direction) {
    const carousels = document.querySelectorAll('.carousel-images');

    carousels.forEach((carousel) => {
        const slides = carousel.children;
        const totalSlides = slides.length;
        
        // Update current slide index
        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = totalSlides - 1; // Go to last slide
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0; // Go to first slide
        }

        // Move the slides
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}
</script>
