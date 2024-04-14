#! /usr/bin/env node

import {Command} from "commander";

// Declare the progarm
const program = new Command();

// Aadd actions onth that CLI
program.action(() => {
    console.log("Hello World");
}).description("Prints Hello World");

// Excecute the CLI with the arguments
program.parse(process.argv);
