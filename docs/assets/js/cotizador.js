/*====================================
        DATOS DEL PROYECTO
====================================*/

const apartamentos = {

    tipo1:{

        nombre:"Tipo 1",

        area:"98 m²",

        habitaciones:2,

        precio:287189

    },

    tipo2:{

        nombre:"Tipo 2",

        area:"120 m²",

        habitaciones:3,

        precio:325000

    },

    tipo3:{

        nombre:"Tipo 3",

        area:"156 m²",

        habitaciones:3,

        precio:398500

    }

};


/*====================================
        VARIABLES
====================================*/

const tarjetas=document.querySelectorAll(".type-card");

const precio=document.getElementById("price");


/*====================================
      FORMATO MONEDA
====================================*/

function formatoUSD(valor){

    return "USD$ " + valor.toLocaleString("en-US");

}


/*====================================
      CAMBIAR TARJETA
====================================*/

tarjetas.forEach(card=>{

    card.addEventListener("click",()=>{

        tarjetas.forEach(c=>{

            c.classList.remove("active");

        });

        card.classList.add("active");

        const tipo=card.dataset.type;

        precio.innerHTML=formatoUSD(

            apartamentos[tipo].precio

        );

    });

});


/*====================================
        TORRES
====================================*/

const torres=document.querySelectorAll(".tower-card");

torres.forEach(card=>{

    card.addEventListener("click",()=>{

        torres.forEach(c=>{

            c.classList.remove("active");

        });

        card.classList.add("active");

    });

});


/*====================================
      BOTON COTIZAR
====================================*/

const boton=document.querySelector(".quote-btn");

boton.addEventListener("click",()=>{

    const torre=document.querySelector(".tower-card.active h4").innerText;

    const tipo=document.querySelector(".type-card.active h5").innerText;

    const piso=document.getElementById("floorSelect").value;

    const apartamento=document.getElementById("apartmentSelect").value;

    alert(

`Solicitud enviada

${torre}

${tipo}

Piso ${piso}

Apartamento ${apartamento}

Precio ${precio.innerText}`

    );

});