

const yargs = require('yargs');
const islemler = require('./islemler');
yargs.command({
    command:"calculate",
    describe:"islem yapar",
    builder:{
    sayi1: {
        describe:'sayi1',
        demandOption: true,
        type: 'number'
    },
    sayi2: {
        describe:'sayi2',
        demandOption: true,
        type: 'number'
    },
    islem:{
        describe:'islem',
        demandOption:true,
        type:'string'
    }
},
    handler: function(argv){
        if(argv.islem === "topla"){
            console.log(islemler.topla(argv.sayi1,argv.sayi2))
        } 
        else if(argv.islem === "cikar"){
            console.log(islemler.cikar(argv.sayi1,argv.sayi2))
        }  
        else if(argv.islem=== "carp"){
            console.log(islemler.carp(argv.sayi1,argv.sayi2))
        }  
        else if(argv.islem === "bol"){
            console.log(islemler.bol(argv.sayi1,argv.sayi2))
        } 
        else{
            console.log("fksdfsd");
        }
    }
})
yargs.parse();