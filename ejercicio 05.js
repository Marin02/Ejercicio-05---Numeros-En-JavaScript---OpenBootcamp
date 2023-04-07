// Ejercicio 05

let altura = 1.72;
let peso = 49.86;

let altura_centimetros = parseInt(172);

let altura_metros = parseFloat(1.72);

let peso_kilogramos = parseFloat(49.86);

let altura_redondeada_arriba = altura.toPrecision(2);

let peso_redondeado_abajo = peso.toFixed(1);

let maximo_valor_mas_uno = Number.MAX_VALUE + 1;

if (maximo_valor_mas_uno === Number.MAX_VALUE) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}

