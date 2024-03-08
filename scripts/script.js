let navContainer = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section');


// Active Links --------------------------------------------->

window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


document.addEventListener('DOMContentLoaded', () => {
    // Attach a click event listener to each navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target section's ID from the href attribute
            let targetId = this.getAttribute('href').substring(1);

            // Find the target section element
            let targetSection = document.getElementById(targetId);
            // console.log(targetId);

            // Scroll to the target section with smooth behavior
            if (targetSection) {
                navContainer.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('.nav-link[href*="' + targetId + '"]').classList.add('active');
                });
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});



// Active Links Ends --------------------------------------->