      document.addEventListener('DOMContentLoaded', function () {
            const estadoText = document.getElementById('estado');
            const saveBtn = document.getElementById('savePriorityBtn');
            const priorityForm = document.getElementById('priorityForm');
            const priorityRadios = Array.from(priorityForm.elements.priority);
            const priorityReason = document.getElementById('priorityReason');
            const priorityBadge = document.getElementById('priorityBadge');
            const slaValue = document.getElementById('slaValue');
            const modalEl = document.getElementById('estadoModal');
            const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);

            const slaMap = { 'Normal': '24h', 'Alta': '8h', 'Crítica': '4h' };
            const optionMap = {
                'Normal': document.getElementById('optionNormal'),
                'Alta': document.getElementById('optionAlta'),
                'Crítica': document.getElementById('optionCritica')
            };

            function applyPriority(val) {
                estadoText.textContent = val;

                if (priorityBadge) {
                    priorityBadge.textContent = val;
                    priorityBadge.classList.remove('priority-normal', 'priority-alta', 'priority-critica');
                    priorityBadge.classList.add('priority-' + val.toLowerCase().replace('í', 'i'));
                }

                if (slaValue) slaValue.textContent = slaMap[val] || '';
            }

            // Restaurar prioridad guardada al cargar la página
            const saved = localStorage.getItem('casePriority');
            if (saved) applyPriority(saved);

            function updateSaveState() {
                const hasPriority = priorityRadios.some(r => r.checked);
                saveBtn.disabled = !hasPriority || !priorityReason.value.trim();
            }

            

            function updateOptionCards() {
                Object.values(optionMap).forEach(el => el && el.classList.remove('selected'));
                const selected = priorityRadios.find(r => r.checked);
                if (selected && optionMap[selected.value]) {
                    optionMap[selected.value].classList.add('selected');
                }
                
                updateSaveState();
            }

            function selectCurrentPriority() {
                const currentPriority = localStorage.getItem('casePriority') || estadoText.textContent.trim();
                const currentRadio = priorityRadios.find(r => r.value === currentPriority);

                priorityForm.reset();
                if (currentRadio) currentRadio.checked = true;
                updateOptionCards();
            }

            priorityRadios.forEach(radio => radio.addEventListener('change', updateOptionCards));
            priorityReason.addEventListener('input', updateSaveState);
            modalEl.addEventListener('show.bs.modal', selectCurrentPriority);

            // Toast
            const toast = document.getElementById('priorityToast');
            let toastTimer = null;

            function showToast() {
                clearTimeout(toastTimer);
                toast.classList.remove('hide');
                toast.classList.add('show');
                toastTimer = setTimeout(hideToast, 4500);
            }

            function hideToast() {
                toast.classList.remove('show');
                toast.classList.add('hide');
            }

            document.getElementById('toastClose').addEventListener('click', function () {
                clearTimeout(toastTimer);
                hideToast();
            });

            saveBtn.addEventListener('click', function () {
                const selected = priorityRadios.find(r => r.checked);
                if (!selected || !priorityReason.value.trim()) return;

                const val = selected.value;

                saveBtn.disabled = true;
                saveBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Guardando...';

                setTimeout(function () {
                    applyPriority(val);
                    localStorage.setItem('casePriority', val);

                    bsModal.hide();

                    saveBtn.innerHTML = 'Cambiar prioridad';
                    priorityForm.reset();
                    Object.values(optionMap).forEach(el => el && el.classList.remove('selected'));
                    saveBtn.disabled = true;

                    showToast();
                }, 1300);
            });

        });
   