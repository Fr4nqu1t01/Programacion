//Objetos

let perro = {
    nombre: "tyson",
    raza: 'caniche toy',
    edad: 10,

    ladrar: function () {
        console.log('woof woof!');
    }
}

console.log(perro.edad);

const plato = {
    nombre: "milangueza",
    sinTACC: false,
    porciones: 10,
    ingredientes: ["pan", "huevo", "harina"],
    acompañamiento: {
        papas: true,
        mayo: false,
    },

    servir: () => {
        return "sin carne por favor.";
    }
}

console.log(plato.ingredientes);

console.log(plato.servir());
