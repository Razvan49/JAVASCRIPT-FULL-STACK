const daysUntilDeadline = 2;

switch (daysUntilDeadline) {
  case 0:
    console.log("Today");
    break;
  case 1:
    console.log("Tomorrow");
    break;
  case 2:
    console.log("The day after tomorrow");
    break;
  default:
    console.log("Date in the future");
}
