const yargs = require('yargs');
const notes = require("./notes");

yargs.command({ // not ekleme islemini yapan komut ve icerigi
    // onceki haftalarda aciklandigindan dolayi bu kisimda alt taraflarda yorum satiri birakilmamistir.
    command :"add",
    describe : "not ekler",
    builder:{
        title :{
            describe: "Not basligi",
            demanOption: true,
            type : "string"
        },
        body:{
            describe:"icerik",
            demanOption: true,
            type : "string"
        }
    },
    handler: (argv)=>{
        console.log("Not ekleniyorrrrr.....");
        notes.addNote(argv.title,argv.body)
    }
});

yargs.command({ // not silmeye yarayan komuttur.
    command :"remove",
    describe : "not sil",
    builder:{
        title :{
            describe: "Not basligi",
            demanOption: true,
            type : "string"
        }
    },

    handler: (argv)=>{
        console.log("Not siliniyor.....");
        notes.removeNote(argv.title);
    }
});
yargs.parse();