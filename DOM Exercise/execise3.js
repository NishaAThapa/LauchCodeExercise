/*/*
Exercise 3: Accessing Multiple Elements with querySelectorAll

Description: 

Use querySelectorAll to select all elements with the class 'article-text' and 
set their font size to 18px.
*/ 
// Select all elements with class 'article-text'
let articles = document.querySelectorAll(".article-text");

// Loop through each element and set its font size to 18px
articles.forEach(article => {
    article.style.fontSize = "18px";
});
