#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
// Declare the progarm
const program = new commander_1.Command();
// Aadd actions onth that CLI
program
    .command("greet <string>")
    .argument("<string>", "string to greet")
    .option("-c, --capitalize", "capitalize string")
    .action((name, opts) => {
    const cap = opts.capitalize ? name.toUpperCase() : name;
    console.log(`Hello ${cap}`);
})
    .description("Prints a greeting");
program
    .command("add <numbers...>")
    .action((numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    console.log(`Sum: ${sum}`);
})
    .description("Adds numbers and logs the result");
program
    .command("get-max-number <numbers...>")
    .action((numbers) => {
    const max = Math.max(...numbers);
    console.log(`Max: ${max}`);
})
    .description("Gets the max number and logs the result");
// Excecute the CLI with the arguments
program.parse(process.argv);
