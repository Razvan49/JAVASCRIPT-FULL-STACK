const hours = 14;
const minutes = 35;
let timestring;
if (minutes > 0) {
  timestring = `${hours} ore ${minutes} minute`;
} else {
  timestring = `${hours} fix`;
}
console.log(timestring);
