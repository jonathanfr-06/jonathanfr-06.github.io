const arrayPHP = [
  "count",
  "is_array",
  "substr",
  "in_array",
  "explode",
  "str_replace",
  "implode",
  "strlen",
  "array_merge",
  "strpos",
  "preg_match",
  "sptrinf",
  "trim",
  "strtolower",
  "file_exists",
  "is_string",
  "preg_replace",
  "file_get_contents",
  "array_key_exists",
  "array_keys",
];

const arrayJS = [
  "console.log",
  "console.error",
  "Math.random",
  "Math.floor",
  "let",
  "const",
  "var",
  "return",
  "myFunction",
  "myClass",
  "indexOf",
  "endsWith",
  "startsWith",
  "toString",
  "join",
  "pop",
  "push",
];

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function randomStrToDom() {
  document.querySelector(".bubbles").innerHTML =
    '<span style="--i:23;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:21;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:12;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:14;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:15;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:9;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:11;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:23;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:21;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:12;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:14;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:15;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:9;">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:14;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:19;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:10;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:16;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:13;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:17;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:15;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:20;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:10;">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:18;">' +
    arrayPHP.random() +
    "</span>";
  document.querySelector(".bubbles2").innerHTML =
    '<span style="--i:23;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:12;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:16;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:15;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:19;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:14;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:13;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:11;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:9;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:30;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:10;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:17;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:20;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:21;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:13;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:15;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:18;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:15;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:12;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:10;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:14;">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:19;">' +
    arrayJS.random() +
    "</span>";
}
randomStrToDom();

console.log(arrayPHP.random());
