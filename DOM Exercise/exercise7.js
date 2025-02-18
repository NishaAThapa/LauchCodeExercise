/*Exercise 7: Changing Attributes with setAttribute

Description: 

Assume there's an image with ID 'main-image' in your HTML. 
Change its src attribute to point "image2.png". */

// Select the image element with ID 'main-image'
let imageElement = document.getElementById("main-image");

// Change its 'src' attribute to "image2.png"
imageElement.setAttribute("src", "image2.png");

// Optionally, change the 'alt' attribute
imageElement.setAttribute("alt", "Updated Image");
