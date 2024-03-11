// gallery.js

document.addEventListener('DOMContentLoaded', function () {
    // Sample image sources (replace with your actual image URLs)
    const imageSources = [
        "../assets/gallery/events/image01.jpg",
        "../assets/gallery/events/image02.jpg",
        "../assets/gallery/events/image03.jpg",
        "../assets/gallery/events/image04.jpg",
        "../assets/gallery/events/image05.jpg",
        "../assets/gallery/events/image06.jpg",
        "../assets/gallery/events/image07.jpg",
        "../assets/gallery/events/image08.jpg",
        "../assets/gallery/events/image09.png",
        "../assets/gallery/events/image10.jpg",
        "../assets/gallery/events/image11.jpg",
        "../assets/gallery/events/image12.jpg",
        "../assets/gallery/events/image13.jpg",
        "../assets/gallery/events/image14.jpg",
        "../assets/gallery/events/image15.jpg",
    ];

    const masonryHolder = document.getElementById('galleryForModal');

    // Create masonry blocks dynamically based on image sources
    imageSources.forEach((src, index) => {
        const masonryBlock = document.createElement('div');
        masonryBlock.classList.add('masonary-block');
        masonryBlock.setAttribute('data-target', '#carouselExampleIndicators');
        masonryBlock.setAttribute('data-slide-to', index.toString());

        const image = document.createElement('img');
        image.classList.add('hoverImage');
        image.src = src;
        image.alt = '';

        masonryBlock.appendChild(image);
        masonryHolder.appendChild(masonryBlock);
    });
});
