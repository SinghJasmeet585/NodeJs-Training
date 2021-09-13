const fs = require('fs');
const events = require('events');

const eventEmitter = new events.EventEmitter();


//IO operation in a file

// fs.writeFileSync('sample.txt', "Hello World, ");

// //const contents = fs.readFileSync('sample.txt',{encoding: 'utf-8'}).toString();

// fs.appendFile('sample.txt', "2022 might be Cristiano Ronaldo's last world cup.", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Data Appended");
//     console.log(fs.readFileSync('sample.txt', { encoding: 'utf-8' }));
// })

// const contents = fs.readFileSync('sample.txt', { encoding: 'utf-8' });

// console.log(contents);


//IO operation in a json file

// const obj1 = {
//     name: "Ravi",
//     age: "27"
// };

// const arr = [];
// arr.push(obj1)

// const outerObj = {names: arr}

// //create an array of json files
// fs.writeFileSync('myself.json', JSON.stringify(outerObj));

const readFileContent = (filename) => {
    console.log(`Reading ${filename} fas started`);
    fs.readFile(filename, 'utf-8', readFileNow)
}

const readFileNow = (err, data) => {
    console.log(data);
}

eventEmitter.on( 'read', readFileContent ); 