(function () {
  var filterBtns = document.querySelectorAll(".comment-filter-btn");
  var commentsList = document.getElementById("commentsList");
  var emptyEl = document.getElementById("commentsEmpty");
  var addBtn = document.getElementById("btnAgregarComentario");
  var panel = document.getElementById("newCommentPanel");
  var cancelBtn = document.getElementById("btnCommentCancel");
  var saveBtn = document.querySelector(".btn-comment-save");
  var textarea = document.getElementById("newCommentTextarea");
  var charCount = document.getElementById("newCommentCharCount");
  var hintEl = document.getElementById("commentTypeHint");
  var typeRadios = document.querySelectorAll('input[name="commentType"]');
  var countBadge = document.querySelector(".comments-count");

  var AVATAR_COLORS = [
    "#1e293b",
    "#0f766e",
    "#1d4ed8",
    "#7c3aed",
    "#b45309",
    "#0284c7",
  ];
  var colorIndex = 0;
  var toastEl = document.getElementById("commentToast");
  var toastClose = document.getElementById("commentToastClose");
  var toastTimer = null;

  function showToast() {
    if (!toastEl) return;
    clearTimeout(toastTimer);
    toastEl.classList.remove("hide");
    toastEl.classList.add("show");
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
      toastEl.classList.add("hide");
    }, 3500);
  }

  if (toastClose) {
    toastClose.addEventListener("click", function () {
      clearTimeout(toastTimer);
      toastEl.classList.remove("show");
      toastEl.classList.add("hide");
    });
  }

  function applyFilter(filter) {
    var cards = commentsList.querySelectorAll(".comment-card");
    var visible = 0;
    cards.forEach(function (card) {
      var type = card.getAttribute("data-type");
      var show = filter === "all" || type === filter;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });
    if (emptyEl) emptyEl.classList.toggle("d-none", visible > 0);
  }

  var activeFilter = "all";

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      applyFilter(activeFilter);
    });
  });

  if (commentsList) {
    commentsList.addEventListener("click", function (e) {
      var toggleBtn = e.target.closest(".comment-toggle");
      if (!toggleBtn) return;
      var card = toggleBtn.closest(".comment-card");
      var body = card && card.querySelector(".comment-body");
      if (!body) return;
      var collapsed = body.classList.toggle("collapsed");
      toggleBtn.classList.toggle("collapsed", collapsed);
      toggleBtn.setAttribute("aria-label", collapsed ? "Expandir" : "Colapsar");
    });
  }

  if (addBtn && panel) {
    addBtn.addEventListener("click", function () {
      panel.classList.remove("d-none");
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      if (textarea) textarea.focus();
    });
  }

  if (cancelBtn && panel) {
    cancelBtn.addEventListener("click", closePanel);
  }

  if (textarea && charCount) {
    textarea.addEventListener("input", function () {
      charCount.textContent = this.value.length;
    });
  }

  var hints = {
    interno: "Solo visible para operadores internos del sistema.",
    visible: "El asociado podrá ver este comentario desde el portal.",
  };
  typeRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (hintEl) hintEl.textContent = hints[this.value] || "";
    });
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      var text = textarea ? textarea.value.trim() : "";
      if (!text) {
        if (textarea) {
          textarea.classList.add("textarea-invalid");
          textarea.focus();
          setTimeout(function () {
            textarea.classList.remove("textarea-invalid");
          }, 1500);
        }
        return;
      }

      var type = getSelectedType();
      var now = formatDate(new Date());
      var card = buildCommentCard(text, type, now);

      commentsList.appendChild(card);
      updateCount();
      applyFilter(activeFilter);
      closePanel();
      showToast();
    });
  }

  function getSelectedType() {
    var checked = document.querySelector('input[name="commentType"]:checked');
    return checked ? checked.value : "interno";
  }

  function closePanel() {
    if (panel) panel.classList.add("d-none");
    if (textarea) textarea.value = "";
    if (charCount) charCount.textContent = "0";
  }

  function updateCount() {
    var total = commentsList.querySelectorAll(".comment-card").length;
    if (countBadge) countBadge.textContent = total;
    var tabBadge = document.querySelector('[data-tab="tab-comments"] span');
    if (tabBadge) tabBadge.textContent = total;
  }

  function formatDate(d) {
    var dd = String(d.getDate()).padStart(2, "0");
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    var yyyy = d.getFullYear();
    var hh = String(d.getHours()).padStart(2, "0");
    var min = String(d.getMinutes()).padStart(2, "0");
    return dd + "/" + mm + "/" + yyyy + " " + hh + ":" + min;
  }

  function randomColor() {
    var c = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];
    colorIndex++;
    return c;
  }

  function buildCommentCard(text, type, dateStr) {
    var isInterno = type === "interno";
    var badgeClass = isInterno ? "badge-interno" : "badge-visible";
    var badgeLabel = isInterno ? "Interno" : "Visible";
    var badgeSvg = isInterno
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>';

    var color = randomColor();
    var div = document.createElement("div");
    div.className = "comment-card";
    div.setAttribute("data-type", type);
    div.innerHTML =
      '<div class="comment-avatar" style="background:' +
      color +
      '">U</div>' +
      '<div class="comment-content">' +
      '<div class="comment-top">' +
      '<div class="comment-info">' +
      '<span class="comment-author">Usuario actual</span>' +
      '<span class="comment-badge ' +
      badgeClass +
      '">' +
      badgeSvg +
      badgeLabel +
      "</span>" +
      "</div>" +
      '<button class="comment-toggle" aria-label="Colapsar">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>' +
      "</button>" +
      "</div>" +
      '<div class="comment-meta">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
      dateStr +
      "</div>" +
      '<div class="comment-body">' +
      escapeHtml(text) +
      "</div>" +
      "</div>";
    return div;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/\n/g, "<br>");
  }
})();
