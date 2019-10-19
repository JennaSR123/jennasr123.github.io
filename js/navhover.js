function showNav() {
"use strict";
  var x = document.getElementById('nav');
    if (x.style.height === '238px') {
        x.style.height = '60px';
    } else {
        x.style.height = '238px';
    }
}