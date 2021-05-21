const EventEmitter = require('events');

// существует 2 основных метода: emit и on,
// emit - создает событие, первый аргумент задает название события,
// on - исполняет функцию (2-й аргумент) по наступлению события указанного в первом аргументе
class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger();

logger.on('message', (data) => {
    console.log(data)
});

logger.log('Hello');