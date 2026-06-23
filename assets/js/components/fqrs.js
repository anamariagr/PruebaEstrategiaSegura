 $(function () {
            $('#btnSelectFiles').on('click', function () {
                $('#supportFiles').trigger('click');
            });

            $('#supportFiles').on('change', function () {
                var files = $(this)[0].files;
                var list = $('#fileList');
                list.empty();
                if (files.length === 0) {
                    list.text('No hay archivos seleccionados.');
                    return;
                }
                var items = $('<ul class="list-unstyled mb-0"></ul>');
                $.each(files, function (index, file) {
                    items.append('<li>' + file.name + ' <span class="text-muted">(' + Math.round(file.size / 1024) + ' KB)</span></li>');
                });
                list.append(items);
            });
        });
    