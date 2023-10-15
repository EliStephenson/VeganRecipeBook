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
    { title: 'Chocolate Pancakes with Tahini Topping[', url: 'recipes/breakfast/chocolate-pancakes-with-tahini-topping.html', content: '...' },
    { title: 'Churro Baked Oats Stuffed with Cream Cheese', url: 'recipes/breakfast/churro-baked-oats-stuffed-with-cream-cheese.html', content: '...' },
    { title: 'Crepes', url: 'recipes/breakfast/crepes.html', content: '...' },
    { title: 'Eggy Tofu Scramble', url: 'recipes/breakfast/eggy-tofu-scramble.html', content: '...' },
    { title: 'Fruit Pastry/Toaster Strudel', url: 'recipes/breakfast/fruit-pastry-toaster-strudel.html', content: '...' },
    { title: 'Lemon Poppy Seed Muffins', url: 'recipes/breakfast/lemon-poppy-seed-muffins.html', content: '...' },
    { title: 'Omelet', url: 'recipes/breakfast/omelet.html', content: '...' },
    { title: 'Pancakes', url: 'recipes/breakfast/pancakes.html', content: '...' },
    { title: 'PB & J French Toast', url: 'recipes/breakfast/pbj-french-toast.html', content: '...' },
    { title: 'Strawberry Sticky Buns', url: 'recipes/breakfast/strawberry-sticky-buns.html', content: '...' },
    { title: 'Vegan Bacon', url: 'recipes/breakfast/vegan-bacon.html', content: '...' },
    { title: 'Very Easy Bagels', url: 'recipes/breakfast/very-easy-bagles.html', content: '...' },
    { title: 'Waffles', url: 'recipes/breakfast/waffles.html', content: '...' },
    // end of breakfast beginning of dinner
    { title: 'BBQ Pulled Tofu', url: 'recipes/dinner/bbq-pulled-tofu.html', content: '...' },
    { title: 'Black Bean Burgers', url: 'recipes/dinner/black-bean-burgers.html', content: '...' },
    { title: 'Butternut Squash Soup', url: 'recipes/dinner/butternut-squash-soup.html', content: '...' },
    { title: 'Cajun Pasta With Breaded Tofu', url: 'recipes/dinner/cajun-pasta-with-breaded-tofu.html', content: '...' },
    { title: 'Caramelized Onion Tofu Sandwich', url: 'recipes/dinner/caramelized-onion-tofu-sandwhich.html', content: '...' },
    { title: 'Cheesy Gochujang Noodles', url: 'recipes/dinner/cheesy-gochujang-noodles.html', content: '...' },
    { title: 'Crispy Buffalo Oyster Mushrooms', url: 'recipes/dinner/crispy-buffalo-oyster-mushrooms.html', content: '...' },
    { title: 'Crispy Smashed Potatoes', url: 'recipes/dinner/crispy-smashed-potatoes.html', content: '...' },
    { title: 'Croque Monsieur', url: 'recipes/dinner/croque-monsieur.html', content: '...' },
    { title: 'Garlic Bread Grilled Cheese', url: 'recipes/dinner/garlic-bread-grilled-cheese.html', content: '...' },
    { title: 'Gobi Manchurian', url: 'recipes/dinner/gobi-manchurian.html', content: '...' },
    { title: 'Italian White Bean Stew', url: 'recipes/dinner/italian-white-bean-stew.html', content: '...' },
    { title: 'Kale and Brussel Sprout Salad', url: 'recipes/dinner/kale-and-brussel-sprout-salad.html', content: '...' },
    { title: 'Kale and Tempeh Ceasar Salad', url: 'recipes/dinner/kale-and-tempeh-ceasar-salad.html', content: '...' },
    { title: 'Lemon & Zucchini Gnocchi', url: 'recipes/dinner/lemon-and-zucchini-gnocchi.html', content: '...' },
    { title: 'Lemon Walnut Chickpea Salad', url: 'recipes/dinner/lemon-walnut-chickpea-salad.html', content: '...' },
    { title: 'Mashed Potatoes', url: 'recipes/dinner/mashed-potatoes.html', content: '...' },
    { title: 'Mediterranean Quinoa Bowl', url: 'recipes/dinner/mediterranean-quinoa-bowl.html', content: '...' },
    { title: 'Mushroom Banh Mi', url: 'recipes/dinner/mushroom-bahn-mi.html', content: '...' },
    { title: 'Mushroom Carbonara', url: 'recipes/dinner/mushroom-carbonara.html', content: '...' },
    { title: 'Mushroom Cheeseburger', url: 'recipes/dinner/mushroom-cheeseburger.html', content: '...' },
    { title: 'Mushroom Soup', url: 'recipes/dinner/mushroom-soup.html', content: '...' },
    { title: 'Potato Sausage Wraps', url: 'recipes/dinner/potato-sausage-wraps.html', content: '...' },
    { title: 'Roasted Broccoli Salad', url: 'recipes/dinner/roasted-broccoli-salad.html', content: '...' },
    { title: 'Ricks Winter Salad', url: 'recipes/dinner/ricks-winter-salad.html', content: '...' },
    { title: 'Samosa Wraps', url: 'recipes/dinner/samosa-wraps.html', content: '...' },
    { title: 'Scalloped Potatoes', url: 'recipes/dinner/scalloped-potatoes.html', content: '...' },
    { title: 'Sesame Udon Noodle Salad', url: 'recipes/dinner/sesame-udon-noodle-salad.html', content: '...' },
    { title: 'Sheet Pan Veggies and Tofu', url: 'recipes/dinner/sheet-pan-veggies-and-tofu.html', content: '...' },
    { title: 'Mushroom Tacos', url: 'recipes/dinner/simple-mushroom-tacos.html', content: '...' },
    { title: 'Spicy Chickpea Quesadillas', url: 'recipes/dinner/spicy-chickpea-quesadillas.html', content: '...' },
    { title: 'Spicy Crispy Cauliflower', url: 'recipes/dinner/spicy-crispy-cauliflower.html', content: '...' },
    { title: 'Spinach and Artichoke Pasta', url: 'recipes/dinner/spinach-and-artichoke-pasta.html', content: '...' },
    { title: 'Stuffed Mushrooms', url: 'recipes/dinner/stuffed-mushrooms.html', content: '...' },
    { title: 'Stuffed Sweet Potato', url: 'recipes/dinner/stuffed-sweet-potato.html', content: '...' },
    { title: 'Sweet and Spicy Jackfruit', url: 'recipes/dinner/sweet-and-spicy-jackfruit.html', content: '...' },
    { title: 'Thai Burritos', url: 'recipes/dinner/thai-burritos.html', content: '...' },
    { title: 'Thai Panang Curry With Vegetables', url: 'recipes/dinner/thai-panang-curry-with-vegetables.html', content: '...' },
    { title: 'Veggie Potstickers', url: 'recipes/dinner/veggie-potstickers.html', content: '...' },
    // end of dinner beginning of snacks and sides
    { title: 'Cornbread', url: 'recipes/snacksnsides/cornbread.html', content: '...' },
    { title: 'Crispy Chickpeas', url: 'recipes/snacksnsides/crispy-chickpeas.html', content: '...' },
    { title: 'Granola', url: 'recipes/snacksnsides/granola.html', content: '...' },
    { title: 'Spanish Rice', url: 'recipes/snacksnsides/spanish-rice.html', content: '...' },
    { title: 'Spinach Artichoke Dip', url: 'recipes/snacksnsides/spinach-artichoke-dip.html', content: '...' },
    { title: 'Tofu Feta', url: 'recipes/snacksnsides/tofu-feta.html', content: '...' },
    { title: 'Zucchini Fries', url: 'recipes/snacksnsides/zucchini-fries.html', content: '...' },
    // end of snacks and sides, beginning of desserts
    { title: 'Chocolate Mug Cake', url: 'recipes/dessert/chocolate-mug-cake.html', content: '...' },
    { title: 'Crème Brûlée', url: 'recipes/dessert/creme-brulee.html', content: '...' },
    { title: 'Hazelnut Cookie Bars', url: 'recipes/dessert/hazelnut-cookie-bars.html', content: '...' },
    { title: 'Layered Chocolate Mousse', url: 'recipes/dessert/layered-chocolate-mousse.html', content: '...' },
    { title: 'Lemon Cream Curd', url: 'recipes/dessert/lemon-cream-curd.html', content: '...' },
    { title: 'Miso Caramel', url: 'recipes/dessert/miso-caramel.html', content: '...' },
    { title: 'Muddy Buddies', url: 'recipes/dessert/muddy-buddies.html', content: '...' },
    { title: 'No Bake Chocolate Peanut Butter Cookies', url: 'recipes/dessert/no-bake-chocolate-peanut-butter-cookies.html', content: '...' },
    { title: 'No Bake Cookie Dough Bars', url: 'recipes/dessert/no-bake-cookie-dough-bars.html', content: '...' },
    { title: 'Pumpkin Cream Cheese Muffins', url: 'recipes/dessert/pumpkin-cream-cheese-muffins.html', content: '...' },
    { title: 'Samoas (Coconut Cookie)', url: 'recipes/dessert/samoas-coconut-cookie.html', content: '...' },
    { title: 'Snickerdoodles', url: 'recipes/dessert/snickerdoodles.html', content: '...' },
    // end of desserts, beginning of drinks
    { title: 'Golden Turmeric Latte', url: 'recipes/drinks/golden-turmeric-latte.html', content: '...' },
    { title: 'Iced Mocha', url: 'recipes/drinks/iced-mocha.html', content: '...' },
    { title: 'Lemonade', url: 'recipes/drinks/lemonade.html', content: '...' },
    { title: 'Pumpkin Spice Syrup', url: 'recipes/drinks/pumpkin-spice-syrup.html', content: '...' },
    // end of drinks, beginning of sauces and cheeses
    { title: 'Alfredo Sauce', url: 'recipes/saucesncheeses/alfredo-sauce.html', content: '...' },
    { title: 'Avocado Cilantro Dressing', url: 'recipes/saucesncheeses/avocado-cilantro-dressing.html', content: '...' },
    { title: 'Barbecue Sauce', url: 'recipes/saucesncheeses/barbecue-sauce.html', content: '...' },
    { title: 'Basil Aioli', url: 'recipes/saucesncheeses/basil-aioli.html', content: '...' },
    { title: 'Cashew Mac and Cheese Sauce', url: 'recipes/saucesncheeses/cashew-mac-n-cheese.html', content: '...' },
    { title: 'Chimichurri Sauce', url: 'recipes/saucesncheeses/chimichurri-sauce.html', content: '...' },
    { title: 'Cilantro Pesto', url: 'recipes/saucesncheeses/cilantro-pesto.html', content: '...' },
    { title: 'Fermented Cashew Cheese', url: 'recipes/saucesncheeses/fermented-cashew-cheese.html', content: '...' },
    { title: 'Green Goddess Sauce', url: 'recipes/saucesncheeses/green-goddess-sauce.html', content: '...' },
    { title: 'Hummus', url: 'recipes/saucesncheeses/hummus.html', content: '...' },
    { title: 'Lentil Dip', url: 'recipes/saucesncheeses/lentil-dip.html', content: '...' },
    { title: 'Mushroom Gravy', url: 'recipes/saucesncheeses/mushroom-gravy.html', content: '...' },
    { title: 'Nacho Cheese Sauce', url: 'recipes/saucesncheeses/nacho-cheese-sauce.html', content: '...' },
    { title: 'Nutella', url: 'recipes/saucesncheeses/nutella.html', content: '...' },
    { title: 'Peanut Sauce', url: 'recipes/saucesncheeses/peanut-sauce.html', content: '...' },
    { title: 'Queso', url: 'recipes/saucesncheeses/queso.html', content: '...' },
    { title: 'Ricotta', url: 'recipes/saucesncheeses/ricotta.html', content: '...' },
    { title: 'Roasted Red Pepper Sauce', url: 'recipes/saucesncheeses/roasted-red-pepper-sauce.html', content: '...' },
    { title: 'Stovetop Mac and Cheese Sauce', url: 'recipes/saucesncheeses/stovetop-mac-and-cheese-sauce.html', content: '...' },
    { title: 'Sweet Tahini Sauce', url: 'recipes/saucesncheeses/sweet-tahini-sauce.html', content: '...' },

    // ... rest of your recipes ...
    { title: '', url: '', content: '...' },
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