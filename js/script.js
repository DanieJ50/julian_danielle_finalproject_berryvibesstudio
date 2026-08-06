
"use strict";

(() => {
  const recipes = Array.isArray(window.REEL_RECIPES) ? window.REEL_RECIPES : [];
  const groupOrder = Array.isArray(window.REEL_GROUP_ORDER) ? window.REEL_GROUP_ORDER : [];
  const groupMeta = window.REEL_GROUP_META || {};

  const reel = document.querySelector("#recipe-reel");
  const chapterPills = document.querySelector("#chapter-pills");
  const categorySelect = document.querySelector("#category-select");
  const indexGrid = document.querySelector("#index-grid");
  const indexStatus = document.querySelector("#index-status");
  const searchInput = document.querySelector("#search-input");
  const progressBar = document.querySelector("#progress-bar");
  const bookmark = document.querySelector("#berrybelle-bookmark");
  const reelCounter = document.querySelector("#reel-counter");
  const menuButton = document.querySelector("#menu-button");
  const mobileNav = document.querySelector("#mobile-nav");
  const dialog = document.querySelector("#recipe-dialog");
  const toast = document.querySelector("#toast");

  let currentDialogIndex = 0;
  let toastTimer = null;
  let scrollTicking = false;

  // Never leave a broken image icon on the live site.
  document.addEventListener("error", (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    if (image.dataset.fallbackApplied === "true") return;
    image.dataset.fallbackApplied = "true";
    image.src = "BerryBelle.jpg";
    image.alt = "BerryBelle fallback image";
  }, true);

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const slugify = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const metaFor = (group) => groupMeta[group] || { color:"#d94c6b", soft:"#fff0f5", short:group, mark:"BERRY VIBES" };

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  };

  const flavorChips = (recipe) => {
    const words = recipe.flavor
      .replace(/[.,!?:;]/g, "")
      .split(/\s+/)
      .filter((word) => word.length >= 5)
      .slice(0, 3);
    while (words.length < 3) words.push(["COZY","SOFT","BERRY"][words.length]);
    return words.map((word) => `<span>${escapeHtml(word.toUpperCase())}</span>`).join("");
  };

  const renderNavigation = () => {
    if (!chapterPills || !categorySelect) return;
    chapterPills.innerHTML = "";
    categorySelect.innerHTML = '<option value="all">All chapters</option>';

    groupOrder.forEach((group, index) => {
      const meta = metaFor(group);
      const slug = `chapter-${slugify(group)}`;
      const a = document.createElement("a");
      a.href = `#${slug}`;
      a.textContent = `${String(index + 1).padStart(2,"0")} ${meta.short}`;
      a.style.setProperty("--pill-color", meta.color);
      a.style.setProperty("--pill-soft", meta.soft);
      chapterPills.appendChild(a);

      const option = document.createElement("option");
      option.value = group;
      option.textContent = meta.short;
      categorySelect.appendChild(option);
    });
  };

  const createCategoryGate = (group, index) => {
    const meta = metaFor(group);
    const section = document.createElement("section");
    section.className = "category-gate reveal-target";
    section.id = `chapter-${slugify(group)}`;
    section.style.setProperty("--cat-color", meta.color);
    section.style.setProperty("--cat-soft", meta.soft);
    section.innerHTML = `
      <div>
        <p class="micro-label">CHAPTER ${String(index + 1).padStart(2,"0")} / ${escapeHtml(meta.mark)}</p>
        <h2>${escapeHtml(meta.short)}</h2>
        <p>${recipes.filter(r => r.category === group).length} recipe frames from ${escapeHtml(group)}. Scroll to let the contact sheet develop.</p>
      </div>
      <div class="gate-card"><span aria-hidden="true">${escapeHtml(recipes.find(r => r.category === group)?.emoji || "🍓")}</span><small>${escapeHtml(group)}</small></div>
    `;
    return section;
  };

  const createRecipeFrame = (recipe, index) => {
    const meta = metaFor(recipe.category);
    const section = document.createElement("section");
    section.className = `reel-frame reveal-target ${index % 2 ? "is-reverse" : ""}`;
    section.id = `recipe-${recipe.id}`;
    section.dataset.recipeIndex = String(index);
    section.style.setProperty("--cat-color", meta.color);
    section.style.setProperty("--cat-soft", meta.soft);
    section.style.setProperty("--image-tilt", `${index % 3 === 0 ? -1.2 : index % 3 === 1 ? .8 : -.4}deg`);

    section.innerHTML = `
      <figure class="frame-image">
        <img src="${escapeHtml(recipe.poster)}" alt="Food photograph representing ${escapeHtml(recipe.name)}" loading="lazy" decoding="async">
      </figure>
      <div class="frame-copy">
        <p class="frame-number">FRAME ${String(recipe.number).padStart(2,"0")} / ${recipes.length} · ${escapeHtml(meta.short)}</p>
        <h2>${escapeHtml(recipe.name)}</h2>
        <p class="frame-flavor">${escapeHtml(recipe.flavor)}</p>
        <div class="frame-actions"><button class="button primary" type="button" data-open-recipe="${escapeHtml(recipe.id)}">Open full recipe</button><a class="button ghost" href="#recipe-index">Contact sheet</a></div>
      </div>
      <button class="recipe-ticket" type="button" data-open-recipe="${escapeHtml(recipe.id)}" aria-label="Open ${escapeHtml(recipe.name)}">
        <small>BERRY VIBES</small><b>${String(recipe.number).padStart(2,"0")}</b><strong>OPEN RECIPE</strong><small>${escapeHtml(meta.mark)}</small>
      </button>
      <div class="flavor-burst" aria-hidden="true">${flavorChips(recipe)}</div>
    `;
    return section;
  };

  const renderReel = () => {
    if (!reel) return;
    const frag = document.createDocumentFragment();
    groupOrder.forEach((group, groupIndex) => {
      frag.appendChild(createCategoryGate(group, groupIndex));
      recipes.forEach((recipe, index) => {
        if (recipe.category === group) frag.appendChild(createRecipeFrame(recipe, index));
      });
    });
    reel.replaceChildren(frag);
  };

  const renderIndex = () => {
    if (!indexGrid || !indexStatus) return;
    const query = String(searchInput?.value || "").trim().toLowerCase();
    const category = categorySelect?.value || "all";
    const filtered = recipes.filter((recipe) => {
      const matchesGroup = category === "all" || recipe.category === category;
      const haystack = `${recipe.name} ${recipe.category} ${recipe.flavor}`.toLowerCase();
      return matchesGroup && haystack.includes(query);
    });

    indexStatus.textContent = `Showing ${filtered.length} of ${recipes.length} recipes`;
    indexGrid.innerHTML = "";
    const frag = document.createDocumentFragment();

    filtered.forEach((recipe) => {
      const meta = metaFor(recipe.category);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "index-card";
      button.dataset.jumpRecipe = recipe.id;
      button.style.setProperty("--cat-color", meta.color);
      button.innerHTML = `
        <img src="${escapeHtml(recipe.poster)}" alt="Food photograph for ${escapeHtml(recipe.name)}" loading="lazy" decoding="async">
        <small>${String(recipe.number).padStart(2,"0")} · ${escapeHtml(meta.short)}</small>
        <h3>${escapeHtml(recipe.name)}</h3>
        <p>${escapeHtml(recipe.flavor)}</p>
      `;
      frag.appendChild(button);
    });
    indexGrid.appendChild(frag);
  };

  const openRecipe = (index) => {
    const recipe = recipes[index];
    if (!recipe || !dialog) return;
    currentDialogIndex = index;
    document.querySelector("#dialog-poster").src = recipe.poster;
    document.querySelector("#dialog-poster").alt = `Food photograph representing ${recipe.name}`;
    document.querySelector("#dialog-number").textContent = `${String(recipe.number).padStart(2,"0")} / ${recipes.length}`;
    document.querySelector("#dialog-category").textContent = recipe.category;
    document.querySelector("#dialog-title").textContent = recipe.name;
    document.querySelector("#dialog-vibe").textContent = recipe.vibe || recipe.flavor;
    document.querySelector("#dialog-yield").textContent = recipe.yield_text || "—";
    document.querySelector("#dialog-calories").textContent = recipe.calories || "—";
    document.querySelector("#dialog-why").textContent = recipe.why || recipe.flavor;
    document.querySelector("#dialog-comparison").textContent = recipe.comparison || "—";
    document.querySelector("#dialog-variations").textContent = recipe.variations || "—";
    document.querySelector("#dialog-ratings").textContent = recipe.ratings || "—";

    const ing = document.querySelector("#dialog-ingredients");
    const method = document.querySelector("#dialog-method");
    ing.innerHTML = "";
    method.innerHTML = "";
    (recipe.ingredients || []).forEach((item) => { const li = document.createElement("li"); li.textContent = item; ing.appendChild(li); });
    (recipe.method || []).forEach((item) => { const li = document.createElement("li"); li.textContent = item; method.appendChild(li); });

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };

  const openRecipeById = (id) => {
    const index = recipes.findIndex((recipe) => recipe.id === id);
    if (index >= 0) openRecipe(index);
  };

  const jumpToRecipe = (id) => {
    const el = document.getElementById(`recipe-${id}`);
    if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  const randomJump = () => {
    if (!recipes.length) return;
    const recipe = recipes[Math.floor(Math.random() * recipes.length)];
    jumpToRecipe(recipe.id);
    showToast(`BerryBelle picked ${recipe.name}`);
  };

  const initObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("reel-frame")) {
          const index = Number(entry.target.dataset.recipeIndex);
          const recipe = recipes[index];
          if (recipe && reelCounter) reelCounter.textContent = `${String(recipe.number).padStart(2,"0")} / ${recipes.length}`;
        }
      });
    }, { rootMargin:"-12% 0px -12% 0px", threshold:.18 });
    document.querySelectorAll(".reveal-target").forEach((el) => observer.observe(el));
  };

  const updateScrollUI = () => {
    scrollTicking = false;
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / max));
    if (progressBar) progressBar.style.width = `${progress * 100}%`;
    if (bookmark && window.innerWidth > 1050) {
      const travel = Math.max(0, window.innerHeight - 220);
      bookmark.style.transform = `translateY(${Math.round(progress * travel)}px) rotate(${(progress * 18 - 9).toFixed(2)}deg)`;
    }
  };

  const requestScrollUI = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateScrollUI);
  };

  const closeMenu = () => {
    mobileNav?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded","false");
  };

  document.addEventListener("click", (event) => {
    const open = event.target.closest("[data-open-recipe]");
    if (open) { openRecipeById(open.dataset.openRecipe); return; }

    const jump = event.target.closest("[data-jump-recipe]");
    if (jump) { jumpToRecipe(jump.dataset.jumpRecipe); return; }

    if (event.target.closest("#random-button,#hero-random-button,#index-random-button,#outro-random-button,#mobile-random-button")) { randomJump(); closeMenu(); return; }

    if (event.target.closest("#dialog-close")) { dialog?.close(); return; }
    if (event.target.closest("#dialog-prev")) { openRecipe((currentDialogIndex - 1 + recipes.length) % recipes.length); return; }
    if (event.target.closest("#dialog-next")) { openRecipe((currentDialogIndex + 1) % recipes.length); return; }
    if (event.target.closest("#dialog-random")) { openRecipe(Math.floor(Math.random() * recipes.length)); return; }

    const navLink = event.target.closest(".mobile-nav a");
    if (navLink) closeMenu();
  });

  menuButton?.addEventListener("click", () => {
    const open = mobileNav?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(Boolean(open)));
  });

  searchInput?.addEventListener("input", renderIndex);
  categorySelect?.addEventListener("change", renderIndex);
  window.addEventListener("scroll", requestScrollUI, { passive:true });
  window.addEventListener("resize", requestScrollUI);

  dialog?.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) dialog.close();
  });

  renderNavigation();
  renderReel();
  renderIndex();
  initObserver();
  updateScrollUI();
})();
