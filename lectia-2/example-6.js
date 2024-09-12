let link = "https://my-site.com/about";

const lastCharacter = link.charAt(link.length - 1);

// if (lastCharacter !== "/" && link.includes("my-site")) {
//   link += "/";
// }
// console.log(link);

const isLastCharSlash = lastCharacter !== "/" && link.includes("my-site");
link += isLastCharSlash ? "/" : "";
console.log(link);
