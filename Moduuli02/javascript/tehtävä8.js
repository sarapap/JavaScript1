'use strict';
function concat(str1, str2, str3, str4) {
  const str = str1.length + str2.length + str3.length + str4.length

  return str1.substring(str1.length - str) + str2.substring(str2.length - str) + str3.substring(str3.length - str) + str4.substring(str4.length - str);
}

document.querySelector('#result').innerHTML = (concat("Johnny", "Deedee", "Joey", "Marky"));



