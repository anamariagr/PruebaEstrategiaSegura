(function () {
    var openBtn = document.getElementById('btnCerrarCaso');
    var modalEl = document.getElementById('modalCerrarCaso');
    var confirmBtn = document.getElementById('btnConfirmarCierre');

    var campos = {
        causa: document.getElementById('cerrarCausa'),
        solucion: document.getElementById('cerrarSolucion'),
        respuesta: document.getElementById('cerrarRespuesta')
    };

    if (!openBtn || !modalEl) return;

    var bsModal = new bootstrap.Modal(modalEl);

    openBtn.addEventListener('click', function () {
        bsModal.show();
    });

    // ── Validación al confirmar ───────────────────────────────────
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function () {
            var valid = true;

            Object.values(campos).forEach(function (el) {
                if (!el) return;
                var empty = el.value.trim() === '';
                el.classList.toggle('cerrar-invalid', empty);
                if (empty) valid = false;
            });

            if (!valid) return;

            bsModal.hide();
            resetForm();
        });
    }

    // ── Limpiar errores al escribir ───────────────────────────────
    Object.values(campos).forEach(function (el) {
        if (!el) return;
        el.addEventListener('input', function () {
            el.classList.remove('cerrar-invalid');
        });
        el.addEventListener('change', function () {
            el.classList.remove('cerrar-invalid');
        });
    });

    // ── Reset al cerrar ───────────────────────────────────────────
    modalEl.addEventListener('hidden.bs.modal', resetForm);

    function resetForm() {
        Object.values(campos).forEach(function (el) {
            if (!el) return;
            el.value = '';
            el.classList.remove('cerrar-invalid');
        });
        var opcionales = [
            document.getElementById('cerrarExplicacionCausa'),
            document.getElementById('cerrarExplicacionSolucion')
        ];
        opcionales.forEach(function (el) { if (el) el.value = ''; });
    }
}());
