const http = require('http');

const server = http.createServer((req, res)=> {
    res.end('Hello World');
});

server.listen(4242, ()=> {
    console.log('Server is running..');
    require('colors');
    const Diff = require('diff');

    const one = 'beep boop';
    const other = 'beep boob blah';

    const diff = Diff.diffChars(one, other);

    diff.forEach((part) => {
    // green for additions, red for deletions
    // grey for common parts
    const color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
    process.stderr.write(part.value[color]);
    });

    console.log();
});