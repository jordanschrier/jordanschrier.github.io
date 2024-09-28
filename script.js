//only perform these functions when everything has loaded
document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    /**
     * Loads the header in on every page by inserting the data from header.html.
     * This makes header updates more robust.
     */
    
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            //after header has loaded, use the current page to determine which nav tab should be highlighted
            const home = document.getElementById("index");
            const about = document.getElementById("about");
            const resume = document.getElementById("resume");
        
            if(path == "/index.html" || path == "/"){
                home.style.backgroundColor ="#d4dea6";
                home.style.borderRadius = "20px";
            }else if(path == "/about.html"){
                about.style.backgroundColor ="#d4dea6";
                about.style.borderRadius = "20px";
            }else if(path == "/resume.html"){
                resume.style.backgroundColor ="#d4dea6";
                resume.style.borderRadius = "20px";
            }
        });
        
    //trigger modal box when image is clicked

    /**
     * For the sake of having a single Javascript file, I'm checking which window the
     * user is currently on so we can avoid errors related to this function attempting to
     * find objects that do not exist. The 'about' and 'home' pages do not have the modal
     * functionality like the project pages do.
     */
    if (path !== "/about.html" && path !== "/index.html" && path !=="/resume.html") {
        //get the images and the current modal box
        const images = document.querySelectorAll(".work-image");
        const modal = document.querySelector(".image-display");
        const close = document.querySelector(".close");

        images.forEach(image => {
            image.addEventListener("click", function() {
                const current = document.createElement("img"); //make new image from clicked image
                current.src = this.src;
                modal.innerHTML = ""; //clear previous content
                modal.appendChild(current); //add image into modal
                modal.appendChild(close); //add close button
                modal.style.display = "flex"; //display modal box
            });
        });

        modal.addEventListener("click", function() {
            modal.style.display = "none"; //hide modal box when clicked
        });

        close.addEventListener("click", function() {
            modal.style.display = "none"; //hide modal box when x is clicked
        });
    }
});

