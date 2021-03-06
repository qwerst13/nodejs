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
                (err, data) => {
                    if (err) throw new Error(err.toString());

                    res.end(data.toString());
                }
            );
        }
        else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'src', 'about.html'),
                'utf-8',
                (err, data) => {
                    if (err) throw new Error(err.toString());

                    res.end(data.toString());
                }
            );
        }
        else if (req.url === '/api/users') {
            res.writeHead(200, {
                'Content-Type': 'text/json'
            });

            const users = [
                {name: 'A', age: 18},
                {name: 'B', age: 18.5}
            ];

            res.end(JSON.stringify(users));

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


    }
    else if (req.method === 'POST') {
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
            <a href="/">Вернутся на главную</a>
        `)
        })


    }
});

server.listen(8000, () => {
    console.log('Server is running...')
})
