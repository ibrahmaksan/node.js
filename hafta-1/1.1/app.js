const fs = require('fs')

fs.writeFileSync('notes.txt', 'I am Ibrahim') // notes.txt üzerine I am Ibrahim yazar.
fs.appendFileSync('notes.txt', 'I live in Tarsus') // notes.txt imlecin kaldığı yerden itibaren I live in Tarsus yazar.