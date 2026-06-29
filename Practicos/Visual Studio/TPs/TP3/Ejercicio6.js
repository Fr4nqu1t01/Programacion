const prompt = require(`prompt-sync`)();

for (let i = 1; i <= 500; i++) {
    if (i % 5 === 0) {
        console.log("-");
    } else if (i % 4 === 0 && i % 9 === 0) {
        console.log(`${i} (Multiplo de 4 y 9)`);
    } else {
        console.log(i);
    }
}