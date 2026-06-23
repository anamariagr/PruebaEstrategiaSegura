(function () {
    var selectedName  = null;
    var selectedRole  = null;

    var modalEl          = document.getElementById('reasignarModal');
    var confirmBtn       = document.getElementById('confirmReasignarBtn');
    var searchInput      = document.getElementById('operatorSearch');
    var noResultsEl      = document.getElementById('operatorNoResults');
    var nameSpan         = document.getElementById('name-responsible');
    var actualNameEl     = document.getElementById('responsableActualName');
    var actualRoleEl     = document.getElementById('responsableActualRole');
    var toastEl          = document.getElementById('reasignarToast');
    var toastSubEl       = document.getElementById('reasignarToastSub');
    var toastCloseBtn    = document.getElementById('reasignarToastClose');
    var allItems         = Array.prototype.slice.call(
                               document.querySelectorAll('#operatorsList .operator-item')
                           );
    var toastTimer       = null;

    function showToast(name) {
        if (toastSubEl) toastSubEl.textContent = 'Nuevo responsable: ' + name;
        clearTimeout(toastTimer);
        toastEl.classList.remove('hide');
        toastEl.classList.add('show');
        toastTimer = setTimeout(function () {
            toastEl.classList.remove('show');
            toastEl.classList.add('hide');
        }, 4500);
    }

    toastCloseBtn.addEventListener('click', function () {
        clearTimeout(toastTimer);
        toastEl.classList.remove('show');
        toastEl.classList.add('hide');
    });

    var CONFIRM_LABEL =
        '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"' +
        ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"' +
        ' stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>' +
        '<circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>' +
        ' Confirmar reasignación';

    // Actualiza la sección "Responsable actual" dentro del modal
    function updateActualSection(name, role) {
        if (actualNameEl) actualNameEl.textContent = name;
        if (actualRoleEl) actualRoleEl.textContent = role;
    }

    // Limpia solo el formulario de selección (no toca el responsable actual)
    function resetForm() {
        selectedName        = null;
        selectedRole        = null;
        confirmBtn.disabled = true;
        searchInput.value   = '';
        noResultsEl.classList.add('d-none');
        allItems.forEach(function (item) {
            item.classList.remove('selected');
            item.style.display = '';
        });
    }

    // ── Selección directa en cada ítem ───────────────────────────
    allItems.forEach(function (item) {
        item.addEventListener('click', function () {
            allItems.forEach(function (i) { i.classList.remove('selected'); });
            item.classList.add('selected');
            selectedName        = item.getAttribute('data-name');
            selectedRole        = item.getAttribute('data-role');
            confirmBtn.disabled = false;
        });
    });

    // ── Filtro de búsqueda ────────────────────────────────────────
    searchInput.addEventListener('input', function () {
        var q       = this.value.trim().toLowerCase();
        var visible = 0;
        allItems.forEach(function (item) {
            var hay  = (item.getAttribute('data-name') + ' ' + item.getAttribute('data-role')).toLowerCase();
            var show = !q || hay.indexOf(q) !== -1;
            item.style.display = show ? '' : 'none';
            if (show) visible++;
        });
        noResultsEl.classList.toggle('d-none', visible > 0);
    });

    // ── Resetear formulario al abrir y al cerrar ──────────────────
    modalEl.addEventListener('show.bs.modal',   resetForm);
    modalEl.addEventListener('hidden.bs.modal', resetForm);

    // ── Confirmar reasignación ────────────────────────────────────
    confirmBtn.addEventListener('click', function () {
        if (!selectedName) return;
        var name = selectedName;
        var role = selectedRole || '';

        confirmBtn.disabled  = true;
        confirmBtn.innerHTML =
            '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Guardando...';

        setTimeout(function () {
            // 1. Actualiza el botón de la tarjeta lateral
            nameSpan.textContent =  name;

            // 2. Actualiza la sección "Responsable actual" del modal
            updateActualSection(name, role);

            // 3. Persiste en localStorage
            localStorage.setItem('caseResponsible',     name);
            localStorage.setItem('caseResponsibleRole', role);

            // 4. Cierra el modal y muestra notificación
            var bsModal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
            bsModal.hide();

            showToast(name);
            confirmBtn.innerHTML = CONFIRM_LABEL;
        }, 900);
    });

    // ── Restaurar estado guardado al cargar la página ─────────────
    var savedName = localStorage.getItem('caseResponsible');
    var savedRole = localStorage.getItem('caseResponsibleRole');
    if (savedName) {
        if (nameSpan)     nameSpan.textContent =  savedName;
        updateActualSection(savedName, savedRole || '');
    }
}());
