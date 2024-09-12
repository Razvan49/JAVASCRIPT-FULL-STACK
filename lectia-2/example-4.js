const numberA = 120;
const numberB = 150;

const isLarger = numberA > 100 && numberB > 100;

if (isLarger) {
  console.log(Math.max(numberA, numberB));
} else {
  console.log(numberB + 512);
}
