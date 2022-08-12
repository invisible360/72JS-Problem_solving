
let row = 10;
let pattern = '';
for (let i = 1; i <= row; i++) {
    for (let j = 0; j < i; j++ ) {
        pattern += '*';
    }
    pattern += '\n';
}
// console.log(pattern);

for (let i = row; i >= 1; i--) {
    for (let j = 0; j < i; j++ ) {
        pattern += '*';
    }
    pattern += '\n';
}
console.log(pattern);
