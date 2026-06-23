(function () {
    var filterBtns = document.querySelectorAll('.history-filter');
    var events = document.querySelectorAll('#historyTimeline .history-event');
    var emptyEl = document.getElementById('historyEmpty');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var filter = btn.getAttribute('data-history-filter');
            var visible = 0;

            filterBtns.forEach(function (item) {
                item.classList.remove('active');
            });
            btn.classList.add('active');

            events.forEach(function (event) {
                var type = event.getAttribute('data-history-type');
                var show = filter === 'all' || type === filter;
                event.style.display = show ? '' : 'none';
                if (show) visible++;
            });

            if (emptyEl) {
                emptyEl.classList.toggle('d-none', visible > 0);
            }
        });
    });

    events.forEach(function (event) {
        var toggle = event.querySelector('.history-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', function () {
            var collapsed = event.classList.toggle('collapsed');
            toggle.setAttribute('aria-label', collapsed ? 'Expandir evento' : 'Colapsar evento');
        });
    });
}());