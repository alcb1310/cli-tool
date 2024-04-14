#! /usr/bin/env node

import {Command} from "commander";

// Declare the progarm
const program = new Command();

// Aadd actions onth that CLI
program
    .command("greet <string>")
    .argument("<string>", "string to greet")
    .option("-c, --capitalize", "capitalize string")
    .action((name: string, opts: {capitalize: boolean}) => {
        const cap = opts.capitalize ? name.toUpperCase() : name;
        console.log(`Hello ${cap}`);
    })
    .description("Prints a greeting");

program
    .command("add <numbers...>")
    .action((numbers: number[]) => {
        const sum = numbers.reduce((acc, number) => acc + number, 0);
        console.log(`Sum: ${sum}`);
    })
    .description("Adds numbers and logs the result");

program
    .command("get-max-number <numbers...>")
    .action((numbers: number[]) => {
        const max = Math.max(...numbers);
        console.log(`Max: ${max}`);
    })
    .description("Gets the max number and logs the result");

// Excecute the CLI with the arguments
program.parse(process.argv);
