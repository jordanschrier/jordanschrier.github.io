/* 
    I established this code to make the descriptions of my work a little
    more robust; hardcoding long paragraphs in the HTML for each page
    would be messier and less convenient to edit later on. I also wanted
    to minimize the number of files, so this solution uses just one text
    file and one script file.
*/
let description_list = [];
let desc_ids = ["bio", "wicked_desc", "ANE_desc", "clippies_desc", "prosaic_desc"];
let current_desc = "";

function load_descriptions(){
    fetch('descriptions.txt')
    .then(response => response.text())
    .then(data => {
        description_list = data.split('~'); //separating each description from the file

        //Assigning the HTML of each description to what we read from the file
        for(s in desc_ids){ //for each description id
            current_desc = document.getElementById(desc_ids[s]); //find associated desc
            if(current_desc != null){ //if the description exists on the current HTML page
                current_desc.innerHTML = description_list[s]; //change HTML of desc
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
load_descriptions();

document.addEventListener("DOMContentLoaded", function() {

    //trigger modal box when image is clicked

    var path = window.location.pathname;
    if (path !== "/about.html") {
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

    //display contact form

    //check that we're on about page
    if (path === "/about.html" || path === "/") {
        let visible = false;
        const contact = document.getElementById("contact");
        const box = document.getElementById("fs-frm");

        contact.addEventListener("click", function() {
            if(visible){
                box.style.display = "none";
                visible = false;
            }else{
                box.style.display = "block";
                visible = true;
            }
        });
    }
});

