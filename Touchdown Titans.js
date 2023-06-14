// NFL battle simulator
// The user gets a random team. A QB, RB, WR, DL, LB, & CB
// A function returns what the user's team is.
// The CPU also gets a random team.
// A function returns what the CPU's team is.
// A game is simulated where the overalls are compared.

// Create teams
let userTeam = [];
let cpuTeam = [];

// Create scores
let userScore = 0;
let cpuScore = 0;

// Create quarterbacks
let quarterbacks = ['Patrick Mahomes', 'Joe Burrow', 'Josh Allen', 'Lamar Jackson',
'Justin Herbert', 'Dak Prescott', 'Jalen Hurts', 'Aaron Rodgers', 'Kirk Cousins', 
'Tua Tagovailoa'];

let quarterbacksOverall = {
    'Patrick Mahomes': 98,
    'Joe Burrow': 95,
    'Josh Allen': 93,
    'Lamar Jackson': 91,
    'Justin Herbert': 88,
    'Dak Prescott': 87,
    'Jalen Hurts': 87,
    'Aaron Rodgers': 86,
    'Kirk Cousins': 84,
    'Tua Tagovailoa': 83,
};

// Create running backs
let runningBacks = ['Nick Chubb', 'Christian McCaffrey', 'Josh Jacobs',
'Derrick Henry', 'Saquon Barkley', 'Dalvin Cook', 'Aaron Jones', 
'Jonathan Taylor', 'Joe Mixon', 'Austin Ekeler'];

let runningBacksOverall = {
    'Nick Chubb': 97,
    'Christian McCaffrey': 96,
    'Josh Jacobs': 95,
    'Derrick Henry': 94,
    'Saquon Barkley': 93,
    'Dalvin Cook': 92,
    'Aaron Jones': 90,
    'Jonathan Taylor': 90,
    'Joe Mixon': 89,
    'Austin Ekeler': 88
};


// Create wide receivers
let wideReceivers = ['Davante Adams', 'Tyreek Hill', 'Cooper Kupp', 
'Stefon Diggs', 'Justin Jefferson', 'Deandre Hopkins', 'Terry McLaurin', 
"Ja'Marr Chase", 'A.J. Brown', 'Tyler Lockett'];

let wideReceiversOverall = {
    'Davante Adams': 98,
    'Tyreek Hill': 98,
    'Cooper Kupp': 97,
    'Stefon Diggs': 97,
    'Justin Jefferson': 96,
    'Deandre Hopkins': 95,
    'Terry McLaurin': 93,
    "Ja'Marr Chase": 92,
    'A.J. Brown': 91,
    'Tyler Lockett': 91
};


// Create defensive linemen
let defensiveLinemen = ['Aaron Donald', 'Myles Garrett', 'Nick Bosa', 
'Chris Jones', 'Dexter Lawrence II', 'Von Miller', 'Cameron Heyward', 
'Quinnen Williams', 'Jonathan Allen', 'Demarcus Lawrence'];

let defensiveLinemenOverall = {
    'Aaron Donald': 99,
    'Myles Garrett': 99,
    'Nick Bosa': 97,
    'Chris Jones': 96,
    'Dexter Lawrence II': 94,
    'Von Miller': 94,
    'Cameron Heyward': 93,
    'Quinnen Williams': 93,
    'Jonathan Allen': 92,
    'Demarcus Lawrence': 90
};

// Create linebackers
let linebackers = ['Fred Warner', 'Micah Parsons', 'Maxx Crosby', 'T.J. Watt', 
'Joey Bosa', 'Lavonte David', 'Roquan Smith', 'Demario Davis', 'Haason Reddick', 
'Bobby Wagner'];

let linebackersOverall = {
    'Fred Warner': 96,
    'Micah Parsons': 96,
    'Maxx Crosby': 94,
    'T.J. Watt': 94,
    'Joey Bosa': 91,
    'Lavonte David': 91,
    'Roquan Smith': 91,
    'Demario Davis': 90,
    'Haason Reddick': 90,
    'Bobby Wagner': 89
};

