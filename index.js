// Write your code here!
const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "<h1>Peter is the champion!</h1>";

document.body.append(newHeader);