/* =========================================================
   EXCELSIOR CANA RESIDENCES
   COTIZADOR DE APARTAMENTOS
========================================================= */


/* =========================================================
   DATOS REALES
========================================================= */

const unidadesExcelsior = [

    /* =========================
       TIPO A
    ========================== */

    {
        id: "A-101",
        modulo: "A",
        tipo: "A",
        nivel: 1,
        area: "81.67 m²",
        habitaciones: 2,
        banos: "2.5",
        parqueo: 1,
        extra: "Patio trasero de 30.96 m²",
        precio: "US$206,283.50",
        estado: "Disponible"
    },

    {
        id: "A-201",
        modulo: "A",
        tipo: "A",
        nivel: 2,
        area: "81.67 m²",
        habitaciones: 2,
        banos: "3",
        parqueo: 1,
        extra: "Terraza de 77.06 m² + ½ baño + depósito",
        precio: "US$215,503.50",
        estado: "Disponible"
    },

    {
        id: "B-101",
        modulo: "B",
        tipo: "A",
        nivel: 1,
        area: "81.67 m²",
        habitaciones: 2,
        banos: "2.5",
        parqueo: 1,
        extra: "Patio trasero de 36.87 m²",
        precio: "US$207,465.50",
        estado: "Disponible"
    },

    {
        id: "B-201",
        modulo: "B",
        tipo: "A",
        nivel: 2,
        area: "81.67 m²",
        habitaciones: 2,
        banos: "3",
        parqueo: 1,
        extra: "Terraza de 77.06 m² + ½ baño + depósito",
        precio: "US$215,503.50",
        estado: "Disponible"
    },


    /* =========================
       TIPO B
    ========================== */

    {
        id: "A-102",
        modulo: "A",
        tipo: "B",
        nivel: 1,
        area: "80.49 m²",
        habitaciones: 1,
        banos: "2",
        parqueo: 1,
        extra: "Estudio + patio trasero de 50.22 m²",
        precio: "US$207,244.50",
        estado: "Disponible"
    },

    {
        id: "A-105",
        modulo: "A",
        tipo: "B",
        nivel: 1,
        area: "80.49 m²",
        habitaciones: 1,
        banos: "2",
        parqueo: 1,
        extra: "Estudio + patio trasero de 72.88 m²",
        precio: "US$211,776.50",
        estado: "Disponible"
    },

    {
        id: "A-202",
        modulo: "A",
        tipo: "B",
        nivel: 2,
        area: "80.49 m²",
        habitaciones: 1,
        banos: "2.5",
        parqueo: 1,
        extra: "Estudio + terraza de 76.72 m² + ½ baño + depósito",
        precio: "US$212,544.50",
        estado: "Disponible"
    },

    {
        id: "A-205",
        modulo: "A",
        tipo: "B",
        nivel: 2,
        area: "80.49 m²",
        habitaciones: 1,
        banos: "2.5",
        parqueo: 1,
        extra: "Estudio + terraza de 76.72 m² + ½ baño + depósito",
        precio: "US$212,544.50",
        estado: "Disponible"
    },

    {
        id: "B-102",
        modulo: "B",
        tipo: "B",
        nivel: 1,
        area: "80.49 m²",
        habitaciones: 1,
        banos: "2",
        parqueo: 1,
        extra: "Estudio + patio trasero de 30.97 m²",
        precio: "US$203,394.50",
        estado: "Disponible"
    },

    {
        id: "B-105",
        modulo: "B",
        tipo: "B",
        nivel: 1,
        area: "80.49 m²",
        habitaciones: 1,
        banos: "2",
        parqueo: 1,
        extra: "Estudio + patio trasero de 114.22 m²",
        precio: "US$220,044.50",
        estado: "Disponible"
    },

    {
        id: "B-202",
        modulo: "B",
        tipo: "B",
        nivel: 2,
        area: "80.49 m²",
        habitaciones: 1,
        banos: "2.5",
        parqueo: 1,
        extra: "Estudio + terraza de 76.72 m² + ½ baño + depósito",
        precio: "US$212,544.50",
        estado: "Disponible"
    },

    {
        id: "B-205",
        modulo: "B",
        tipo: "B",
        nivel: 2,
        area: "80.49 m²",
        habitaciones: 1,
        banos: "2.5",
        parqueo: 1,
        extra: "Estudio + terraza de 76.72 m² + ½ baño + depósito",
        precio: "US$212,544.50",
        estado: "Disponible"
    },


    /* =========================
       TIPO C
    ========================== */

    {
        id: "A-103",
        modulo: "A",
        tipo: "C",
        nivel: 1,
        area: "56.50 m²",
        habitaciones: 1,
        banos: "1",
        parqueo: 1,
        extra: "Patio trasero de 41.06 m²",
        precio: "US$152,287.00",
        estado: "Disponible"
    },

    {
        id: "A-104",
        modulo: "A",
        tipo: "C",
        nivel: 1,
        area: "56.50 m²",
        habitaciones: 1,
        banos: "1",
        parqueo: 1,
        extra: "Patio trasero de 34.29 m²",
        precio: "US$150,933.00",
        estado: "Disponible"
    },

    {
        id: "A-203",
        modulo: "A",
        tipo: "C",
        nivel: 2,
        area: "56.50 m²",
        habitaciones: 1,
        banos: "1",
        parqueo: 1,
        extra: "Distribución interior de 56.50 m²",
        precio: "US$149,725.00",
        estado: "Disponible"
    },

    {
        id: "A-204",
        modulo: "A",
        tipo: "C",
        nivel: 2,
        area: "56.50 m²",
        habitaciones: 1,
        banos: "1",
        parqueo: 1,
        extra: "Distribución interior de 56.50 m²",
        precio: "US$149,725.00",
        estado: "Disponible"
    },

    {
        id: "B-103",
        modulo: "B",
        tipo: "C",
        nivel: 1,
        area: "56.50 m²",
        habitaciones: 1,
        banos: "1",
        parqueo: 1,
        extra: "Patio trasero de 35.71 m²",
        precio: "US$151,217.00",
        estado: "Disponible"
    },

    {
        id: "B-104",
        modulo: "B",
        tipo: "C",
        nivel: 1,
        area: "56.50 m²",
        habitaciones: 1,
        banos: "1",
        parqueo: 1,
        extra: "Patio trasero de 46.50 m²",
        precio: "US$153,375.00",
        estado: "Disponible"
    },

    {
        id: "B-203",
        modulo: "B",
        tipo: "C",
        nivel: 2,
        area: "56.50 m²",
        habitaciones: 1,
        banos: "1",
        parqueo: 1,
        extra: "Distribución interior de 56.50 m²",
        precio: "US$149,725.00",
        estado: "Disponible"
    },

    {
        id: "B-204",
        modulo: "B",
        tipo: "C",
        nivel: 2,
        area: "56.50 m²",
        habitaciones: 1,
        banos: "1",
        parqueo: 1,
        extra: "Distribución interior de 56.50 m²",
        precio: "US$149,725.00",
        estado: "Disponible"
    },


    /* =========================
       TIPO D
    ========================== */

    {
        id: "A-106",
        modulo: "A",
        tipo: "D",
        nivel: 1,
        area: "81.67 m²",
        habitaciones: 1,
        banos: "2.5",
        parqueo: 1,
        extra: "Estudio + patio trasero de 29.29 m²",
        precio: "US$205,949.50",
        estado: "Disponible"
    },

    {
        id: "A-206",
        modulo: "A",
        tipo: "D",
        nivel: 2,
        area: "81.67 m²",
        habitaciones: 1,
        banos: "3",
        parqueo: 1,
        extra: "Estudio + terraza de 77.06 m² + ½ baño + depósito",
        precio: "US$215,503.50",
        estado: "Disponible"
    },

    {
        id: "B-106",
        modulo: "B",
        tipo: "D",
        nivel: 1,
        area: "81.67 m²",
        habitaciones: 1,
        banos: "2.5",
        parqueo: 1,
        extra: "Estudio + patio trasero de 30.26 m²",
        precio: "US$206,143.50",
        estado: "Disponible"
    },

    {
        id: "B-206",
        modulo: "B",
        tipo: "D",
        nivel: 2,
        area: "81.67 m²",
        habitaciones: 1,
        banos: "3",
        parqueo: 1,
        extra: "Estudio + terraza de 77.06 m² + ½ baño + depósito",
        precio: "US$215,503.50",
        estado: "Disponible"
    }

];


