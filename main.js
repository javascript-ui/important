// Function to load a script file
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.onload = callback;
    document.head.appendChild(script);
}

// Function to load a CSS file
function loadCSS(url) {
    var link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

// Example: Load CSS from CDN
loadCSS('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');





// Example: Load JS from CDN, with jQuery first and then Bootstrap
loadScript('https://code.jquery.com/jquery-3.6.0.min.js', function() {
    console.log('jQuery loaded!');

    // Load Bootstrap JS after jQuery has loaded
    loadScript('assets/vendor/bootstrap/js/bootstrap.bundle.min.js', function() {
        console.log('Bootstrap JS loaded!');
    });
    //<!-- Vendor JS Files -->
    loadScript('assets/vendor/php-email-form/validate.js', function() {
        console.log('Bootstrap JS loaded!');
    });

    loadScript('assets/vendor/aos/aos.js', function() {
        console.log('Bootstrap JS loaded!');
    });

    loadScript('assets/vendor/swiper/swiper-bundle.min.js', function() {
        console.log('Bootstrap JS loaded!');
    });

    loadScript('assets/vendor/purecounter/purecounter_vanilla.js', function() {
        console.log('Bootstrap JS loaded!');
    });
    loadScript('assets/vendor/waypoints/noframework.waypoints.js', function() {
        console.log('Bootstrap JS loaded!');
    });
    loadScript('assets/vendor/glightbox/js/glightbox.min.js', function() {
        console.log('Bootstrap JS loaded!');
    });
    loadScript('assets/vendor/imagesloaded/imagesloaded.pkgd.min.js', function() {
        console.log('Bootstrap JS loaded!');
    });
    loadScript('assets/vendor/isotope-layout/isotope.pkgd.min.js', function() {
        console.log('Bootstrap JS loaded!');
    });
    // main js file
    loadScript('assets/js/main.js', function() {      
    });


    
});