// Create cornerbacks
let cornerbacks = ['Jalen Ramsey', 'Jaire Alexander', 'Darius Slay Jr', 
'Marlon Humphrey', "Tre'Davious White", 'Marshon Lattimore', 
'Patrick Surtain II', 'Stephon Gilmore', 'Denzel Ward', 'Sauce Gardner'];

let cornerbacksOverall = {
    'Jalen Ramsey': 97,
    'Jaire Alexander': 95,
    'Darius Slay Jr': 93,
    'Marlon Humphrey': 93,
    "Tre'Davious White": 92,
    'Marshon Lattimore': 91,
    'Patrick Surtain II': 91,
    'Stephon Gilmore': 90,
    'Denzel Ward': 89,
    'Sauce Gardner': 89
};

// Creates user team
let userQB = quarterbacks[Math.floor(Math.random() * 10)];
let userRB = runningBacks[Math.floor(Math.random() * 10)];
let userWR = wideReceivers[Math.floor(Math.random() * 10)];
let userDL = defensiveLinemen[Math.floor(Math.random() * 10)];
let userLB = linebackers[Math.floor(Math.random() * 10)];
let userCB = cornerbacks[Math.floor(Math.random() * 10)];

// Creates cpu team
let cpuQB = quarterbacks[Math.floor(Math.random() * 10)];
let cpuRB = runningBacks[Math.floor(Math.random() * 10)];
let cpuWR = wideReceivers[Math.floor(Math.random() * 10)];
let cpuDL = defensiveLinemen[Math.floor(Math.random() * 10)];
let cpuLB = linebackers[Math.floor(Math.random() * 10)];
let cpuCB = cornerbacks[Math.floor(Math.random() * 10)];

// Adds overalls of players to user team
userTeam.push(quarterbacksOverall[userQB]);
userTeam.push(runningBacksOverall[userRB]);
userTeam.push(wideReceiversOverall[userWR]);
userTeam.push(defensiveLinemenOverall[userDL]);
userTeam.push(linebackersOverall[userLB]);
userTeam.push(cornerbacksOverall[userCB]);

// Adds overalls of player to CPU team
cpuTeam.push(quarterbacksOverall[cpuQB]);
cpuTeam.push(runningBacksOverall[cpuRB]);
cpuTeam.push(wideReceiversOverall[cpuWR]);
cpuTeam.push(defensiveLinemenOverall[cpuDL]);
cpuTeam.push(linebackersOverall[cpuLB]);
cpuTeam.push(cornerbacksOverall[cpuCB]);

// Total overall of user team
let userOverall = (userTeam[0] + userTeam[1] + userTeam[2] + userTeam[3] + userTeam[4]) + userTeam[5];

// Total overall of cpu team
let cpuOverall = (cpuTeam[0] + cpuTeam[1] + cpuTeam[2] + cpuTeam[3] + cpuTeam[4]) + userTeam[5];

// PAT simulator (1 in 20 chance team misses a PAT and scores 6 instead of 7)
const extraPoint = () => {
    let num = Math.floor(Math.random() * 11);
    if (num === 0) {
        return 6;
    } else {
        return 7;
    }
}

// FG simulator
// 1 in 20 chance team misses a 30 - 39 yard field goal
// 1 in 10 chance team misses a 40 - 49 yard field goal
// 1 in 5 chance team misses a 50+ yard field goal
const fieldGoal = () => {
    let fieldGoalYardage = (Math.floor(Math.random() * 56) + 30);

    if (fieldGoalYardage >= 30 && fieldGoalYardage <= 39) {
        num = (Math.floor(Math.random() * 20));
        if (num === 0) {
            return 0;
        } else {
            return 3;
        }
    }

    if (fieldGoalYardage >= 40 && fieldGoalYardage <= 49) {
        num = (Math.floor(Math.random() * 10));
        if (num === 0) {
            return 0;
        } else {
            return 3;
        }
    }

    if (fieldGoalYardage >= 50) {
        num = (Math.floor(Math.random() * 5));
        if (num === 0) {
            return 0;
        } else {
            return 3;
        }
    }
}

