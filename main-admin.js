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








