/* 
    I established this code to make the descriptions of my work a little
    more robust; hardcoding long paragraphs in the HTML for each page
    would be messier and less convenient to edit later on.
*/
let description_list = [];
let desc_ids = ["bio", "wicked_desc", "ANE_desc", "clippies_desc", "prosaic_desc"];
let current_desc = "";

fetch('descriptions.txt')
    .then(response => response.text())
    .then(data => {
        description_list = data.split('-'); //separating each description from the file
    })
    .catch(error => {
        console.error('Error:', error);
    });

//Assigning the HTML of each description to what we read from the file
for(s in desc_ids){ //for each description id
    current_desc = document.getElementById(desc_ids[s]); //find associated desc
    current_desc.innerHTML = description_list[s]; //change HTML of desc
}
