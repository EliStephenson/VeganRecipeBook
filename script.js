// Get all the dropdown buttons
var dropdowns = document.getElementsByClassName("dropdown");

// Loop through all dropdown buttons to toggle between hiding and showing content
for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].getElementsByClassName("dropbtn")[0].addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("show");
    });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
