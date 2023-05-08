import chalk from "chalk";
import inquirer from "inquirer";
async function countDown() {
    let cond = true;
    while (cond) {
        let usertime = await inquirer.prompt([
            {
                name: 'hours',
                type: 'number',
                message: 'enter hours'
            },
            {
                name: 'minutes',
                type: 'number',
                message: 'enter minutes'
            },
            {
                name: 'seconds',
                type: 'number',
                message: 'enter seconds'
            },
        ]);
        let hours = usertime.hours;
        let minutes = usertime.minutes;
        let seconds = usertime.seconds;
        if (minutes > 59 || isNaN(minutes)) {
            console.log(chalk.red(`please enter minutes less than 60`));
        }
        else if (seconds > 59 || isNaN(seconds)) {
            console.log(chalk.red(`please enter seconds less than 60`));
        }
        else if (isNaN(hours)) {
            console.log(chalk.red(`please enter digit`));
        }
        else {
            cond = false;
            let setIn = setInterval(() => {
                if (hours < 1 && minutes < 1 && seconds < 1) {
                    clearInterval(setIn);
                }
                else if (seconds < 1) {
                    console.log(chalk.blue.bold(`${hours} : ${minutes -= 1} : ${seconds = 59}`));
                }
                else if (minutes < 1) {
                    if (hours < 1) {
                        console.log(chalk.blue.bold(`${hours} : ${minutes} : ${seconds -= 1}`));
                    }
                    else {
                        console.log(chalk.blue.bold(`${hours -= 1} : ${minutes = 59} : ${seconds -= 1}`));
                    }
                }
                else {
                    console.log(chalk.blue.bold(`${hours} : ${minutes} : ${seconds -= 1}`));
                }
            }, 1000);
        }
    }
}
console.log(countDown());
