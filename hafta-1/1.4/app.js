const getNotes = require('./notes.js') // notes.js import edildi.
const message = getNotes() // message değişkeni getNotes() fonksiyonundan dönen değeri tutar.
console.log(message); // Mesaj ekrana basılır.