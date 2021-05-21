const os = require('os');

// платформа (win32)
//console.log(os.platform());

// архитектура - х64
//console.log(os.arch());

// информация о процессоре в виде объекта
//console.log(os.cpus());

// Свободная память
console.log(os.freemem());

// Всего памяти
console.log(os.totalmem());

// Небольшая импровизация - свободная память в %
console.log(Math.round((os.freemem()/os.totalmem())*10000)/100+'%');

// Корневая директория
console.log(os.homedir());

// Сколько времени система работает
console.log(os.uptime());

console.log(os.userInfo());