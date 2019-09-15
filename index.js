const fs = require('fs');



let content = '';
let = length = 1;
for (var x = 0; x <= 100; x++) {
    sinX = Math.sin(2 * Math.PI * (x / 100))
    cosX = Math.cos(2 * Math.PI * (x / 100))
    content = content + `
    ${100 - x}%{
        box-shadow:  ${cosX * length * 2}px ${sinX * length * 2}px 6px  ${length}px #000000;
    }
    `
}

let Stringona = `@keyframes rotateShadow {
    
    ${content}
}`
fs.writeFile('./rotateShadow.css', Stringona)