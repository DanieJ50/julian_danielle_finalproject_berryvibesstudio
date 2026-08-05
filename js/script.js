"use strict";

const recipes = [
  {
    "name": "Fluffy CCD Pancakes",
    "category": "breakfast",
    "flavor": "Cloud-soft, warm, and softly sweet.",
    "slug": "fluffy-ccd-pancakes",
    "image": "assets/images/recipes/fluffy-ccd-pancakes.svg"
  },
  {
    "name": "Cinnamony Cinnamon Maple Buttermilk Pancakes",
    "category": "breakfast",
    "flavor": "Diner-style fluff with cinnamon-maple comfort.",
    "slug": "cinnamony-cinnamon-maple-buttermilk-pancakes",
    "image": "assets/images/recipes/cinnamony-cinnamon-maple-buttermilk-pancakes.svg",
    "details": {
      "ingredients": [
        "1/2 cup hybrid flour blend",
        "1/2 tablespoon cornstarch",
        "1 tablespoon pumpkin puree",
        "1 tablespoon ground flaxseed",
        "Milk as needed",
        "Cinnamon, vanilla, baking powder, pinch of salt"
      ],
      "steps": [
        "Whisk dry ingredients.",
        "Stir in pumpkin, flaxseed, and enough milk for a thick pourable batter.",
        "Rest 3–5 minutes.",
        "Cook over medium-low heat until fluffy and golden."
      ],
      "tip": "Resting the batter helps the pancakes become fluffier."
    }
  },
  {
    "name": "Pumpkin Flaxseed Cinnamon Pancakes",
    "category": "breakfast",
    "flavor": "Tender, spiced, and gently nutty without nuts.",
    "slug": "pumpkin-flaxseed-cinnamon-pancakes",
    "image": "assets/images/recipes/pumpkin-flaxseed-cinnamon-pancakes.svg"
  },
  {
    "name": "Kefir Pancakes",
    "category": "breakfast",
    "flavor": "Tangy buttermilk-style lift and a pillowy center.",
    "slug": "kefir-pancakes",
    "image": "assets/images/recipes/kefir-pancakes.svg"
  },
  {
    "name": "Cottage Cheese Pancakes",
    "category": "breakfast",
    "flavor": "Creamy, structured, and extra tender.",
    "slug": "cottage-cheese-pancakes",
    "image": "assets/images/recipes/cottage-cheese-pancakes.svg"
  },
  {
    "name": "McDonald's-Style CCD Hotcakes",
    "category": "breakfast",
    "flavor": "Soft golden stacks with nostalgic sweetness.",
    "slug": "mcdonald-s-style-ccd-hotcakes",
    "image": "assets/images/recipes/mcdonald-s-style-ccd-hotcakes.svg"
  },
  {
    "name": "Cinnamon Greek Yogurt French Toast",
    "category": "breakfast",
    "flavor": "Custardy inside with cinnamon warmth.",
    "slug": "cinnamon-greek-yogurt-french-toast",
    "image": "assets/images/recipes/cinnamon-greek-yogurt-french-toast.svg"
  },
  {
    "name": "Pumpkin Cinnamon French Toast",
    "category": "breakfast",
    "flavor": "Autumn-spiced, soft, and golden-edged.",
    "slug": "pumpkin-cinnamon-french-toast",
    "image": "assets/images/recipes/pumpkin-cinnamon-french-toast.svg"
  },
  {
    "name": "Pancake Bake",
    "category": "breakfast",
    "flavor": "A sliceable pancake with a tender baked crumb.",
    "slug": "pancake-bake",
    "image": "assets/images/recipes/pancake-bake.svg"
  },
  {
    "name": "French Toast Bake",
    "category": "breakfast",
    "flavor": "Cozy casserole energy in a compact bake.",
    "slug": "french-toast-bake",
    "image": "assets/images/recipes/french-toast-bake.svg"
  },
  {
    "name": "Chocolate Chip Breakfast Cake",
    "category": "breakfast",
    "flavor": "Breakfast-soft with little melted chocolate pockets.",
    "slug": "chocolate-chip-breakfast-cake",
    "image": "assets/images/recipes/chocolate-chip-breakfast-cake.svg"
  },
  {
    "name": "Maple Vanilla Baked Oats",
    "category": "breakfast",
    "flavor": "Cake-like baked oats with maple-vanilla warmth.",
    "slug": "maple-vanilla-baked-oats",
    "image": "assets/images/recipes/maple-vanilla-baked-oats.svg"
  },
  {
    "name": "Mocha Breakfast Loaf",
    "category": "breakfast",
    "flavor": "Coffee-cocoa aroma with a soft loaf texture.",
    "slug": "mocha-breakfast-loaf",
    "image": "assets/images/recipes/mocha-breakfast-loaf.svg"
  },
  {
    "name": "Clear-Glaze Microwave Donuts",
    "category": "bakery",
    "flavor": "Fluffy quick donuts under a glossy sweet glaze.",
    "slug": "clear-glaze-microwave-donuts",
    "image": "assets/images/recipes/clear-glaze-microwave-donuts.svg"
  },
  {
    "name": "Glazed Vanilla Donuts",
    "category": "bakery",
    "flavor": "Classic vanilla bakery sweetness, soft and bright.",
    "slug": "glazed-vanilla-donuts",
    "image": "assets/images/recipes/glazed-vanilla-donuts.svg"
  },
  {
    "name": "Chocolate Glaze Donuts",
    "category": "bakery",
    "flavor": "Tender donuts with a smooth cocoa finish.",
    "slug": "chocolate-glaze-donuts",
    "image": "assets/images/recipes/chocolate-glaze-donuts.svg"
  },
  {
    "name": "Cinnamon Sugar Donut Holes",
    "category": "bakery",
    "flavor": "Warm, sparkly, bite-sized cinnamon clouds.",
    "slug": "cinnamon-sugar-donut-holes",
    "image": "assets/images/recipes/cinnamon-sugar-donut-holes.svg"
  },
  {
    "name": "Sour Cream Flaxseed Cinnamon Rolls",
    "category": "bakery",
    "flavor": "Tangy-soft spirals with a cinnamon center.",
    "slug": "sour-cream-flaxseed-cinnamon-rolls",
    "image": "assets/images/recipes/sour-cream-flaxseed-cinnamon-rolls.svg"
  },
  {
    "name": "Kefir Cinnamon Rolls",
    "category": "bakery",
    "flavor": "Pillowy rolls with gentle cultured tang.",
    "slug": "kefir-cinnamon-rolls",
    "image": "assets/images/recipes/kefir-cinnamon-rolls.svg"
  },
  {
    "name": "Microwave Cinnamon Rolls",
    "category": "bakery",
    "flavor": "Fast, fluffy spirals made for immediate joy.",
    "slug": "microwave-cinnamon-rolls",
    "image": "assets/images/recipes/microwave-cinnamon-rolls.svg",
    "details": {
      "ingredients": [
        "3/4 cup hybrid flour blend",
        "1/2 tablespoon cornstarch",
        "Milk as needed for soft dough",
        "Ground flaxseed",
        "Cinnamon and sweetener",
        "Tiny amount of butter or oil",
        "Optional powdered-milk glaze"
      ],
      "steps": [
        "Mix dry ingredients and gradually add milk.",
        "Roll dough into a rectangle.",
        "Add the cinnamon filling, roll, and slice.",
        "Microwave in short intervals and glaze warm."
      ],
      "tip": "Keep the dough soft rather than dry for the fluffiest microwave roll."
    }
  },
  {
    "name": "Cinnamon Roll Bowl Cake",
    "category": "bakery",
    "flavor": "Swirled cinnamon-roll flavor in spoonable cake form.",
    "slug": "cinnamon-roll-bowl-cake",
    "image": "assets/images/recipes/cinnamon-roll-bowl-cake.svg"
  },
  {
    "name": "Pumpkin Spice Muffins",
    "category": "bakery",
    "flavor": "Moist domes with cozy pumpkin spice.",
    "slug": "pumpkin-spice-muffins",
    "image": "assets/images/recipes/pumpkin-spice-muffins.svg"
  },
  {
    "name": "Mocha Crumb Muffins",
    "category": "bakery",
    "flavor": "Coffee-shop cocoa flavor with crumbly tops.",
    "slug": "mocha-crumb-muffins",
    "image": "assets/images/recipes/mocha-crumb-muffins.svg"
  },
  {
    "name": "Chocolate Marble Muffins",
    "category": "bakery",
    "flavor": "Vanilla and chocolate ribbons in every bite.",
    "slug": "chocolate-marble-muffins",
    "image": "assets/images/recipes/chocolate-marble-muffins.svg"
  },
  {
    "name": "Cinnamon Swirl Oat-Flour Mug Cake",
    "category": "bakery",
    "flavor": "Warm cinnamon ribbons and a soft mug-cake crumb.",
    "slug": "cinnamon-swirl-oat-flour-mug-cake",
    "image": "assets/images/recipes/cinnamon-swirl-oat-flour-mug-cake.svg"
  },
  {
    "name": "Fudgy CCD Brownies",
    "category": "chocolate",
    "flavor": "Dense, chocolatey, and softly gooey.",
    "slug": "fudgy-ccd-brownies",
    "image": "assets/images/recipes/fudgy-ccd-brownies.svg"
  },
  {
    "name": "Spinach Brownies",
    "category": "chocolate",
    "flavor": "Deep cocoa hides a smooth green secret.",
    "slug": "spinach-brownies",
    "image": "assets/images/recipes/spinach-brownies.svg"
  },
  {
    "name": "Oreo Powder Brownies",
    "category": "chocolate",
    "flavor": "Cookies-and-cream cocoa richness.",
    "slug": "oreo-powder-brownies",
    "image": "assets/images/recipes/oreo-powder-brownies.svg"
  },
  {
    "name": "Lava Brownie Cake",
    "category": "chocolate",
    "flavor": "A molten center inside a soft chocolate shell.",
    "slug": "lava-brownie-cake",
    "image": "assets/images/recipes/lava-brownie-cake.svg"
  },
  {
    "name": "Brownie Batter Cake",
    "category": "chocolate",
    "flavor": "Thick batter-like softness with baked edges.",
    "slug": "brownie-batter-cake",
    "image": "assets/images/recipes/brownie-batter-cake.svg",
    "details": {
      "ingredients": [
        "Hybrid flour blend",
        "Cornstarch",
        "Cocoa powder",
        "Milk",
        "Vanilla",
        "Sweetener",
        "Optional chocolate chips"
      ],
      "steps": [
        "Whisk dry ingredients.",
        "Add milk and vanilla for a thick batter.",
        "Fold in chocolate chips if using.",
        "Cook only until edges set and center remains soft."
      ],
      "tip": "Stop cooking when the middle is barely set so the residual heat keeps it fudgy."
    }
  },
  {
    "name": "Double Chocolate Cake",
    "category": "chocolate",
    "flavor": "Cocoa crumb plus melted chocolate drama.",
    "slug": "double-chocolate-cake",
    "image": "assets/images/recipes/double-chocolate-cake.svg"
  },
  {
    "name": "Chocolate Mug Cake",
    "category": "chocolate",
    "flavor": "Fast, warm, fluffy chocolate comfort.",
    "slug": "chocolate-mug-cake",
    "image": "assets/images/recipes/chocolate-mug-cake.svg"
  },
  {
    "name": "Classic Chocolate Chip Cookies",
    "category": "chocolate",
    "flavor": "Soft centers, cozy vanilla, and chocolate pockets.",
    "slug": "classic-chocolate-chip-cookies",
    "image": "assets/images/recipes/classic-chocolate-chip-cookies.svg"
  },
  {
    "name": "Double Chocolate Cookies",
    "category": "chocolate",
    "flavor": "Brownie-cookie energy with extra cocoa.",
    "slug": "double-chocolate-cookies",
    "image": "assets/images/recipes/double-chocolate-cookies.svg"
  },
  {
    "name": "Brookie Bars",
    "category": "chocolate",
    "flavor": "Cookie meets brownie in one chewy square.",
    "slug": "brookie-bars",
    "image": "assets/images/recipes/brookie-bars.svg"
  },
  {
    "name": "Oreo Crumble Bars",
    "category": "chocolate",
    "flavor": "Creamy cookie crumble over a soft base.",
    "slug": "oreo-crumble-bars",
    "image": "assets/images/recipes/oreo-crumble-bars.svg"
  },
  {
    "name": "CCD Cake Pop Bites",
    "category": "chocolate",
    "flavor": "Tiny frosted cake bites with party energy.",
    "slug": "ccd-cake-pop-bites",
    "image": "assets/images/recipes/ccd-cake-pop-bites.svg"
  },
  {
    "name": "Hot Mocha Coffee",
    "category": "drinks",
    "flavor": "Cocoa, coffee, cinnamon, and mellow milkiness.",
    "slug": "hot-mocha-coffee",
    "image": "assets/images/recipes/hot-mocha-coffee.svg"
  },
  {
    "name": "Chili Mocha Latte",
    "category": "drinks",
    "flavor": "Chocolate-coffee warmth with a tiny spicy glow.",
    "slug": "chili-mocha-latte",
    "image": "assets/images/recipes/chili-mocha-latte.svg",
    "details": {
      "ingredients": [
        "Instant coffee or espresso",
        "Milk",
        "Cocoa powder",
        "Cinnamon",
        "Tiny pinch chili powder",
        "Vanilla and sweetener"
      ],
      "steps": [
        "Brew strong coffee.",
        "Warm milk with cocoa, cinnamon, vanilla, and chili.",
        "Whisk until smooth and lightly foamy.",
        "Pour over coffee and finish with cinnamon."
      ],
      "tip": "Keep the chili as a quiet background note."
    }
  },
  {
    "name": "Cinnamon Roll Latte",
    "category": "drinks",
    "flavor": "Vanilla-cinnamon steam with bakery-shop vibes.",
    "slug": "cinnamon-roll-latte",
    "image": "assets/images/recipes/cinnamon-roll-latte.svg"
  },
  {
    "name": "Cookies and Cream Coffee",
    "category": "drinks",
    "flavor": "Coffee with a playful cookies-and-cream finish.",
    "slug": "cookies-and-cream-coffee",
    "image": "assets/images/recipes/cookies-and-cream-coffee.svg"
  },
  {
    "name": "Café Mocha Shake",
    "category": "drinks",
    "flavor": "Cold, thick, chocolate-coffee café energy.",
    "slug": "caf-mocha-shake",
    "image": "assets/images/recipes/caf-mocha-shake.svg"
  },
  {
    "name": "Chocolate Milkshake",
    "category": "drinks",
    "flavor": "Creamy, frosty, and straightforwardly chocolate.",
    "slug": "chocolate-milkshake",
    "image": "assets/images/recipes/chocolate-milkshake.svg"
  },
  {
    "name": "Vanilla Latte",
    "category": "drinks",
    "flavor": "Soft vanilla, gentle coffee, and cozy foam.",
    "slug": "vanilla-latte",
    "image": "assets/images/recipes/vanilla-latte.svg"
  },
  {
    "name": "Hot Lemon Turmeric Chili Cinnamon Tea",
    "category": "drinks",
    "flavor": "Bright lemon, warm spice, and a lively finish.",
    "slug": "hot-lemon-turmeric-chili-cinnamon-tea",
    "image": "assets/images/recipes/hot-lemon-turmeric-chili-cinnamon-tea.svg"
  },
  {
    "name": "Avocado Toast",
    "category": "savory",
    "flavor": "Creamy, lemony, and lightly savory.",
    "slug": "avocado-toast",
    "image": "assets/images/recipes/avocado-toast.svg"
  },
  {
    "name": "Egg and Avocado Bagel Sandwich",
    "category": "savory",
    "flavor": "Warm egg, creamy avocado, and chewy bagel comfort.",
    "slug": "egg-and-avocado-bagel-sandwich",
    "image": "assets/images/recipes/egg-and-avocado-bagel-sandwich.svg"
  },
  {
    "name": "Spinach Egg Toast",
    "category": "savory",
    "flavor": "Garlicky greens and soft egg on crisp toast.",
    "slug": "spinach-egg-toast",
    "image": "assets/images/recipes/spinach-egg-toast.svg"
  },
  {
    "name": "Mozzarella Breakfast Quesadilla",
    "category": "savory",
    "flavor": "Melty cheese, crisp tortilla, cozy breakfast center.",
    "slug": "mozzarella-breakfast-quesadilla",
    "image": "assets/images/recipes/mozzarella-breakfast-quesadilla.svg"
  },
  {
    "name": "Pizza Eggs",
    "category": "savory",
    "flavor": "Saucy, cheesy, and playful breakfast pizza flavor.",
    "slug": "pizza-eggs",
    "image": "assets/images/recipes/pizza-eggs.svg"
  },
  {
    "name": "Chicken Burrito",
    "category": "savory",
    "flavor": "Warm seasoned chicken wrapped into a hearty pocket.",
    "slug": "chicken-burrito",
    "image": "assets/images/recipes/chicken-burrito.svg"
  },
  {
    "name": "Arrabbiata Chicken Tortilla Melt",
    "category": "savory",
    "flavor": "Tomato-chili warmth with melty cheese and chicken.",
    "slug": "arrabbiata-chicken-tortilla-melt",
    "image": "assets/images/recipes/arrabbiata-chicken-tortilla-melt.svg"
  },
  {
    "name": "Protein Pizza Tortilla",
    "category": "savory",
    "flavor": "Crisp edges, melty center, personal-pizza energy.",
    "slug": "protein-pizza-tortilla",
    "image": "assets/images/recipes/protein-pizza-tortilla.svg"
  },
  {
    "name": "Mini Tortilla Pizza",
    "category": "savory",
    "flavor": "Crunchy, cheesy, and perfectly snack-sized.",
    "slug": "mini-tortilla-pizza",
    "image": "assets/images/recipes/mini-tortilla-pizza.svg"
  },
  {
    "name": "BBQ Flatbread Pizza",
    "category": "savory",
    "flavor": "Sweet-smoky sauce, chicken, and crisp flatbread.",
    "slug": "bbq-flatbread-pizza",
    "image": "assets/images/recipes/bbq-flatbread-pizza.svg"
  },
  {
    "name": "Spinach Chicken Wrap",
    "category": "savory",
    "flavor": "Fresh greens and savory chicken in a soft wrap.",
    "slug": "spinach-chicken-wrap",
    "image": "assets/images/recipes/spinach-chicken-wrap.svg"
  },
  {
    "name": "Greek Chicken Bowl",
    "category": "savory",
    "flavor": "Herby, creamy, bright, and filling.",
    "slug": "greek-chicken-bowl",
    "image": "assets/images/recipes/greek-chicken-bowl.svg"
  },
  {
    "name": "Arroz con Pollo",
    "category": "savory",
    "flavor": "Savory seasoned rice and tender chicken comfort.",
    "slug": "arroz-con-pollo",
    "image": "assets/images/recipes/arroz-con-pollo.svg"
  },
  {
    "name": "Fried Rice with Chicken",
    "category": "savory",
    "flavor": "Toasty rice, savory chicken, and skillet warmth.",
    "slug": "fried-rice-with-chicken",
    "image": "assets/images/recipes/fried-rice-with-chicken.svg"
  },
  {
    "name": "BBQ Chicken Drumsticks",
    "category": "savory",
    "flavor": "Sticky-sweet, smoky, and deeply savory.",
    "slug": "bbq-chicken-drumsticks",
    "image": "assets/images/recipes/bbq-chicken-drumsticks.svg"
  },
  {
    "name": "Garlic Toasted Tortilla Chips",
    "category": "savory",
    "flavor": "Crisp, garlicky, and built for dipping.",
    "slug": "garlic-toasted-tortilla-chips",
    "image": "assets/images/recipes/garlic-toasted-tortilla-chips.svg"
  },
  {
    "name": "Spinach Yogurt Dip",
    "category": "savory",
    "flavor": "Cool, creamy, green, and lightly tangy.",
    "slug": "spinach-yogurt-dip",
    "image": "assets/images/recipes/spinach-yogurt-dip.svg"
  },
  {
    "name": "CCD Yogurt Ice-Cream Bowl",
    "category": "chilled",
    "flavor": "Cold, thick, creamy, and dessert-shop cozy.",
    "slug": "ccd-yogurt-ice-cream-bowl",
    "image": "assets/images/recipes/ccd-yogurt-ice-cream-bowl.svg"
  },
  {
    "name": "Oreo Frozen Yogurt Bowl",
    "category": "chilled",
    "flavor": "Creamy tang with crunchy cookie pieces.",
    "slug": "oreo-frozen-yogurt-bowl",
    "image": "assets/images/recipes/oreo-frozen-yogurt-bowl.svg"
  },
  {
    "name": "Chocolate Pudding Bowl",
    "category": "chilled",
    "flavor": "Silky, thick, and deeply cocoa-rich.",
    "slug": "chocolate-pudding-bowl",
    "image": "assets/images/recipes/chocolate-pudding-bowl.svg"
  },
  {
    "name": "Cookies and Cream Yogurt Whip",
    "category": "chilled",
    "flavor": "Airy creaminess with cookie speckles.",
    "slug": "cookies-and-cream-yogurt-whip",
    "image": "assets/images/recipes/cookies-and-cream-yogurt-whip.svg"
  },
  {
    "name": "Avocado Chocolate Mousse",
    "category": "chilled",
    "flavor": "Ultra-smooth, rich, and chocolate-forward.",
    "slug": "avocado-chocolate-mousse",
    "image": "assets/images/recipes/avocado-chocolate-mousse.svg"
  },
  {
    "name": "Mocha Cream Cup",
    "category": "chilled",
    "flavor": "Cold coffee-cocoa cream with a soft finish.",
    "slug": "mocha-cream-cup",
    "image": "assets/images/recipes/mocha-cream-cup.svg"
  },
  {
    "name": "Chocolate Soft-Serve Bowl",
    "category": "chilled",
    "flavor": "Frosty, whipped, and chocolate-swirled.",
    "slug": "chocolate-soft-serve-bowl",
    "image": "assets/images/recipes/chocolate-soft-serve-bowl.svg"
  },
  {
    "name": "Cinnamon Toast Yogurt Fluff",
    "category": "chilled",
    "flavor": "Thick vanilla-cinnamon cream with toast vibes.",
    "slug": "cinnamon-toast-yogurt-fluff",
    "image": "assets/images/recipes/cinnamon-toast-yogurt-fluff.svg"
  },
  {
    "name": "Vanilla Cheesecake Cup",
    "category": "chilled",
    "flavor": "Tangy vanilla cream with cheesecake energy.",
    "slug": "vanilla-cheesecake-cup",
    "image": "assets/images/recipes/vanilla-cheesecake-cup.svg"
  },
  {
    "name": "Frozen Chocolate Shell Yogurt Bowl",
    "category": "chilled",
    "flavor": "Creamy yogurt beneath a crackly chocolate shell.",
    "slug": "frozen-chocolate-shell-yogurt-bowl",
    "image": "assets/images/recipes/frozen-chocolate-shell-yogurt-bowl.svg"
  }
];

