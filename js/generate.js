const slider = document.getElementById('range')
const output = document.getElementById('valueNew')

output.innerHTML = slider.value;

slider.oninput = function () {

    output.innerHTML = this.value;

}

const character = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~"'


function generatePass(le) {

}
