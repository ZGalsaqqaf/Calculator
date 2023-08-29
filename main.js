var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

let mathOperations = ['+', '-', '*', '/', '.', '='];
let brackets = ['(', ')'];
let opWithBrackets = mathOperations.concat(brackets);

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == 'x') {
            btntext = '*';
        }
        // prevent equation start with an operation or brackets
        if (!(screen.value.length == 0 && mathOperations.concat(')').includes(btntext))) {
            // prevent enter tow operations one after another
            if (!(mathOperations.includes(screen.value[screen.value.length - 1]) && mathOperations.includes(btntext))) {
                if (!(brackets.includes(screen.value[screen.value.length - 1]) && brackets.includes(btntext))) {
                    screen.value += btntext;
                }
            }
        } else {
            // allow starting with .
            if (btntext === '.') {
                screen.value += btntext;
            }
        }
        // console.log(typeof btntext)
        // console.log(screen.value);
        // console.log(screen.value.length);
        // console.log(typeof screen.value);
        // console.log(screen.value[screen.value.length - 1]);
    });
}



function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = Math.PI;
}

function e() {
    screen.value = Math.E;
}

function fact() {
    var i, num, f;
    f = 1;
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f *= i;
    }
    i = i - 1;
    screen.value = f;
}

function percent() {
    screen.value /= 100;
}

function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function del() {
    screen.value = "";
}

document.getElementById("eval").onclick = function() {
    // prevent end with opetation or (
    if (!mathOperations.concat('(').includes(screen.value[screen.value.length - 1])) {
        screen.value = eval(screen.value)
    }
}

//