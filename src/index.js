module.exports =
function multiply(first, second) {
  first = first.split(``).reverse();
  second = second.split(``).reverse();
  if (first.length < second.length) {
    first = [second, second = first][0];
  }
  let output = [];
  output.length = second.length;
  output.fill(``);
  for (let i = 0; i < second.length; i++) {
    let extra = 0;
    for (let j = 0; j < first.length; j++) {
      output[i] += (first[j] * second[i] + extra) % 10;
      extra = Math.floor((first[j] * second[i] + extra) / 10);
    }
    if (extra) {
      output[i] += extra;
    }
  }

  for (let i = 1; i < output.length; i++) {
    for (let j = 0; j < i; j++) {
      output[i] = `0` + output[i];
    }
  }
  for (let i = 0; i < output.length; i++) {
    for (let j = output[i].length; j < output[output.length-1].length; j++) {
      output[i] = output[i] + `0`;
    }
  }
  let outputNumber = ``;
  let extra = 0;
  for (let i = 0; i < output[0].length; i++) {
    let temporaryNum = 0;
    for (let j = 0; j < output.length; j++){
      temporaryNum += parseInt(output[j][i]);
    }
    outputNumber += (temporaryNum + extra) % 10;
    extra = Math.floor((temporaryNum + extra) / 10);
  }

  if (extra) {
    outputNumber += extra;
  }

  return outputNumber.split(``).reverse().join(``);
}
