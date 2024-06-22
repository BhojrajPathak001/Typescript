"use strict";
//type casting
const userInputElement = document.getElementById("user-input"); /*here basically getElementByid return HtmlElement type and if if i make userInputElemnt as
HtmlInputelement type it will give error we want to typecast it before assing to userInputElement so
we will typeCast it using as keyword */
userInputElement.value = "Hi there";
