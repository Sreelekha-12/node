const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;
        writeFile('./content/result_async.txt', `the result of two files in async is ${first} , ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;

            }
            console.log('done with the task');

        });

    })
})
console.log('starting next task');
