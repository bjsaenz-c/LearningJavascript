"use strict";

function llenarMatriz(A, m, n) {
    var m = parseInt(m_doc.value);
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            A[i][j] =
        }
    }
}

function matrixMult() {
    // Captura los elementos del DOM
    var m_doc = document.getElementById("filas_1");
    var n_doc = document.getElementById("columnas_1");
    var p_doc = document.getElementById("filas_2");
    var q_doc = document.getElementById("columnas_2");
    // Convierte al formato adecuado
    var m = parseInt(m_doc.value);
    var n = parseInt(n_doc.value);
    var p = parseInt(p_doc.value);
    var q = parseInt(q_doc.value);
    // Muestra en consola los valores capturados
    console.log("Filas matriz 1 = " + m_doc.value);
    console.log("Columnas matriz 1 = " + n_doc.value);
    console.log("Filas matriz 2 = " + p_doc.value);
    console.log("Columnas matriz 2 = " + q_doc.value);
    // Verifica compatibilidad de dimensiones
    if (n != q) {
        alert("Las dimensiones NO son compatibles");
        return 0;
    }
    // Si las dimensiones son compatibles, permite
    // el ingreso de las dos matrices


    var matrizA = new Array(m);
    for (var i = 0; i < matrizA.length; i++) {
        matrizA[i] = new Array(n);
    }
    var matrizB = new Array(p);
    for (var i = 0; i < matrizB.length; i++) {
        matrizB[i] = new Array(q);
    }
    var matrizC = new Array(m);
    for (var i = 0; i < matrizC.length; i++) {
        matrizB[i] = new Array(q);
    }
}