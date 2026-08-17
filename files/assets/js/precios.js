/* =========================================================
   RESIDENCIAL EXCANA
   SISTEMA DE REGISTRO Y DESBLOQUEO DE PRECIOS
========================================================= */

let apartamentoConsultado = "";


/* =========================================================
   ABRIR MODAL
========================================================= */

function abrirRegistroPrecio(elemento) {

    // Si ya se registró anteriormente, mostrar precios
    if (localStorage.getItem("preciosDesbloqueados") === "true") {
        desbloquearPrecios();
        return;
    }

    // Guardar apartamento que estaba consultando
    if (elemento && elemento.dataset.apartamento) {

        apartamentoConsultado = elemento.dataset.apartamento;

        const inputApartamento =
            document.getElementById("lead-apartamento");

        if (inputApartamento) {
            inputApartamento.value = apartamentoConsultado;
        }
    }


    // Obtener elementos
    const formulario =
        document.getElementById("form-registro-precios");

    const confirmacion =
        document.getElementById("confirmacion-precio");

    const contenidoModal =
        document.querySelector(".modal-precios__contenido");


    // Volver al modo formulario
    if (contenidoModal) {
        contenidoModal.classList.remove("modo-confirmacion");
    }

    if (formulario) {
        formulario.style.display = "block";
    }

    if (confirmacion) {
        confirmacion.style.display = "none";
    }


    // Abrir modal
    const modal =
        document.getElementById("modal-precios");

    if (modal) {
        modal.classList.add("activo");
        document.body.style.overflow = "hidden";
    }
}


/* =========================================================
   CERRAR MODAL
========================================================= */

function cerrarRegistroPrecio() {

    const modal =
        document.getElementById("modal-precios");

    const contenidoModal =
        document.querySelector(".modal-precios__contenido");

    const formulario =
        document.getElementById("form-registro-precios");

    const confirmacion =
        document.getElementById("confirmacion-precio");


    if (modal) {
        modal.classList.remove("activo");
    }

    // Restaurar estado original
    if (contenidoModal) {
        contenidoModal.classList.remove("modo-confirmacion");
    }

    if (formulario) {
        formulario.style.display = "block";
    }

    if (confirmacion) {
        confirmacion.style.display = "none";
    }

    document.body.style.overflow = "";
}


/* =========================================================
   CERRAR CONFIRMACIÓN
========================================================= */

function cerrarConfirmacionPrecio() {

    const modal =
        document.getElementById("modal-precios");

    const formulario =
        document.getElementById("form-registro-precios");

    const confirmacion =
        document.getElementById("confirmacion-precio");

    const contenidoModal =
        document.querySelector(".modal-precios__contenido");


    if (modal) {
        modal.classList.remove("activo");
    }

    if (contenidoModal) {
        contenidoModal.classList.remove("modo-confirmacion");
    }

    if (formulario) {
        formulario.style.display = "block";
    }

    if (confirmacion) {
        confirmacion.style.display = "none";
    }

    document.body.style.overflow = "";
}


/* =========================================================
   DESBLOQUEAR PRECIOS
========================================================= */

function desbloquearPrecios() {

    const precios =
        document.querySelectorAll(".precio-bloqueado");

    precios.forEach(function (precio) {

        if (precio.dataset.precio) {
            precio.innerHTML = precio.dataset.precio;
        }

        precio.onclick = null;
        precio.style.cursor = "default";

        precio.classList.remove("precio-bloqueado");
        precio.classList.add("precio-desbloqueado");
    });
}


/* =========================================================
   CUANDO CARGA LA PÁGINA
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SI YA SE REGISTRÓ ANTERIORMENTE
    ===================================================== */

    if (localStorage.getItem("preciosDesbloqueados") === "true") {
        desbloquearPrecios();
    }


    /* =====================================================
       CERRAR MODAL HACIENDO CLICK FUERA
    ===================================================== */

    const modal =
        document.getElementById("modal-precios");

    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                cerrarRegistroPrecio();
            }

        });
    }


    /* =====================================================
       FORMULARIO
    ===================================================== */

    const formulario =
        document.getElementById("form-registro-precios");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();


            /* =============================================
               DATOS
            ============================================= */

            const nombre =
                document.getElementById("lead-nombre").value.trim();

            const email =
                document.getElementById("lead-email").value.trim();

            const telefono =
                document.getElementById("lead-telefono").value.trim();

            const cedula =
                document.getElementById("lead-cedula").value.trim();

            const apartamento =
                document.getElementById("lead-apartamento").value;


            /* =============================================
               VALIDACIÓN
            ============================================= */

            if (
                nombre === "" ||
                email === "" ||
                telefono === "" ||
                cedula === ""
            ) {

                alert("Por favor completa todos los campos.");
                return;
            }


            /* =============================================
               DATOS DEL INTERESADO

               Aquí conectaremos Supabase después.
            ============================================= */

            const lead = {

                nombre: nombre,
                email: email,
                telefono: telefono,
                cedula: cedula,
                apartamento: apartamento,
                fecha: new Date().toISOString()

            };

            console.log("Nuevo lead Excana:", lead);


            /* =============================================
               BUSCAR PRECIO CONSULTADO
            ============================================= */

            const precioElemento =
                document.querySelector(
                    '[data-apartamento="' + apartamento + '"]'
                );

            let precioConsultado = "";

            if (precioElemento) {
                precioConsultado =
                    precioElemento.dataset.precio;
            }


            /* =============================================
               GUARDAR DESBLOQUEO
            ============================================= */

            localStorage.setItem(
                "preciosDesbloqueados",
                "true"
            );


            /* =============================================
               DESBLOQUEAR PRECIOS
            ============================================= */

            desbloquearPrecios();


            /* =============================================
               PREPARAR CONFIRMACIÓN
            ============================================= */

            const confirmacion =
                document.getElementById(
                    "confirmacion-precio"
                );

            const confirmacionApartamento =
                document.getElementById(
                    "confirmacion-apartamento"
                );

            const confirmacionPrecio =
                document.getElementById(
                    "confirmacion-precio-valor"
                );

            const contenidoModal =
                document.querySelector(
                    ".modal-precios__contenido"
                );


            /* Ocultar formulario */

            formulario.style.display = "none";


            /* Activar modal compacto */

            if (contenidoModal) {
                contenidoModal.classList.add(
                    "modo-confirmacion"
                );
            }


            /* Colocar apartamento */

            if (confirmacionApartamento) {

                confirmacionApartamento.textContent =
                    apartamento || "Apartamento";

            }


            /* Colocar precio */

            if (confirmacionPrecio) {

                confirmacionPrecio.textContent =
                    precioConsultado || "Consultar";

            }


            /* Mostrar confirmación */

            if (confirmacion) {
                confirmacion.style.display = "block";
            }


            /* Limpiar formulario */

            formulario.reset();

        });
    }


    /* =====================================================
       CERRAR MODAL CON ESC
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            cerrarRegistroPrecio();
        }

    });

});