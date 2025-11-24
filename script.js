let cars =[
    {marca:"Ferrari",
     modello:"Enzo",
     alimentazione:"Benzina" 
    },

    {marca:"Mustang",
     modello:"Shelby Cobra",
     alimentazione:"Benzina"
    },

    {marca:"Alfa Romeo",
     modello:"GIulietta",
     alimentazione:"Diesel"
    },

    {marca:"Fiat",
     modello:"Panda",
     alimentazione:"Gpl"
    },

    {marca:"Tesla",
     modello:"Model 3",
     alimentazione:"Elettrica"
    },

    {marca:"Peugeot",
     modello:"208",
     alimentazione:"Benzina"
    },

    {marca:"Walkswagen",
     modello:"Golf GTE",
     alimentazione:"Elettrica"
    },

    {marca:"Fiat",
     modello:"Fiorino",
     alimentazione:"Metano"
    },

    {marca:"Volvo",
     modello:"XC 40",
     alimentazione:"Diesel"
    },

    {marca:"Ford",
     modello:"Fiesta",
     alimentazione:"Gpl"
    },
];

const benzina = cars.filter (c => c.alimentazione === "Benzina");
const diesel = cars.filter (c => c.alimentazione === "Diesel");
const altro = cars.filter (c => c.alimentazione !== "Benzina" && c.alimentazione !== "Diesel");

console.log(benzina);
console.log(diesel);
console.log(altro);