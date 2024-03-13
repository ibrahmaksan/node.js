const fs = require('fs'); // file system modulu eklendi.
const chalk = require('chalk'); // konsolda yesil ve kirmizi renkte bildiri cikmasini saglar.

const addNote = (title,body)=>{ // not eklemeye yarayan basliktir.
    const notes = loadNotes(); // notları dosyadan okur.
    const duplicateNotes = notes.filter((note)=> note.title === title);

    if(duplicateNotes.length === 0){ // ayni basliktan yoksa 0  true doner bburası ve not eklenir.
        notes.push({
            title:title,
            body:body
        })
        console.log(chalk.green.inverse('Yeni not eklenmiştir'));
        saveNotes(notes);
    }
    else {
        console.log(chalk.red.inverse("Bu baslik daha once kullanilmistir. Lutfen baska bir baslik deneyiniz."));
    }
};

const removeNote = (title)=>{// not kaldırmaya yarar.
    const notes = loadNotes(); // once notu yğkler daha sonra kaldırılması gereken notu bulur. 

    const notesToKeep = notes.filter((note) => note.title !== title); // filter sonucunda sonucunda dizinin istenen elemanları dönüyor. 
    
    if(notes.length>notesToKeep.length){ // eger silinmis durumda ise dogal olarak istenen boyuttaan daha fazla olamli.
        console.log(chalk.green.inverse("Not silinmistir."));
        saveNotes(notesToKeep); // son olarak save ile dosyaya yeniden yazırma islemini gerceklesitiriyoruz.
    }
    else{
        console.log(chalk.red.inverse("Silmek istediginiz not bulunamamistir."));
    }
};

const loadNotes = ()=> { // dosyadan okuyan fonksiyondur.
    try{
        const dataBuffer = fs.readFileSync('denemeJson');// dosyadan okur.
        const dataJSON = dataBuffer.toString();//Okudugu veriyi JSON stringine çevirir.
        return JSON.parse(dataJSON)// salt metine cevirip geri doneriz.
    } catch(e){
        return []// dosya okumada hata ile karsilasirsa bos bir dizi doner.
    }
};
const saveNotes = (notes)=>{// Dosyaya yazdırma islemini yapacak olan fonksiyondur.
    const dataJSON = JSON.stringify(notes); // /json stringine cevirdik.
    fs.writeFileSync('denemeJson',dataJSON);// dosyaya yazdırma islemi
};

module.exports = { // fonksiyonlarımızı export ettik. 
    addNote:addNote, // soldaki kısım farklı bir dosyada cagirirken kullanırız.
    // sagdaki kısım ise bu dosyadaki ismidir fonksiyonun.
    removeNote:removeNote
};