const categories = {
  "breakfast": {
    "label": "Sweet Breakfast",
    "short": "BREAKFAST",
    "symbol": "PANCAKE",
    "bg": "#f9bfd0",
    "accent": "#c8345f"
  },
  "bakery": {
    "label": "Bakery Comfort",
    "short": "BAKERY",
    "symbol": "BAKE",
    "bg": "#f7d8b8",
    "accent": "#a95b2f"
  },
  "chocolate": {
    "label": "Chocolate Comfort",
    "short": "CHOCOLATE",
    "symbol": "COCOA",
    "bg": "#cda28a",
    "accent": "#603528"
  },
  "drinks": {
    "label": "Coffee-Shop Vibes",
    "short": "DRINKS",
    "symbol": "SIP",
    "bg": "#d8e8b9",
    "accent": "#63873a"
  },
  "savory": {
    "label": "Savory & Cozy",
    "short": "SAVORY",
    "symbol": "SAVORY",
    "bg": "#f6c88f",
    "accent": "#a85a1e"
  },
  "chilled": {
    "label": "Chilled Treats",
    "short": "CHILLED",
    "symbol": "CHILL",
    "bg": "#c7dced",
    "accent": "#46708d"
  }
};

const stream = document.querySelector("#recipe-stream");
const indexGrid = document.querySelector("#index-grid");
const searchInput = document.querySelector("#recipe-search");
const categoryBar = document.querySelector("#category-bar");
const nowReading = document.querySelector("#now-reading");
const readingCount = document.querySelector("#reading-count");
const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function categoryDescription(key) {
  const descriptions = {
    breakfast: "Soft breakfasts, baked mornings, French-toast comfort, and pancake chapters.",
    bakery: "Donuts, cinnamon spirals, muffins, and microwave bakery energy.",
    chocolate: "Brownies, cookies, mug cakes, bars, and full cocoa drama.",
    drinks: "Coffee-shop warmth, shakes, lattes, and bright hot drinks.",
    savory: "Toast, wraps, pizzas, chicken meals, bowls, and cozy savory bites.",
    chilled: "Cold creamy bowls, pudding, mousse, cheesecake cups, and frozen treats."
  };
  return descriptions[key];
}