// Randomizes how the other team gets the ball if user doesn't score
const userDidntScore = () => {
    let num = (Math.floor(Math.random() * 25));
    if (num === 0) {
        return `${userQB} is intercepted by ${cpuCB}!`;
    } else if (num === 1) {
        return `${userQB} is intercepted by ${cpuLB}!`;
    } else if (num === 2) {
        return `${cpuDL} strips the ball away from ${userQB} and recovers it!`
    } else if (num === 3) {
        return `${cpuDL} strips the ball away from ${userRB} and recovers it!`
    } else if (num === 4) {
        return `${cpuCB} strips the ball away from ${userWR} and recovers it!`
    } else if (num === 5) {
        return `${cpuLB} strips the ball away from ${userRB} and recovers it!`
    } else if (num === 6) {
        return `${cpuLB} strips the ball away from ${userQB} and recovers it!`
    } else {
        return 'Your team punted.'
    }
}

// Randomizes how user team gets the ball if CPU doesn't score
const cpuDidntScore = () => {
    let num = (Math.floor(Math.random() * 25));
    if (num === 0) {
        return `${cpuQB} is intercepted by ${userCB}!`;
    } else if (num === 1) {
        return `${cpuQB} is intercepted by ${userLB}!`;
    } else if (num === 2) {
        return `${userDL} strips the ball away from ${cpuQB} and recovers it!`
    } else if (num === 3) {
        return `${userDL} strips the ball away from ${cpuRB} and recovers it!`
    } else if (num === 4) {
        return `${userCB} strips the ball away from ${cpuWR} and recovers it!`
    } else if (num === 5) {
        return `${userLB} strips the ball away from ${cpuRB} and recovers it!`
    } else if (num === 6) {
        return `${userLB} strips the ball away from ${cpuQB} and recovers it!`
    } else {
        return 'CPU team has punted.'
    }
}

// User has ball
const userBall = () => {
    console.log("Your team has possession.")
}

// CPU has ball
const cpuBall = () => {
    console.log("CPU's team has possession.")
}

