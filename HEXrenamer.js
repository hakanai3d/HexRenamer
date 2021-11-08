let fs = require("fs");


for (let i = 0; i < 10000; i++) {
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");

    fs.rename (`${__dirname}/export/${i}.json`,`${__dirname}/hexed/${paddedHex}.json`, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
    })    
    fs.rename (`${__dirname}/export/${i}.png`,`${__dirname}/hexed/${paddedHex}.png`, (err) => {
        if (err) throw err;
        console.log('Rename complete!');    
        
    })
}
