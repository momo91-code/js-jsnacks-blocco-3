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

///////////////////////////////////////////////////////////////////////////////////////////////

let names =["Mario", "FRANCESCO", "luca"];

let formattedNames = names.map(
    n => n[0].toUpperCase() + n.slice(1).toLowerCase());
console.log(names);
console.log(formattedNames);

///////////////////////////////////////////////////////////////////////////////////////////////

let animals =[
    {nome:"cane",
     famiglia:"canidi",
     classe:"mammiferi"
    },

    {nome:"leone",
     famiglia: "felidi",
     classe:"mammiferi"
    },

    {nome:"gallina",
     famiglia:"fasianidi",
     classe:"uccelli"
    },

    {nome:"pinguino",
     famiglia:"sfeniscidi",
     classe:"uccelli"
    },
];

let mammifero = animals.filter (a => a.classe === "mammiferi");
console.log(animals);
console.log(mammifero);

/////////////////////////////////////////////////////////////////////////////////////////////////

let persons =[
    {nome:"Alessia",
     cognome:"Rossi",
     eta: 20,
    },

    {nome:"Martina",
     cognome:"Bianchi",
     eta: 17,
    },

    {nome:"Francesca",
     cognome:"Verdi",
     eta: 50,
    },

    {nome:"Eleonora",
     cognome:"Gialli",
     eta: 14,
    },
];

let canDrive = persons.map(person => {
    let guida = person.eta >= 18 ? "Può guidare" : "Non può giudare";
    return `${person.nome}  ${person.cognome} ${guida}`;
});

console.log(canDrive);