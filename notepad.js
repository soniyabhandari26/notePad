const fs = require('fs');
const content = 'Hi Soniya Bhandari'
fs.writeFile('/notepad.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
})