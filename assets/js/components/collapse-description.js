document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const stateDropdown = document.querySelector(".state-dropdown");
  if (!stateDropdown) return;
  const btn = stateDropdown.querySelector(".state-btn");
  const menu = stateDropdown.querySelector(".dropdown-menu");
  const items = stateDropdown.querySelectorAll(".dropdown-item");
  const btnLabel = stateDropdown.querySelector(".state-label");

  function openMenu() {
    menu.classList.add("show");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menu.classList.remove("show");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (menu.classList.contains("show")) closeMenu();
    else openMenu();
  });

  items.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      const text = this.textContent.trim();
      const badge = this.querySelector(".badge-pill");
      btnLabel.innerHTML = "";
      if (badge) btnLabel.appendChild(badge.cloneNode(true));
      const textNode = document.createTextNode(" " + text);
      btnLabel.appendChild(textNode);
      closeMenu();
    });
  });

  document.addEventListener("click", function (e) {
    if (!stateDropdown.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
});
