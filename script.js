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



// Your list of recipes
const recipes = [
    { title: 'PB & J French Toast', url: 'recipes/pumpkin-spice-syrup.html', content: '...' },
    { title: 'Vegan Bacon', url: 'recipes/vegan-bacon.html', content: '...' },
    { title: 'Basil Aioli', url: 'recipes/basil-aioli.html', content: '...' },
    // ... rest of your recipes ...
  ]
  
  
  // Fuse.js options
  const options = {
    keys: ['title','content'],
    includeScore: true,
    threshold: 0.2
  }
  
  // Create a new instance of Fuse
  const fuse = new Fuse(recipes, options)


  function searchFunction() {
    // Get the search term from the input field
    let query = document.getElementById('search').value;
  
    // Perform the search
    let results = fuse.search(query);
  
    // Show the results in the 'results' div
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (results.length > 0) {
      resultsDiv.style.display = "block";  // make the dropdown visible
      for (let result of results) {
        let a = document.createElement('a');
        a.textContent = result.item.title;
        a.href = result.item.url;
        resultsDiv.appendChild(a);
        resultsDiv.appendChild(document.createElement('br'));
      }
    } else {
      resultsDiv.style.display = "none";  // hide the dropdown if there are no results
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#search')) {
      const dropdowns = document.getElementsByClassName("searchDropdown");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i]
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none'
        }
      }
    }
  }