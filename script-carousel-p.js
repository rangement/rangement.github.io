    // Array of images and corresponding legends
    const imagebase = [
        { src: 'assets/FROMTHERIVERTOTHESEAPALESTINEWILLBEFREE!.png', legend: 'Ceasefire Now' },
        { src: 'assets/PLO-1989.jpg', legend: 'End the Occupation' },
        { src: 'assets/Samidoun-2016.jpg', legend: 'End the Apartheid' },
        { src: 'assets/Palestine-stamps-1982.png', legend: 'From the river' },
        { src: 'assets/PLO-1989-2.jpg', legend: 'To the sea' },
        { src: 'assets/FROMTHERIVERTOTHESEAPALESTINEWILLBEFREE.png', legend: 'Palestine will be free' }
    ];

    //Preloading:
    // Array of image URLs from the imagebase array
    const imageUrls = imagebase.map(image => image.src);
    // Preloaded images array
    const preloadedImages = [];
    function preloadImages() {
      for (const imageUrl of imageUrls) {
        const img = new Image();
        img.src = imageUrl;
        preloadedImages.push(img);
      }
    }
    // Preload images as soon as the page loads
    window.addEventListener('load', preloadImages);


    //
    let currentIndex = Math.floor(Math.random() * imagebase.length);
    const gallery = document.getElementById('gallery');
    const caption = document.getElementById('caption');

    function displayImage(index) {
        gallery.style.backgroundImage = `url(${imagebase[index].src})`;
        caption.textContent = imagebase[index].legend;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imagebase.length;
        displayImage(currentIndex);
    }

    // Click through images
    gallery.addEventListener('click', nextImage);

    // Automatically cycling through images every 10 seconds
    setInterval(nextImage, 4000);

    // Initialize page with a random image from array at each load
    displayImage(currentIndex);

    // Disable all scrolling (x and y)
    window.addEventListener('scroll', () => window.scrollTo(0, 0));
    //
    // $(document).ready(function() {
    //     $("#gallery").draggable();
    // });
