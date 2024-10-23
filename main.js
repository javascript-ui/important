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

function loadCSS_bootstrap(url) {
    var link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    integrity = 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65';
    crossorigin='anonymous';
    document.head.appendChild(link);
}

try
 //try start

{

loadCSS('assets/vendor/bootstrap/css/bootstrap.min.css');
// Example: Load CSS from CDN
loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');


    // Example: Load JS from CDN, with jQuery first and then Bootstrap
loadScript('https://code.jquery.com/jquery-3.6.0.min.js', function() {
   
});
    // Load Bootstrap JS after jQuery has loaded
    loadScript('assets/vendor/bootstrap/js/bootstrap.bundle.min.js', function() {
       
    });
    //<!-- Vendor JS Files -->
    loadScript('assets/vendor/php-email-form/validate.js', function() {
       
    });

    loadScript('assets/vendor/aos/aos.js', function() {
       
    });

    loadScript('assets/vendor/swiper/swiper-bundle.min.js', function() {
       
    });

    loadScript('assets/vendor/purecounter/purecounter_vanilla.js', function() {
       
    });
    loadScript('assets/vendor/waypoints/noframework.waypoints.js', function() {
        
    });
    loadScript('assets/vendor/glightbox/js/glightbox.min.js', function() {
        
    });
    loadScript('assets/vendor/imagesloaded/imagesloaded.pkgd.min.js', function() {
       
    });
    loadScript('assets/vendor/isotope-layout/isotope.pkgd.min.js', function() {
       
    });
    loadScript('https://raw.githack.com/jcmoralba/important_jc/main/main.js', function() {
        
    });
    // main js file
    loadScript('assets/js/main.js', function() {      
    });



    var internet = (window.navigator.onLine ? 'on' : 'off') + 'line';
    console.log(internet);

    if (internet == "offline") {
        const innertextexample = 
        document.querySelector("body");
        innertextexample.innerHTML  = 
        "Error";
        loadScript('assets/js/main.js', function() {      
        });
    }



    //try end
}
catch(e)
{
    console.log('have some error');
}








