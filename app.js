var macaddress = require('macaddress');
fs = require('fs');
const os = require('os');

console.log("           ++++++++++++++++++++++++++++++");
console.log("           +++++++++++++MAC++++++++++++++");
console.log("           ++++++++++++++++++++++++++++++");

// macaddress.one('en0', function (err, mac) {
//     console.log("Mac address for en0: %s", mac);
// });

var macs = '';

macaddress.all(function (err, all) {
    for (var [key, value] of Object.entries(all)) {
        if (value.mac && value.ipv4) {
            macs = macs + key + '\t' + value.mac + "\r\n";
        }
    }
    console.log(macs);

    let filePath;
    if (os.platform() === 'win32') {
        filePath = '%TEMP%/';
    } else {
        filePath = '/tmp/';
    }
    fs.writeFile(`${filePath}conformaciones.txt`, macs, function (err) {
        if (err) return console.log(err);
        console.log('Archivo generado');
    });

});



// console.log(os.platform());