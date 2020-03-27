function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    let person = line.shift();
    katzDeliLine = line.slice(1);
    return person;
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}