/* =========================================================
   ESTADO
========================================================= */

let moduloActivo = "A";
let tipoActivo = "A";


/* =========================================================
   ELEMENTOS
========================================================= */

const moduleButtons =
    document.querySelectorAll(".module-option");

const typeButtons =
    document.querySelectorAll(".quote-type");

const apartmentSelect =
    document.getElementById("quoteApartmentSelect");

const apartmentName =
    document.getElementById("quoteApartmentName");

const area =
    document.getElementById("quoteArea");

const level =
    document.getElementById("quoteLevel");

const bedrooms =
    document.getElementById("quoteBedrooms");

const bathrooms =
    document.getElementById("quoteBathrooms");

const parking =
    document.getElementById("quoteParking");

const type =
    document.getElementById("quoteType");

const extra =
    document.getElementById("quoteExtra");

const availability =
    document.getElementById("quoteAvailability");

const price =
    document.getElementById("quotePrice");


/* =========================================================
   FILTRAR UNIDADES
========================================================= */

function obtenerUnidadesDisponibles() {

    return unidadesExcelsior.filter(
        unidad =>
            unidad.modulo === moduloActivo &&
            unidad.tipo === tipoActivo
    );

}


/* =========================================================
   ACTUALIZAR SELECT
========================================================= */

function actualizarApartamentos() {

    const unidades =
        obtenerUnidadesDisponibles();


    /* =========================================
       DESTRUIR NICE SELECT ACTUAL
    ========================================== */

    if (
        window.jQuery &&
        typeof jQuery.fn.niceSelect === "function"
    ) {

        try {

            jQuery("#quoteApartmentSelect")
                .niceSelect("destroy");

        } catch (error) {

            console.log(
                "Nice Select todavía no estaba inicializado."
            );

        }

    }


    /* =========================================
       LIMPIAR SELECT
    ========================================== */

    apartmentSelect.innerHTML = "";


    /* =========================================
       AGREGAR APARTAMENTOS
    ========================================== */

    unidades.forEach(unidad => {

        const option =
            document.createElement("option");

        option.value =
            unidad.id;

        option.textContent =
            `${unidad.id} · ${
                unidad.nivel === 1
                    ? "1er nivel"
                    : "2do nivel"
            }`;

        apartmentSelect.appendChild(option);

    });


    /* =========================================
       SELECCIONAR PRIMER APARTAMENTO
    ========================================== */

    if (unidades.length > 0) {

        apartmentSelect.value =
            unidades[0].id;

        actualizarResultado(
            unidades[0]
        );

    }


    /* =========================================
       VOLVER A CREAR NICE SELECT
    ========================================== */

    if (
        window.jQuery &&
        typeof jQuery.fn.niceSelect === "function"
    ) {

        jQuery("#quoteApartmentSelect")
            .niceSelect();

    }

}