// Starts game
const startGame = () => {
    // Outputs user and CPU's team
    console.log("Meet your team!");
    console.log(`QB: ${userQB}`);
    console.log(`RB: ${userRB}`);
    console.log(`WR: ${userWR}`);
    console.log(`DL: ${userDL}`);
    console.log(`LB: ${userLB}`);
    console.log(`CB: ${userCB}`);

    console.log("\nMeet your opponent's team!");
    console.log(`QB: ${cpuQB}`);
    console.log(`RB: ${cpuRB}`);
    console.log(`WR: ${cpuWR}`);
    console.log(`DL: ${cpuDL}`);
    console.log(`LB: ${cpuLB}`);
    console.log(`CB: ${cpuCB}\n`);

    // Drive 1: User QB vs CPU DL
    userBall();

    // If user QB > cpu DL, then user scores touchdown
    if (userTeam[0] > cpuTeam[3]) {
        console.log(`${userQB} ran ` + (Math.floor(Math.random() * 15) + 1) + ` yards for a touchdown!`)
        if (extraPoint() === 6) {
            userScore += 6;
            console.log('The kicker misses the PAT!');
        } else {
            userScore += 7;
            console.log('The kicker makes the PAT!');
        };
        console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
    // If user QB = cpu DL, then user kicks a field goal
    } else if (userTeam[0] === cpuTeam[3]) {
        let fieldGoalResult = fieldGoal();
        if (fieldGoalResult = 3) {
            userScore += 3;
            console.log("Your kicker nailed a field goal!")
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        } else {
            console.log("Your kicker missed a field goal!")
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        };
    // If user QB < cpu DL, then user doesn't score
    } else {
        console.log(userDidntScore());
    };

    // Drive 2: CPU QB vs User DL
    cpuBall()

    // If cpu QB > user DL, then cpu scores touchdown
    if (cpuTeam[0] > userTeam[3]) {
        console.log(`${cpuQB} ran ` + (Math.floor(Math.random() * 15) + 1) + ` yards for a touchdown!`)
        if (extraPoint() === 6) {
            cpuScore += 6;
            console.log('The kicker of the CPU team misses the PAT!');
        } else {
            cpuScore += 7;
            console.log('The kicker of the CPU team makes the PAT!');
        };
        console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
    // If cpu QB = user DL, then cpu kicks a field goal
    } else if (cpuTeam[0] === userTeam[3]) {
        let fieldGoalResult = fieldGoal();
        if (fieldGoalResult = 3) {
            cpuScore += 3;
            console.log('The kicker of the CPU team nailed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        } else {
            console.log('The kicker of the CPU team missed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        };
    // If cpu QB < user DL, then cpu doesn't score
    } else {
        console.log(cpuDidntScore());
    };

    // Drive 3: User RB vs CPU LB
    userBall()

    // If user RB > cpu LB, then user scores a touchdown
    if (userTeam[1] > cpuTeam[4]) {
        console.log(`${userRB} ran ` + (Math.floor(Math.random() * 40) + 1) + ` yards for a touchdown!`)
        if (extraPoint() === 6) {
            userScore += 6;
            console.log('The kicker misses the PAT!');
        } else {
            userScore += 7;
            console.log('The kicker makes the PAT!');
        };
        console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
    // If user RB = cpu LB, then user kicks a field goal
    } else if (userTeam[1] === cpuTeam[4]) {
        let fieldGoalResult = fieldGoal();
        if (fieldGoalResult = 3) {
            userScore += 3;
            console.log('Your kicker nailed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        } else {
            console.log('Your kicker missed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        };
    // If user RB < cpu LB, then user doesn't score
    } else {
        console.log(userDidntScore());
    };

    // Drive 4: CPU RB vs User LB
    cpuBall()

    // If cpu RB > user LB, then cpu scores a touchdown
    if (cpuTeam[1] > userTeam[4]) {
        console.log(`${cpuRB} ran ` + (Math.floor(Math.random() * 40) + 1) + ` yards for a touchdown!`)
        if (extraPoint() === 6) {
            cpuScore += 6;
            console.log('The kicker misses the PAT!');
        } else {
            cpuScore += 7;
            console.log('The kicker makes the PAT!');
        };
        console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
    // If cpu RB = user LB, then cpu kicks a field goal
    } else if (cpuTeam[1] === userTeam[4]) {
        let fieldGoalResult = fieldGoal();
        if (fieldGoalResult = 3) {
            cpuScore += 3;
            console.log('The kicker of the CPU team nailed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        } else {
            console.log('The kicker of the CPU team missed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        };
    // If cpu RB < user LB, then cpu doesn't score
    } else {
        console.log(cpuDidntScore());
    };

    // Drive 5: User WR vs CPU CB
    userBall()

    // If user WR > cpu CB, then user scores a touchdown
    if (userTeam[2] > cpuTeam[5]) {
        console.log(`${userQB} throws a ` + (Math.floor(Math.random() * 40) + 1) + ` yard touchdown to ${userWR}!`)
        if (extraPoint() === 6) {
            userScore += 6;
            console.log('The kicker misses the PAT!');
        } else {
            userScore += 7;
            console.log('The kicker makes the PAT!');
        };
        console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
    // If user WR = cpu CB, then user kicks a field goal
    } else if (userTeam[2] === cpuTeam[5]) {
        let fieldGoalResult = fieldGoal();
        if (fieldGoalResult = 3) {
            userScore += 3;
            console.log('Your kicker nailed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        } else {
            console.log('Your kicker missed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        };
    // If user WR < cpu CB, then user doesn't score
    } else {
        console.log(userDidntScore());
    };

    // Drive 6: CPU WR vs User CB
    cpuBall()

    // If cpu WR > user CB, then cpu scores a touchdown
    if (cpuTeam[2] > userTeam[5]) {
        console.log(`${cpuQB} throws a ` + (Math.floor(Math.random() * 40) + 1) + ` yard touchdown to ${cpuWR}!`)
        if (extraPoint() === 6) {
            cpuScore += 6;
            console.log('The kicker misses the PAT!');
        } else {
            cpuScore += 7;
            console.log('The kicker makes the PAT!');
        };
        console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
    // If cpu WR = user CB, then cpu kicks a field goal
    } else if (cpuTeam[2] === userTeam[5]) {
        let fieldGoalResult = fieldGoal();
        if (fieldGoalResult = 3) {
            cpuScore += 3;
            console.log('The kicker of the CPU team nailed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        } else {
            console.log('The kicker of the CPU team missed a field goal!')
            console.log(`\nScore ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
        };
    // If cpu WR < user CB, then cpu doesn't score
    } else {
        console.log(cpuDidntScore());
    };

    // Optional Overtime
    if (userScore === cpuScore) {
        let coinToss = Math.floor(Math.random() * 2)
        // If coin toss equals heads (0), then user gets ball first
        if (coinToss === 0) {
            console.log("You've won the coin toss and will get the ball first!")
            while (userScore === cpuScore) {
                userBall()
                let random_number = Math.floor(Math.random() * 3)
                // If user gets 0, user scores a touchdown
                if (random_number === 0) {
                    let outcome = Math.floor(Math.random() * 3)
                    if (outcome === 0) {
                        console.log(`${userQB} ran ` + (Math.floor(Math.random() * 15) + 1) + ` yards for a touchdown!`)
                        userScore += 6
                    } else if (outcome === 1) {
                        console.log(`${userRB} ran ` + (Math.floor(Math.random() * 40) + 1) + ` yards for a touchdown!`)
                        userScore += 6
                    } else {
                        console.log(`${userQB} throws a ` + (Math.floor(Math.random() * 40) + 1) + ` yard touchdown to ${userWR}!`)
                        userScore += 6
                    }
                // If user gets 1, kick a field goal
                } else if (random_number === 1) {
                    let fieldGoalResult = fieldGoal()
                    if (fieldGoalResult === 3) {
                        userScore += 3
                        console.log('Your kicker nailed a field goal!')
                    } else {
                        userScore += 0
                        console.log('Your kicker missed a field goal!')
                    }
                // If user gets 2, cpu gets possession
                } else {
                    console.log(userDidntScore())
                }

                // CPU has ball
                if (userScore === cpuScore || userScore - cpuScore === 3) {
                    cpuBall()
                    random_number = Math.floor(Math.random() * 3)
                    // If cpu gets 0, cpu scores a touchdown
                    if (random_number === 0) {
                        let outcome = Math.floor(Math.random() * 3)
                        if (outcome === 0) {
                            console.log(`${cpuQB} ran ` + (Math.floor(Math.random() * 15) + 1) + ` yards for a touchdown!`)
                            cpuScore += 6
                        } else if (outcome === 1) {
                            console.log(`${cpuRB} ran ` + (Math.floor(Math.random() * 40) + 1) + ` yards for a touchdown!`)
                            cpuScore += 6
                        } else {
                            console.log(`${cpuQB} throws a ` + (Math.floor(Math.random() * 40) + 1) + ` yard touchdown to ${cpuWR}!`)
                            cpuScore += 6
                        }
                    // If cpu gets 1, kick a field goal
                    } else if (random_number === 1) {
                        let fieldGoalResult = fieldGoal()
                        if (fieldGoalResult === 3) {
                            cpuScore += 3
                            console.log('The kicker of the CPU team nailed a field goal!')
                        } else {
                            cpuScore += 0
                            console.log('The kicker of the CPU team missed a field goal!')
                        }
                // If cpu gets 2, user gets possession
                    } else {
                        console.log(cpuDidntScore())
                    }
                }
            }
        // If coin toss equals tails (1), then cpu gets ball first
        } else if (coinToss === 1) {
            console.log("The CPU won the coin toss and will get the ball first!")
            while (userScore === cpuScore) {
                cpuBall()
                let random_number = Math.floor(Math.random() * 3)
                // If cpu gets 0, cpu scores a touchdown
                if (random_number === 0) {
                    let outcome = Math.floor(Math.random() * 3)
                    if (outcome === 0) {
                        console.log(`${cpuQB} ran ` + (Math.floor(Math.random() * 15) + 1) + ` yards for a touchdown!`)
                        cpuScore += 6
                    } else if (outcome === 1) {
                        console.log(`${cpuRB} ran ` + (Math.floor(Math.random() * 40) + 1) + ` yards for a touchdown!`)
                        cpuScore += 6
                    } else {
                        console.log(`${cpuQB} throws a ` + (Math.floor(Math.random() * 40) + 1) + ` yard touchdown to ${cpuWR}!`)
                        cpuScore += 6
                    }
                // If cpu gets 1, cpu kicks a field goal
                } else if (random_number === 1) {
                    let fieldGoalResult = fieldGoal()
                    if (fieldGoalResult === 3) {
                        cpuScore += 3
                        console.log('The kicker of the CPU team nailed a field goal!')
                    } else {
                        cpuScore += 0
                        console.log('The kicker of the CPU team missed a field goal!')
                    }
                // If cpu gets 2, user gets possession
                } else {
                    console.log(cpuDidntScore())
                }

                // User has ball
                if (userScore === cpuScore || userScore - cpuScore === 3) {
                    userBall()
                    random_number = Math.floor(Math.random() * 3)
                    // If user gets 0, cpu scores a touchdown
                    if (random_number === 0) {
                        let outcome = Math.floor(Math.random() * 3)
                        if (outcome === 0) {
                            console.log(`${userQB} ran ` + (Math.floor(Math.random() * 15) + 1) + ` yards for a touchdown!`)
                            userScore += 6
                        } else if (outcome === 1) {
                            console.log(`${userRB} ran ` + (Math.floor(Math.random() * 40) + 1) + ` yards for a touchdown!`)
                            userScore += 6
                        } else {
                            console.log(`${userQB} throws a ` + (Math.floor(Math.random() * 40) + 1) + ` yard touchdown to ${userWR}!`)
                            userScore += 6
                        }
                    // If user gets 1, kick a field goal
                    } else if (random_number === 1) {
                        let fieldGoalResult = fieldGoal()
                        if (fieldGoalResult === 3) {
                            userScore += 3
                            console.log('Your kicker nailed a field goal!')
                        } else {
                            userScore += 0
                            console.log('Your kicker missed a field goal!')
                        }
                // If user gets 2, cpu gets possession
                    } else {
                        console.log(userDidntScore())
                    }
                }
            }
        }
    }

    if (userScore > cpuScore) {
        console.log('Congratulations! You won the game!')
        console.log(`\nFinal Score ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
    }

    if (userScore < cpuScore) {
        console.log('You lost the game. Better luck next time.')
        console.log(`\nFinal Score ~~~~~~~~~~~~~~~~~\nUser: ${userScore}\nCPU: ${cpuScore}\n`);
    }

    if (userScore === cpuScore) {
        console.log('Error with program')
    }

}

startGame();
