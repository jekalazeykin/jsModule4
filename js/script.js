function addKeyboardLayout(alphabet) {
  alphabet = alphabet.split("");
  return keyboard = [alphabet.slice(0, 12), alphabet.slice(12, 23), alphabet.slice(23, 33)];
}

var keyboard = addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm,./");
console.log(keyboard)

function getRandCharInRow(row) {
  row = prompt('Введите номер строки клавиатуры в формате 0-2:');
  var enter = keyboard[row];
  var str = enter.join("");
  var resultRow = "";
  for (var i = 0; i < 1; i++)
    resultRow += str.charAt(Math.floor(Math.random() * str.length));

  return resultRow;
}

console.log(getRandCharInRow());

function getRandCharInAlph() {
  var str = keyboard.join("");
  var resultAlph = "";
  for (var i = 0; i < 1; i++)
    resultAlph += str.charAt(Math.floor(Math.random() * str.length));

  return resultAlph;
}
console.log(getRandCharInAlph());
