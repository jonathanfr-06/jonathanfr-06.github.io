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
const myArr = Array(20).join().split(',').map(function(a){return this.i++},{i:1});console.log(myArr);
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};



function randomStrToDom() {
  document.querySelector(".bubbles").innerHTML =
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>"+ 
    '<span style="--i:'+ myArr.random()+';">' +
    arrayPHP.random() +
    "</span>";
  document.querySelector(".bubbles2").innerHTML =
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>" +
    '<span style="--i:'+ myArr.random()+';">' +
    arrayJS.random() +
    "</span>";
}
randomStrToDom();

console.log(arrayPHP.random());