/* =========================================================
   ACTUALIZAR RESULTADO
========================================================= */

function actualizarResultado(unidad) {

    apartmentName.textContent =
        unidad.id;

    area.textContent =
        unidad.area;

    level.textContent =
        unidad.nivel === 1
            ? "1er nivel"
            : "2do nivel";

    bedrooms.textContent =
        unidad.habitaciones;

    bathrooms.textContent =
        unidad.banos;

    parking.textContent =
        unidad.parqueo;

    type.textContent =
        unidad.tipo;

    extra.textContent =
        unidad.extra;

    availability.textContent =
        unidad.estado;


    actualizarPrecio(unidad);

}


/* =========================================================
   ACTUALIZAR PRECIO
========================================================= */

function actualizarPrecio(unidad) {

    /*
     * Guardamos los datos reales del apartamento
     */

    price.dataset.precio =
        unidad.precio;

    price.dataset.apartamento =
        unidad.id;


    /*
     * Comprobar si el usuario ya se registró
     */

    const desbloqueado =
        localStorage.getItem(
            "preciosDesbloqueados"
        ) === "true";


    if (desbloqueado) {

        price.textContent =
            unidad.precio;

        price.classList.remove(
            "precio-bloqueado"
        );

        price.classList.add(
            "precio-desbloqueado"
        );

        price.onclick = null;

        price.style.cursor =
            "default";

    }

    else {

        price.innerHTML =
            '<i class="fa fa-lock"></i> Ver precio';

        price.classList.add(
            "precio-bloqueado"
        );

        price.classList.remove(
            "precio-desbloqueado"
        );

        price.style.cursor =
            "pointer";


        price.onclick =
            function () {

                abrirRegistroPrecio(
                    price
                );

            };

    }

}


/* =========================================================
   CAMBIAR MÓDULO
========================================================= */

moduleButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            moduleButtons.forEach(
                btn => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            this.classList.add(
                "active"
            );


            moduloActivo =
                this.dataset.module;


            actualizarApartamentos();

        }
    );

});


/* =========================================================
   CAMBIAR TIPO
========================================================= */

typeButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            typeButtons.forEach(
                btn => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            this.classList.add(
                "active"
            );


            tipoActivo =
                this.dataset.type;


            actualizarApartamentos();

        }
    );

});


/* =========================================================
   CAMBIAR APARTAMENTO
========================================================= */

function cambiarApartamentoSeleccionado() {

    const apartamentoSeleccionado =
        apartmentSelect.value;


    const unidad =
        unidadesExcelsior.find(
            item =>
                item.id === apartamentoSeleccionado
        );


    if (unidad) {

        actualizarResultado(
            unidad
        );

    }

}


/* =========================================================
   EVENTO DEL SELECT
========================================================= */

/*
 * Usamos delegación porque Nice Select se destruye
 * y vuelve a crear cuando cambias módulo o tipo.
 */

if (window.jQuery) {

    jQuery(document)

        .off(
            "change.cotizador",
            "#quoteApartmentSelect"
        )

        .on(
            "change.cotizador",
            "#quoteApartmentSelect",
            function () {

                cambiarApartamentoSeleccionado();

            }
        );

}

else {

    /*
     * Fallback en caso de que jQuery no esté disponible.
     */

    apartmentSelect.addEventListener(
        "change",
        cambiarApartamentoSeleccionado
    );

}


/* =========================================================
   INICIAR COTIZADOR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        actualizarApartamentos();

    }
);