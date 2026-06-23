(function () {
  var select = document.getElementById("attachTypeFilter");
  var cards = document.querySelectorAll("#attachList .attach-card");
  var emptyEl = document.getElementById("attachEmpty");
  var uploadBtn = document.querySelector(".btn-upload-attach");
  var panel = document.getElementById("uploadPanel");
  var cancelBtn = document.getElementById("btnUploadCancel");
  var dropzone = document.getElementById("uploadDropzone");
  var fileInput = document.getElementById("uploadFileInput");


  if (select) {
    select.addEventListener("change", function () {
      var val = this.value;
      var visible = 0;
      cards.forEach(function (card) {
        var type = card.getAttribute("data-type");
        var show = val === "all" || type === val;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });
      emptyEl.classList.toggle("d-none", visible > 0);
    });
  }

  cards.forEach(function (card) {
    var btn = card.querySelector(".attach-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      btn.classList.toggle("open");
      btn.setAttribute(
        "aria-label",
        btn.classList.contains("open") ? "Colapsar" : "Expandir",
      );
    });
  });

  if (uploadBtn && panel) {
    uploadBtn.addEventListener("click", function () {
      panel.classList.remove("d-none");
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  if (cancelBtn && panel) {
    cancelBtn.addEventListener("click", function () {
      panel.classList.add("d-none");
      if (fileInput) fileInput.value = "";
    });
  }

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", function () {
      fileInput.click();
    });

    dropzone.addEventListener("dragover", function (e) {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });
    dropzone.addEventListener("dragleave", function () {
      dropzone.classList.remove("dragover");
    });
    dropzone.addEventListener("drop", function (e) {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      var files = e.dataTransfer.files;
      if (files.length) showSelectedFile(files[0]);
    });

    fileInput.addEventListener("change", function () {
      if (this.files.length) showSelectedFile(this.files[0]);
    });
  }

  function showSelectedFile(file) {
    var textEl = dropzone && dropzone.querySelector(".upload-dropzone-text");
    if (textEl) textEl.textContent = file.name;
  }
})();
