const fs = require('fs');
const path = 'ips.txt';

function generateIPs() {

    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '');
    }

    for (let i = 0; i < 256; i++) {
        for (let j = 0; j < 256; j++) {
            for (let k = 0; k < 256; k++) {
                for (let l = 0; l < 256; l++) {
                    const ip = `${i}.${j}.${k}.${l}`;


                    console.log(ip);

                    fs.appendFileSync(path, ip + '\n');
                }
            }
        }
    }
}

generateIPs();
