(function () {
    var textarea   = document.getElementById('observacionTextarea');
    var errorEl    = document.getElementById('observacionError');
    var submitBtn  = document.getElementById('registrarObsBtn');
    var toastEl    = document.getElementById('obsToast');
    var toastTimer = null;

    function showError(visible) {
        errorEl.classList.toggle('d-none', !visible);
        textarea.classList.toggle('textarea-invalid', visible);
    }

    function showToast() {
        clearTimeout(toastTimer);
        toastEl.classList.remove('hide');
        toastEl.classList.add('show');
        toastTimer = setTimeout(function () {
            toastEl.classList.remove('show');
            toastEl.classList.add('hide');
        }, 4500);
    }

    document.getElementById('obsToastClose').addEventListener('click', function () {
        clearTimeout(toastTimer);
        toastEl.classList.remove('show');
        toastEl.classList.add('hide');
    });

    // Valida mientras escribe: solo muestra error si ya empezó a escribir y no alcanza 5 chars
    textarea.addEventListener('input', function () {
        var len = this.value.trim().length;
        if (len > 0 && len < 5) {
            showError(true);
        } else {
            showError(false);
        }
    });

    submitBtn.addEventListener('click', function () {
        var val = textarea.value.trim();

        if (val.length < 5) {
            showError(true);
            textarea.focus();
            return;
        }

        showError(false);
        submitBtn.disabled = true;
        submitBtn.innerHTML =
            '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Guardando...';

        setTimeout(function () {
            textarea.value = '';
            document.getElementById('flexCheckDefault').checked = false;
            submitBtn.disabled = false;
            submitBtn.textContent = 'Registrar observación';
            showToast();
        }, 1000);
    });
}());
