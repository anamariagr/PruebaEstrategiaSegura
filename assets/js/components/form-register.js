$(function () {
    var form = $('#loginForm');
    var alertBox = $('#formAlert');

    function showAlert(message) {
        alertBox
            .removeClass('d-none alert-success alert-warning')
            .addClass('alert-danger d-block')
            .text(message);
    }

    function showSuccess(message) {
        alertBox
            .removeClass('d-none alert-danger alert-warning')
            .addClass('alert-success d-block')
            .text(message);
    }

    function hideAlert() {
        alertBox.addClass('d-none').text('');
    }

    function validateField(field) {
        var isValid = field[0].checkValidity();
        var feedback = field.siblings('.invalid-feedback');

        field.toggleClass('is-invalid', !isValid);
        field.toggleClass('is-valid', isValid);

        if (!isValid) {
            if (field.attr('id') === 'email') {
                feedback.text(field.val().trim() === '' ? 'El correo electrónico es obligatorio.' : 'El correo ingresado no es válido.');
            } else if (field.attr('id') === 'password') {
                if (field.val().trim() === '') {
                    feedback.text('La contraseña es obligatoria.');
                } else if (field.val().length < 8) {
                    feedback.text('La contraseña debe tener mínimo 8 caracteres.');
                }
            } else {
                feedback.text('Este campo es obligatorio.');
            }
            feedback.addClass('d-block');
        } else {
            feedback.removeClass('d-block');
        }

        return isValid;
    }

    form.on('submit', function (event) {
        var domForm = this;
        hideAlert();
        var allValid = true;

        $(domForm).find('input[required], select[required], textarea[required]').each(function () {
            var field = $(this);
            var valid = validateField(field);
            if (!valid) {
                allValid = false;
            }
        });

        if (!allValid) {
            event.preventDefault();
            event.stopPropagation();
            showAlert('Por favor corrige los errores del formulario para continuar.');
            $(domForm).addClass('was-validated');
            var firstInvalid = $(domForm).find('.is-invalid').first();
            if (firstInvalid.length) {
                firstInvalid.focus();
            }
        } else {
            event.preventDefault();
            $(domForm).removeClass('was-validated');
            showSuccess('Formulario válido. Enviando datos...');
            // Aquí puedes agregar el envío real con Ajax si necesitas
        }
    });

    form.find('input[required], select[required], textarea[required]').on('input change blur', function () {
        validateField($(this));
        if (form.find('.is-invalid').length === 0) {
            hideAlert();
            form.removeClass('was-validated');
        }
    });
});