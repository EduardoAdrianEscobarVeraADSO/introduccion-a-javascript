// Contenido del archivo ejercicio43.js
// 43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe
// permitir la presencia de comillas y caracteres escapados.

let regex = /"(?:[^"\\]|\\.)*"/g;
