const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write('<h1>Hello from NodeJS</h1>');
    res.end(`
        <div style="background: lightblue; width: 200px; height: 200px;">
          <h2>Test</h2>
         </div>
    `);
});

server.listen(8000, () => {
    console.log('server is running....')
})




/*
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'src', 'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) {throw err}

                    res.write('index6')
                    res.end();
                }
            );
        }
        else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'src', 'about.html'),
                'utf-8',
                (err, data) => {
                    if (err) throw new Error(err.toString());

                    res.end('data');
                }
            );
        }
        else {
            res.writeHead(404,
                'Page not found',
                {
                    'Content-Type': 'text/html; charset=utf-8'
                }
            );

            res.end(`<h1>Page not found</h1>`)
        }

        res.end();

    } else if (req.method === 'POST') {
        const body = [];

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        })

        req.on("data", (data) => {
            body.push(Buffer.from(data));
        });

        req.on('end', (data) => {
            const message = body.toString().split('=')[1];

            res.end(`
            <h2>Сообщение: ${message}</h2>
        `)
        })


    }
});

server.listen(8000, () => {
    console.log('Server is running...')
})

* */