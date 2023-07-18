// Get the menu button and menu content
var menuButton = document.getElementById("menuButton");
var menuContent = document.getElementById("menuContent");

// Add event listener for click
menuButton.addEventListener("click", function() {
    if (menuContent.style.maxHeight){
        menuContent.style.maxHeight = null;
    } else {
        menuContent.style.maxHeight = menuContent.scrollHeight + "px";
    } 
});