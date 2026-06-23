(function () {
  var html = `<aside class="sidebar" id="sidebar">
                    <div class="icon-left" id="toggleSidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                    </div>
                    <div class="border-line"></div>
                    <ul>
                        <li class="mb-4 pb-2">
                            <div class="row justify-content-start align-items-center">
                                <div class="col-2 mb-1">
                                    <img alt="Logo" width="40" height="40" decoding="async" data-nimg="1"
                                        class="flex-shrink-0 logo-mobile" style="color:transparent"
                                        src="https://fpqrslab.estrategiasegura.com/_next/image?url=%2Fassets%2Fimages%2Fapp_logo.png&w=96&q=85">
                                </div>
                                <div class="col-8">
                                    <p class="titel"> GestorFPQRS</p>
                                </div>

                            </div>

                        </li>
                        <li>
                            <p class="sub-text mb-2 pb-1">Operación</p>
                        </li>
                        <li class="tap" data-page="inbox.html"><a  href="inbox.html"> <span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-folder-open" aria-hidden="true">
                                        <path
                                            d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2">
                                        </path>
                                    </svg></span><span class="text ">Bandeja de Casos</span> <div class="sidebar-badge">5</div></a></li>
                        <li class="tap" data-page="case-details.html"><a href="case-details.html"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-file-text" aria-hidden="true">
                                        <path
                                            d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z">
                                        </path>
                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg></span><span class="text">Detalle de Caso</span></a></li>
                        <li class="tap"><a href="fpqrs.html"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-list-checks" aria-hidden="true">
                                        <path d="M13 5h8"></path>
                                        <path d="M13 12h8"></path>
                                        <path d="M13 19h8"></path>
                                        <path d="m3 17 2 2 4-4"></path>
                                        <path d="m3 7 2 2 4-4"></path>
                                    </svg></span><span class="text">Registrar FPQRS</span></a></li>
                        <li class="tap"><a data-page="case-details.html" class="pt-1 pb-1"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-square-plus" aria-hidden="true">
                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                        <path d="M8 12h8"></path>
                                        <path d="M12 8v8"></path>
                                    </svg></span><span class="text">Crear Caso (Operador)</span></a></li>
                        <li class="tap"><a href="register-case.html"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-chart-no-axes-column"
                                        aria-hidden="true">
                                        <path d="M5 21v-6"></path>
                                        <path d="M12 21V3"></path>
                                        <path d="M19 21V9"></path>
                                    </svg></span>
                                    <span class="text">Métricas</span>
                                    </a></li>
                        <li class="tap"><a href="register-case.html"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-trending-up" aria-hidden="true">
                                        <path d="M16 7h6v6"></path>
                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg></span><span class="text">Analítica</span></a></li>
                        <li class="tap"><a href="register-case.html"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-download" aria-hidden="true">
                                        <path d="M12 15V3"></path>
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <path d="m7 10 5 5 5-5"></path>
                                    </svg></span><span class="text">Exportar Casos</span></a></li>
                        <li>
                            <p class="sub-text">Administración</p>
                        </li>
                        <li class="tap"><a class="" href="/audit-trail"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true">
                                        <path
                                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                        </path>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg></span><span class="text">Auditoría</span></a>
                        </li>
                        <li class="tap"><a href="/parameter-administration"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-settings" aria-hidden="true">
                                        <path
                                            d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915">
                                        </path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg></span><span class="text">Parametrización</span></a>
                        </li>
                        <li class="tap"><a href="/parametros-alternativos"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-flask-conical" aria-hidden="true">
                                        <path
                                            d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2">
                                        </path>
                                        <path d="M6.453 15h11.094"></path>
                                        <path d="M8.5 2h7"></path>
                                    </svg></span><span class="text">Parámetros Alt.</span></a></li>
                        <li class="tap"><a href="/modelo-categoria-responsable"><span class="m-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-book-open" aria-hidden="true">
                                        <path d="M12 7v14"></path>
                                        <path
                                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                        </path>
                                    </svg></span><span class="text">Modelo Cat. Resp.</span></a></li>

                    </ul>
                    <div class="secon-part">
                        <ul class="pt-0 mt-0">
                            <li class="tap"><a><span class="m-1"><svg xmlns="http://www.w3.org/2000/svg" width="18"
                                            height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-bell shrink-0" aria-hidden="true">
                                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                            <path
                                                d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326">
                                            </path>
                                        </svg></span><span class="text">Notificaciones</span></a></li>
                            <li class="tap"><a class="profile-icon"><span class="m-1 "><svg
                                            xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-user text-white" aria-hidden="true">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg></span>
                                    <span class="row profile text">
                                        <div class="col-12 user">Ruperta Jhonson</div>
                                        <div class="col-12 rol">Administrador</div>
                                    </span>
                                </a></li>

                            <li class="tap d-flex">
                            <a href="register-case.html">
                             <span class="close p-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-log-out shrink-0" aria-hidden="true">
                                        <path d="m16 17 5-5-5-5"></path>
                                        <path d="M21 12H9"></path>
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    </svg></span>
                                <span class="text close">Cerrar sesión</span>
                              </a>
                            </li>

                        </ul>
                    </div>
                </aside>`;
  var container = document.getElementById("sidebar-container");
  if (container) container.innerHTML = html;

  // enlace activo - detectar página actual correctamente
  var pathname = window.location.pathname;
  var currentPage = "inbox.html"; // default

  if (pathname.includes("case-details.html")) {
    currentPage = "case-details.html";
  } else if (pathname.includes("inbox.html")) {
    currentPage = "inbox.html";
  }

  document.querySelectorAll(".tap[data-page]").forEach(function (li) {
    if (li.getAttribute("data-page") === currentPage) {
      li.classList.add("active");
    }
  });

  function setupToggleSidebar() {
    var toggleBtn = document.getElementById("toggleSidebar");
    var sidebar = document.getElementById("sidebar");

    if (toggleBtn && sidebar) {
      toggleBtn.onclick = null;

      toggleBtn.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Toggle clicked, sidebar state:", sidebar.className);
          sidebar.classList.toggle("collapsed");
          console.log("After toggle:", sidebar.className);
        },
        false,
      );

      console.log("Toggle sidebar setup complete");
    } else {
      console.warn("Toggle button or sidebar not found");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupToggleSidebar);
  } else {
    setupToggleSidebar();
  }
})();