function renderCategoryBar() {
  categoryBar.innerHTML = "";
  Object.entries(categories).forEach(([key, meta]) => {
    const button = document.createElement("button");
    button.className = "category-chip";
    button.type = "button";
    button.textContent = meta.label;
    button.addEventListener("click", () => {
      document.querySelector(`#category-${key}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    categoryBar.appendChild(button);
  });
}

function renderStream() {
  stream.innerHTML = "";
  let globalIndex = 0;

  Object.keys(categories).forEach((categoryKey) => {
    const meta = categories[categoryKey];
    const categoryRecipes = recipes.filter((recipe) => recipe.category === categoryKey);

    const heading = document.createElement("header");
    heading.className = "category-heading reveal";
    heading.id = `category-${categoryKey}`;
    heading.style.setProperty("--category-accent", meta.accent);
    heading.innerHTML = `
      <div>
        <p class="eyebrow">${escapeHTML(meta.short)} COLLECTION</p>
        <h2>${escapeHTML(meta.label)}</h2>
      </div>
      <p>${escapeHTML(categoryDescription(categoryKey))} ${categoryRecipes.length} recipes live in this chapter.</p>
    `;
    stream.appendChild(heading);

    categoryRecipes.forEach((recipe) => {
      globalIndex += 1;

      const article = document.createElement("article");
      article.className = "recipe-chapter reveal";
      article.id = `recipe-${recipe.slug}`;
      article.dataset.recipeIndex = String(globalIndex - 1);
      article.style.setProperty("--chapter-bg", meta.bg);
      article.style.setProperty("--chapter-accent", meta.accent);

      const detailsMarkup = recipe.details
        ? `
          <details class="recipe-notes">
            <summary>OPEN THE FULL CHAPTER</summary>
            <div class="detail-grid">
              <div>
                <h4>Ingredients</h4>
                <ul>${recipe.details.ingredients.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
              </div>
              <div>
                <h4>Method</h4>
                <ol>${recipe.details.steps.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ol>
              </div>
              <p class="recipe-tip"><strong>BerryBelle's note:</strong> ${escapeHTML(recipe.details.tip)}</p>
            </div>
          </details>
        `
        : `
          <details class="recipe-notes">
            <summary>OPEN FLAVOR NOTE</summary>
            <p class="flavor-only">${escapeHTML(recipe.flavor)} This continuous page keeps the approved recipe title and flavor note visible without inventing unsupported ingredient quantities.</p>
          </details>
        `;

      article.innerHTML = `
        <div class="recipe-image-panel">
          <span class="recipe-number">${String(globalIndex).padStart(2, "0")}</span>
          <img class="recipe-image" src="${escapeHTML(recipe.image)}" alt="Illustrated Berry Vibes recipe card for ${escapeHTML(recipe.name)}">
        </div>

        <div class="recipe-copy">
          <p class="recipe-category">${escapeHTML(meta.short)} · CHAPTER ${String(globalIndex).padStart(2, "0")}</p>
          <h3>${escapeHTML(recipe.name)}</h3>
          <p class="recipe-flavor">${escapeHTML(recipe.flavor)}</p>
          ${detailsMarkup}
        </div>
      `;

      stream.appendChild(article);
    });
  });

  document.querySelectorAll(".recipe-image").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "assets/images/recipes/fallback.svg";
    }, { once: true });
  });
}

function renderIndex(query = "") {
  const normalized = query.trim().toLowerCase();
  const visible = recipes.filter((recipe) => {
    const haystack = `${recipe.name} ${recipe.flavor} ${categories[recipe.category].label}`.toLowerCase();
    return haystack.includes(normalized);
  });

  indexGrid.innerHTML = "";

  visible.forEach((recipe) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "index-card";
    button.innerHTML = `
      <small>${escapeHTML(categories[recipe.category].short)}</small>
      <strong>${escapeHTML(recipe.name)}</strong>
      <span>READ CHAPTER ↗</span>
    `;
    button.addEventListener("click", () => {
      document.querySelector(`#recipe-${recipe.slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    indexGrid.appendChild(button);
  });

  if (!visible.length) {
    indexGrid.innerHTML = '<p class="index-card">No recipes matched that search.</p>';
  }
}

function initScrollObserver() {
  const chapters = [...document.querySelectorAll(".recipe-chapter")];

  const readingObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const index = Number(visible.target.dataset.recipeIndex);
    const recipe = recipes[index];
    if (!recipe) return;

    nowReading.textContent = recipe.name;
    readingCount.textContent = `${String(index + 1).padStart(2, "0")} / ${recipes.length}`;
  }, {
    rootMargin: "-30% 0px -55% 0px",
    threshold: [0, .15, .3, .5]
  });

  chapters.forEach((chapter) => readingObserver.observe(chapter));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .08 });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = !siteNav.classList.contains("is-open");
    siteNav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

searchInput?.addEventListener("input", () => renderIndex(searchInput.value));

renderCategoryBar();
renderStream();
renderIndex();
initScrollObserver();
