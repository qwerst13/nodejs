function consoleToJSON() {
    const con = {

    }
    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split('=');
        con[arg[0]] = arg[1] || true;


    }
    return con;
}

console.log(consoleToJSON())