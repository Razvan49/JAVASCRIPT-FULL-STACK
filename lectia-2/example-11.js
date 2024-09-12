const loginAnswer = prompt("Care este username-ul?");

if (loginAnswer === "Admin") {
  const passwordAnswer = prompt("Care e parola?");
  if (passwordAnswer === "sunt admin") {
    console.log("Hello");
  } else {
    console.log("Parola este gresita");
  }
} else if (loginAnswer && loginAnswer.length > 0) {
  console.log("I don't know you!");
} else {
  console.log("Cancelled");
}
