    // Array of images and corresponding legends
    const imagebase = [
        { src: 'assets/imgs-newsite/file-01.png', legend: 'Typeface design' },
        { src: 'assets/imgs-newsite/file-02.gif', legend: 'Typeface design' },
        { src: 'assets/imgs-newsite/file-03.gif', legend: 'Thesis' },
        { src: 'assets/imgs-newsite/file-04.png', legend: 'Thesis' },
        { src: 'assets/imgs-newsite/file-05.png', legend: 'Thesis' },
        { src: 'assets/imgs-newsite/file-05.5.gif', legend: 'Thesis' },
        { src: 'assets/imgs-newsite/file-06.png', legend: 'Poster design' },
        { src: 'assets/imgs-newsite/file-07.png', legend: 'Typeface/stencil design' },
        { src: 'assets/imgs-newsite/file-08.png', legend: 'Typeface/stencil design' },
        { src: 'assets/imgs-newsite/file-09.png', legend: 'Poster design' }
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
    setInterval(nextImage, 10000);

    // Initialize page with a random image from array at each load
    displayImage(currentIndex);

    // Disable all scrolling (x and y)
    window.addEventListener('scroll', () => window.scrollTo(0, 0));

    $(document).ready(function() {
        $("#gallery").draggable();
    });
