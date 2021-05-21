const fs = require('fs');
const path = require('path');

/* первый агрумент создает папку, второй - коллбэк в котором аргумент это ошибка и в ф-ии
 мы обрабатываем действие в случае ошибки, если нет то выполняется остальная часть кода
 ошибка - например, папка уже существует
 fs.mkdir(path.join(__dirname, 'notes'), (err) => {
    if (err) throw new Error(err);

    console.log('папка была создана');
});
*/


/*
повторное создание файла в отличие от папки не вызывает ошибки, а перезатирает текущий
если в коллбэке передать fs.app

fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello world!',
    (err) => {
        if (err) throw new Error(err)
        console.log('файл был создан')

        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            ' From append method',
            () => {
                if (err) throw new Error(err)
                console.log('файл был изменен')
            }
        )
    }
)
*/

/*
fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    // если не вызывать Buffer, то информации желательно/необходимо задать кодировку вторым аргументом
    // иначе можно не задавать
    'utf-8',
    (err, data) => {
        if (err) throw new Error(err);

        console.log(Buffer.from(data).toString()); // Buffer - глобальный объект, сам преобразует информацию
    }
);
*/

/*
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err => {
        if (err) throw new Error(err);

        console.log('файл переименован');
    })
);
*/

fs.open(
    path.join(__dirname, 'notes', 'notes.txt'),
    'r+',
    (err => {
        if (err) throw new Error(err);

        console.log('открыт')
    })
);