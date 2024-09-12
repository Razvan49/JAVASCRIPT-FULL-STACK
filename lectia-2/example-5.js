let link = "https://my-site.com/about";

const lastCharacter = link.charAt(link.length - 1);

if (lastCharacter !== "/") {
  link += "/";
}
console.log(link);
