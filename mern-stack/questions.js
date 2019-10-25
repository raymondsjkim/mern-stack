// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");

const questions = [
    "What is your name?",
    "Do u like stuff?",
    "Do you like food?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

const answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, stuff, food] = answers;
    console.log(`
        Thank you for your answers.
        Go ${stuff} ${name} you can write ${food} code later!!
    `);
});