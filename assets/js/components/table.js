(function () {
  var web = window.location.pathname.split("/").pop() || "inbox.html";
  var html = ` <div class="col-12 table-case">
                            <div class="row">
                                <div class="col-12">
                                    <form class="d-flex form-search" role="search">
                                                 <svg class="icon-search" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>

                                    <svg class="icon-search" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>

                                    <input
                                        class="form-control m-2 ps-5"
                                        id="buscador"
                                        type="search"
                                        placeholder="Buscar por radicado o nombre del asociado..."
                                        aria-label="Search">
                                        <button class="btn btn-filtros" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel" aria-hidden="true"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>Filtros</button>
                                    </form>
                                </div>
                                <div class="col-12">
                                    <div>
                                        <div class="cont-table">
                                            <table id="myTable" class="table table-hover table-sm mb-0">
                                                <thead>
                                                    <tr>
                                                        <th onclick="orderTable(0)" class="th-header">RADICADO</th>
                                                        <th onclick="orderTable(1)" class="th-header">FECHA RAD.</th>
                                                        <th onclick="orderTable(2)" class="th-header">TIPO</th>
                                                        <th onclick="orderTable(3)" class="th-header">SERVICIO</th>
                                                        <th onclick="orderTable(4)" class="th-header">CATEGORÍA</th>
                                                        <th onclick="orderTable(5)" class="th-header">SUBCATEGORÍA</th>
                                                        <th onclick="orderTable(6)" class="th-header">ASOCIADO</th>
                                                        <th onclick="orderTable(7)" class="th-header">RESPONSABLE</th>
                                                        <th onclick="orderTable(8)" class="th-header">PRIORIDAD</th>
                                                        <th onclick="orderTable(9)" class="th-header">ESTADO</th>
                                                        <th onclick="orderTable(10)" class="th-header">LÍMITE SLA</th>
                                                        <th onclick="orderTable(11)" class="th-header">SEMÁFORO</th>
                                                        <th class="th-header">ACCIÓN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04758</a></td>
                                                        <td>07/05/2026</td>
                                                        <td><span class="badge badge-facilitation">Felicitación</span></td>
                                                        <td>Atención al Asociado</td>
                                                        <td>Atención Presencial</td>
                                                        <td>Felicitación por excelente servicio</td>
                                                        <td>Sandra Milena Aguirre T...</td>
                                                        <td>Valentina Ospina Ríos</td>
                                                        <td><span class="badge badge-low">Baja</span></td>
                                                        <td><span class="badge badge-closed">Cerrado</span></td>
                                                        <td>09/05/2026</td>
                                                        <td><span class="semaforo semaforo-green">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04290</a></td>
                                                        <td>07/05/2026</td>
                                                        <td><span class="badge badge-suggestion">Sugerencia</span></td>
                                                        <td>Pagos y Transferencias</td>
                                                        <td>Transferencias Nacionales</td>
                                                        <td>Comprobante de transferencia</td>
                                                        <td>Yolanda Cecilia Prada...</td>
                                                        <td>Jorge Iván Castillo</td>
                                                        <td><span class="badge badge-low">Baja</span></td>
                                                        <td><span class="badge badge-filed">Radicado</span></td>
                                                        <td>08/05/2026</td>
                                                        <td><span class="semaforo semaforo-green">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04760</a></td>
                                                        <td>07/05/2026</td>
                                                        <td><span class="badge badge-suggestion">Sugerencia</span></td>
                                                        <td>Canales Digitales</td>
                                                        <td>App Móvil</td>
                                                        <td>Sugerencia de nuevas funciones</td>
                                                        <td>Andrés Camilo Rojas V...</td>
                                                        <td>Iván Darío Zapata</td>
                                                        <td><span class="badge badge-low">Baja</span></td>
                                                        <td><span class="badge badge-filed">Radicado</span></td>
                                                        <td>12/05/2026</td>
                                                        <td><span class="semaforo semaforo-green">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04510</a></td>
                                                        <td>07/05/2026</td>
                                                        <td><span class="badge badge-suggestion">Sugerencia</span></td>
                                                        <td>Atención al Asociado</td>
                                                        <td>Atención Virtual</td>
                                                        <td>Chat sin respuesta satisfactoria</td>
                                                        <td>Beatriz Elena Montoya...</td>
                                                        <td>Patricia Inés Agudelo</td>
                                                        <td><span class="badge badge-normal">Normal</span></td>
                                                        <td><span class="badge badge-filed">Radicado</span></td>
                                                        <td>08/05/2026</td>
                                                        <td><span class="semaforo semaforo-green">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04700</a></td>
                                                        <td>06/05/2026</td>
                                                        <td><span class="badge badge-suggestion">Sugerencia</span></td>
                                                        <td>Canales Digitales</td>
                                                        <td>Portal Web</td>
                                                        <td>Sugerencia de mejora en portal</td>
                                                        <td>Patricia Inés Londoño V...</td>
                                                        <td>Iván Darío Zapata</td>
                                                        <td><span class="badge badge-low">Baja</span></td>
                                                        <td><span class="badge badge-filed">Radicado</span></td>
                                                        <td>07/05/2026</td>
                                                        <td><span class="semaforo semaforo-yellow">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04035</a></td>
                                                        <td>06/05/2026</td>
                                                        <td><span class="badge badge-suggestion">Sugerencia</span></td>
                                                        <td>Ahorro y Captación</td>
                                                        <td>CDT</td>
                                                        <td>Error en tasa de CDT</td>
                                                        <td>Diana Marcela Ríos Cas...</td>
                                                        <td>Camilo Ernesto Herrera</td>
                                                        <td><span class="badge badge-low">Baja</span></td>
                                                        <td><span class="badge badge-filed">Radicado</span></td>
                                                        <td>11/05/2026</td>
                                                        <td><span class="semaforo semaforo-green">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04610</a></td>
                                                        <td>06/05/2026</td>
                                                        <td><span class="badge badge-suggestion">Sugerencia</span></td>
                                                        <td>Crédito</td>
                                                        <td>Refinanciación de Crédito</td>
                                                        <td>Inconformidad con respuesta</td>
                                                        <td>Beatriz Elena Montoya...</td>
                                                        <td>Diana Carolina Ríos</td>
                                                        <td><span class="badge badge-low">Baja</span></td>
                                                        <td><span class="badge badge-filed">Radicado</span></td>
                                                        <td>09/05/2026</td>
                                                        <td><span class="semaforo semaforo-green">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04200</a></td>
                                                        <td>06/05/2026</td>
                                                        <td><span class="badge badge-suggestion">Sugerencia</span></td>
                                                        <td>Cartera y Cobranza</td>
                                                        <td>Reestructuración de Crédito</td>
                                                        <td>Demora en procesamiento</td>
                                                        <td>Patricia Inés Londoño V...</td>
                                                        <td>Adriana Milena Cortés</td>
                                                        <td><span class="badge badge-low">Baja</span></td>
                                                        <td><span class="badge badge-filed">Radicado</span></td>
                                                        <td>09/05/2026</td>
                                                        <td><span class="semaforo semaforo-green">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04450</a></td>
                                                        <td>06/05/2026</td>
                                                        <td><span class="badge badge-suggestion">Sugerencia</span></td>
                                                        <td>Crédito</td>
                                                        <td>Crédito de Consumo</td>
                                                        <td>Solicitud de refinanciamiento</td>
                                                        <td>Andrés Camilo Rojas V...</td>
                                                        <td>Carlos Andrés Moreno</td>
                                                        <td><span class="badge badge-low">Baja</span></td>
                                                        <td><span class="badge badge-filed">Radicado</span></td>
                                                        <td>11/05/2026</td>
                                                        <td><span class="semaforo semaforo-green">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#" class="link-radicado">FPQRS-2026-04751</a></td>
                                                        <td>06/05/2026</td>
                                                        <td><span class="badge badge-complaint">Reclamo</span></td>
                                                        <td>Ahorro y Captación</td>
                                                        <td>Cuenta de Ahorro</td>
                                                        <td>Saldo incorrecto en cuenta</td>
                                                        <td>Hernán Dario Quintero...</td>
                                                        <td>Marcela Suárez Peña</td>
                                                        <td><span class="badge badge-high">Alta</span></td>
                                                        <td><span class="badge badge-management">En Gestión</span></td>
                                                        <td>07/05/2026</td>
                                                        <td><span class="semaforo semaforo-red">●</span></td>
                                                        <td><a href="#" class="action-link">→</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="table-footer">
                                                <div class="pagination-info">Mostrando 1–10 de 205 casos</div>
                                                <div class="pagination-controls">
                                                    <button class="pagination-btn">‹</button>
                                                    <button class="pagination-btn active">1</button>
                                                    <button class="pagination-btn">2</button>
                                                    <button class="pagination-btn">3</button>
                                                    <button class="pagination-btn">4</button>
                                                    <button class="pagination-btn">5</button>
                                                    <button class="pagination-btn">›</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
  var container = document.getElementById("table-container");
  if (container) container.innerHTML = html;

  var searchForm = document.querySelector(
    '#table-container form[role="search"]',
  );
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }

  document.querySelectorAll(".tap[data-page]").forEach(function (li) {
    if (li.getAttribute("data-page") === web) {
      li.style.background = "#405777";
    }
  });

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("#toggleSidebar");
    if (btn) {
      document.getElementById("sidebar").classList.toggle("collapsed");
    }
  });

  const COLUMNAS_FECHA = [1, 10];

  let columnaActual = -1;
  let ordenAsc = true;

  function parserFecha(texto) {
    const soloFecha = texto.trim();
    const partes = soloFecha.split("/");
    if (partes.length >= 3) {
      return new Date(
        parseInt(partes[2]),
        parseInt(partes[1]) - 1,
        parseInt(partes[0]),
      );
    }
    return new Date(0);
  }

  function orderTable(columna) {
    const table = document.getElementById("myTable");
    const tbody = table.querySelector("tbody");
    const filas = Array.from(tbody.rows);
    const esFecha = COLUMNAS_FECHA.includes(columna);

    if (columna === columnaActual) {
      ordenAsc = !ordenAsc;
    } else {
      columnaActual = columna;
      ordenAsc = true;
    }

    filas.sort((a, b) => {
      const textoA = a.cells[columna].innerText.trim();
      const textoB = b.cells[columna].innerText.trim();

      let resultado;

      if (esFecha) {
        const fechaA = parserFecha(textoA);
        const fechaB = parserFecha(textoB);

        resultado = fechaA - fechaB;
      } else {
        resultado = textoA.localeCompare(textoB, "es", { sensitivity: "base" });
      }
      return ordenAsc ? resultado : -resultado;
    });

    filas.forEach((fila) => tbody.appendChild(fila));

    table.querySelectorAll("thead th").forEach((th, i) => {
      th.textContent = th.textContent.replace(/[↑↓↕]/g, "").trim();
      if (i === columna) {
        th.textContent += ordenAsc ? " ↑" : " ↓";
      } else {
        th.textContent += " ↑";
      }
    });
  }

  window.orderTable = orderTable;

  var buscador = document.getElementById("buscador");
  if (buscador) {
    buscador.addEventListener("keyup", function () {
      const filtro = this.value.toLowerCase();
      document.querySelectorAll("#myTable tbody tr").forEach((fila) => {
        fila.style.display = fila.textContent.toLowerCase().includes(filtro)
          ? ""
          : "none";
      });
    });
  }
})();
