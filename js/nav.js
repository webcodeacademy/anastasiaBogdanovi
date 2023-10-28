const nav = ["home", "we offer", "portfolio", "about us", "contact"];

const links = ["index.html", "weoffer.html", "portfolio.html", "about.html", "contact.html"];

let navigtext = "<ul>";
for(let x=0; x<nav.length; x++){
    navigtext += '<li><a href="'+ links[x] + '">' + nav[x] + "</a></li>";
   
}
navigtext += "</ul>";

console.log(navigtext);

document.getElementById("navigacia").innerHTML = navigtext;