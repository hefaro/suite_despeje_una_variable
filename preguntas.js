/**
 * BANCO DE PREGUNTAS: SUITE DE DESPEJE DE ECUACIONES
 * Total: 120 preguntas (40 por nivel)
 * Temas: Ecuaciones lineales, fraccionarias, potencias, raíces y fórmulas.
 */

const cuestionarios = {
    basico: [
        // Sumas y Restas (20 preguntas)
        { question: "x + 7 = 15", options: ["x = 8", "x = 22", "x = -8", "x = 10"], answer: "x = 8" },
        { question: "x - 5 = 10", options: ["x = 15", "x = 5", "x = -15", "x = 50"], answer: "x = 15" },
        { question: "12 + x = 20", options: ["x = 8", "x = 32", "x = -8", "x = 1.6"], answer: "x = 8" },
        { question: "x - 9 = -3", options: ["x = 6", "x = -12", "x = 12", "x = -6"], answer: "x = 6" },
        { question: "x + 10 = 5", options: ["x = -5", "x = 15", "x = 5", "x = -15"], answer: "x = -5" },
        { question: "x - 100 = 250", options: ["x = 350", "x = 150", "x = 2.5", "x = -150"], answer: "x = 350" },
        { question: "8 = x - 2", options: ["x = 10", "x = 6", "x = -6", "x = 16"], answer: "x = 10" },
        { question: "15 = x + 5", options: ["x = 10", "x = 20", "x = -10", "x = 3"], answer: "x = 10" },
        { question: "x + 0.5 = 1.5", options: ["x = 1", "x = 2", "x = 0.5", "x = 1.1"], answer: "x = 1" },
        { question: "x - 1/2 = 1/2", options: ["x = 1", "x = 0", "x = 1/4", "x = -1"], answer: "x = 1" },
        { question: "x + 14 = 14", options: ["x = 0", "x = 28", "x = 1", "x = -28"], answer: "x = 0" },
        { question: "x - 7 = -7", options: ["x = 0", "x = -14", "x = 14", "x = 1"], answer: "x = 0" },
        { question: "20 + x = 10", options: ["x = -10", "x = 30", "x = 10", "x = 2"], answer: "x = -10" },
        { question: "x - 45 = 45", options: ["x = 90", "x = 0", "x = 1", "x = -90"], answer: "x = 90" },
        { question: "x + 3.2 = 5.2", options: ["x = 2", "x = 8.4", "x = 2.2", "x = 1.5"], answer: "x = 2" },
        { question: "x - 12 = -20", options: ["x = -8", "x = -32", "x = 8", "x = 32"], answer: "x = -8" },
        { question: "10 + x = -5", options: ["x = -15", "x = 5", "x = -5", "x = 15"], answer: "x = -15" },
        { question: "x - 30 = 0", options: ["x = 30", "x = -30", "x = 0", "x = 1"], answer: "x = 30" },
        { question: "x + 25 = 100", options: ["x = 75", "x = 125", "x = 50", "x = 4"], answer: "x = 75" },
        { question: "x - 1 = 99", options: ["x = 100", "x = 98", "x = -100", "x = 1"], answer: "x = 100" },

        // Multiplicación y División (20 preguntas)
        { question: "2x = 10", options: ["x = 5", "x = 12", "x = 8", "x = 20"], answer: "x = 5" },
        { question: "3x = 21", options: ["x = 7", "x = 18", "x = 24", "x = 63"], answer: "x = 7" },
        { question: "5x = 50", options: ["x = 10", "x = 45", "x = 55", "x = 250"], answer: "x = 10" },
        { question: "x / 2 = 8", options: ["x = 16", "x = 4", "x = 10", "x = 6"], answer: "x = 16" },
        { question: "x / 3 = 9", options: ["x = 27", "x = 12", "x = 6", "x = 3"], answer: "x = 27" },
        { question: "4x = 20", options: ["x = 5", "x = 16", "x = 24", "x = 80"], answer: "x = 5" },
        { question: "x / 5 = 5", options: ["x = 25", "x = 1", "x = 10", "x = 0"], answer: "x = 25" },
        { question: "10x = 100", options: ["x = 10", "x = 90", "x = 110", "x = 1"], answer: "x = 10" },
        { question: "-2x = 10", options: ["x = -5", "x = 5", "x = -12", "x = 8"], answer: "x = -5" },
        { question: "-3x = -12", options: ["x = 4", "x = -4", "x = 9", "x = -9"], answer: "x = 4" },
        { question: "x / 10 = 7", options: ["x = 70", "x = 17", "x = 3", "x = 0.7"], answer: "x = 70" },
        { question: "8x = 64", options: ["x = 8", "x = 56", "x = 72", "x = 1"], answer: "x = 8" },
        { question: "x / 4 = 1.5", options: ["x = 6", "x = 5.5", "x = 2.5", "x = 4.5"], answer: "x = 6" },
        { question: "6x = 42", options: ["x = 7", "x = 36", "x = 48", "x = 6"], answer: "x = 7" },
        { question: "x / 2 = -10", options: ["x = -20", "x = 20", "x = -5", "x = 5"], answer: "x = -20" },
        { question: "11x = 121", options: ["x = 11", "x = 110", "x = 132", "x = 1"], answer: "x = 11" },
        { question: "x / 8 = 4", options: ["x = 32", "x = 12", "x = 4", "x = 2"], answer: "x = 32" },
        { question: "9x = 0", options: ["x = 0", "x = 9", "x = -9", "x = 1"], answer: "x = 0" },
        { question: "7x = 49", options: ["x = 7", "x = 42", "x = 56", "x = 1"], answer: "x = 7" },
        { question: "x / 6 = 2", options: ["x = 12", "x = 8", "x = 4", "x = 3"], answer: "x = 12" }
    ],

    avanzado: [
        // Ecuaciones de dos pasos (ax + b = c)
        { question: "2x + 4 = 12", options: ["x = 4", "x = 8", "x = 6", "x = 2"], answer: "x = 4" },
        { question: "3x - 5 = 10", options: ["x = 5", "x = 15", "x = 3", "x = 4"], answer: "x = 5" },
        { question: "5x + 10 = 30", options: ["x = 4", "x = 8", "x = 5", "x = 6"], answer: "x = 4" },
        { question: "4x - 8 = 12", options: ["x = 5", "x = 4", "x = 3", "x = 20"], answer: "x = 5" },
        { question: "x/2 + 3 = 7", options: ["x = 8", "x = 4", "x = 10", "x = 20"], answer: "x = 8" },
        { question: "x/3 - 1 = 4", options: ["x = 15", "x = 9", "x = 12", "x = 5"], answer: "x = 15" },
        { question: "2x + 1 = 11", options: ["x = 5", "x = 6", "x = 10", "x = 12"], answer: "x = 5" },
        { question: "10x - 5 = 45", options: ["x = 5", "x = 4", "x = 50", "x = 40"], answer: "x = 5" },
        { question: "3x + 9 = 0", options: ["x = -3", "x = 3", "x = 0", "x = -9"], answer: "x = -3" },
        { question: "4x + 20 = 4", options: ["x = -4", "x = 4", "x = -6", "x = 6"], answer: "x = -4" },
        { question: "(x + 5) / 2 = 10", options: ["x = 15", "x = 25", "x = 20", "x = 5"], answer: "x = 15" },
        { question: "2(x - 3) = 8", options: ["x = 7", "x = 4", "x = 11", "x = 1"], answer: "x = 7" },
        { question: "3(x + 1) = 12", options: ["x = 3", "x = 4", "x = 5", "x = 11"], answer: "x = 3" },
        { question: "x/4 + 5 = 6", options: ["x = 4", "x = 1", "x = 24", "x = 0"], answer: "x = 4" },
        { question: "5x - 2 = 18", options: ["x = 4", "x = 20", "x = 3", "x = 5"], answer: "x = 4" },
        { question: "7x + 7 = 49", options: ["x = 6", "x = 7", "x = 8", "x = 42"], answer: "x = 6" },
        { question: "x/5 - 2 = 1", options: ["x = 15", "x = 10", "x = 5", "x = 3"], answer: "x = 15" },
        { question: "8x - 4 = 12", options: ["x = 2", "x = 1", "x = 16", "x = 4"], answer: "x = 2" },
        { question: "2x + 15 = 5", options: ["x = -5", "x = 5", "x = -10", "x = 10"], answer: "x = -5" },
        { question: "x/10 + 2 = 2.5", options: ["x = 5", "x = 0.5", "x = 10", "x = 25"], answer: "x = 5" },
        { question: "3x - 1 = 20", options: ["x = 7", "x = 21", "x = 6", "x = 19"], answer: "x = 7" },
        { question: "4(x + 2) = 16", options: ["x = 2", "x = 4", "x = 6", "x = 14"], answer: "x = 2" },
        { question: "5(x - 4) = 0", options: ["x = 4", "x = 0", "x = -4", "x = 5"], answer: "x = 4" },
        { question: "x/2 + x/2 = 10", options: ["x = 10", "x = 5", "x = 20", "x = 0"], answer: "x = 10" },
        { question: "2x + 3x = 25", options: ["x = 5", "x = 10", "x = 20", "x = 2.5"], answer: "x = 5" },
        { question: "10x - 2x = 64", options: ["x = 8", "x = 10", "x = 12", "x = 6"], answer: "x = 8" },
        { question: "x + 2x + 3x = 12", options: ["x = 2", "x = 6", "x = 1", "x = 3"], answer: "x = 2" },
        { question: "x - 0.1x = 9", options: ["x = 10", "x = 9", "x = 100", "x = 11"], answer: "x = 10" },
        { question: "2x + 10 = x + 15", options: ["x = 5", "x = 25", "x = 10", "x = 12"], answer: "x = 5" },
        { question: "3x - 4 = x + 6", options: ["x = 5", "x = 10", "x = 2", "x = 4"], answer: "x = 5" },
        { question: "5x = 2x + 18", options: ["x = 6", "x = 9", "x = 3", "x = 4"], answer: "x = 6" },
        { question: "x + 8 = 2x", options: ["x = 8", "x = 4", "x = -8", "x = 0"], answer: "x = 8" },
        { question: "2(x + 3) = x + 10", options: ["x = 4", "x = 7", "x = 3", "x = 10"], answer: "x = 4" },
        { question: "4x - 10 = 2x", options: ["x = 5", "x = 10", "x = 2.5", "x = 6"], answer: "x = 5" },
        { question: "x/2 + 1 = x/4 + 2", options: ["x = 4", "x = 2", "x = 8", "x = 1"], answer: "x = 4" },
        { question: "3(x - 1) = 2(x + 2)", options: ["x = 7", "x = 1", "x = 5", "x = 10"], answer: "x = 7" },
        { question: "10 - x = 2x - 5", options: ["x = 5", "x = 15", "x = 3", "x = 1"], answer: "x = 5" },
        { question: "2x/3 = 10", options: ["x = 15", "x = 20", "x = 30", "x = 6.6"], answer: "x = 15" },
        { question: "3x/4 = 9", options: ["x = 12", "x = 27", "x = 36", "x = 6"], answer: "x = 12" },
        { question: "5x/2 - 1 = 9", options: ["x = 4", "x = 5", "x = 10", "x = 2"], answer: "x = 4" }
    ],

    profesional: [
        // Potencias y Raíces (15 preguntas)
        { question: "x² = 25", options: ["x = 5", "x = 12.5", "x = 50", "x = 10"], answer: "x = 5" },
        { question: "x² + 4 = 20", options: ["x = 4", "x = 16", "x = 8", "x = 2"], answer: "x = 4" },
        { question: "2x² = 18", options: ["x = 3", "x = 9", "x = 4.5", "x = 6"], answer: "x = 3" },
        { question: "x² / 2 = 32", options: ["x = 8", "x = 16", "x = 64", "x = 4"], answer: "x = 8" },
        { question: "√(x) = 7", options: ["x = 49", "x = 14", "x = 3.5", "x = 21"], answer: "x = 49" },
        { question: "√(x + 2) = 5", options: ["x = 23", "x = 25", "x = 3", "x = 27"], answer: "x = 23" },
        { question: "√(x) - 3 = 1", options: ["x = 16", "x = 4", "x = 8", "x = 2"], answer: "x = 16" },
        { question: "x³ = 27", options: ["x = 3", "x = 9", "x = 13.5", "x = 3.3"], answer: "x = 3" },
        { question: "3x² = 75", options: ["x = 5", "x = 25", "x = 15", "x = 10"], answer: "x = 5" },
        { question: "x² - 10 = 90", options: ["x = 10", "x = 100", "x = 80", "x = 40"], answer: "x = 10" },
        { question: "2√(x) = 10", options: ["x = 25", "x = 5", "x = 100", "x = 50"], answer: "x = 25" },
        { question: "x² + x² = 50", options: ["x = 5", "x = 25", "x = 10", "x = 12.5"], answer: "x = 5" },
        { question: "√(2x) = 6", options: ["x = 18", "x = 36", "x = 12", "x = 9"], answer: "x = 18" },
        { question: "x² + 1 = 10", options: ["x = 3", "x = 9", "x = 4.5", "x = 5"], answer: "x = 3" },
        { question: "³√(x) = 2", options: ["x = 8", "x = 4", "x = 6", "x = 2"], answer: "x = 8" },

        // Fórmulas Geométricas y Físicas (15 preguntas)
        { question: "Área del Rectángulo: A = b · h. Despeja 'b':", options: ["b = A / h", "b = A · h", "b = A - h", "b = h / A"], answer: "b = A / h" },
        { question: "Velocidad: v = d / t. Despeja 'd':", options: ["d = v · t", "d = v / t", "d = t / v", "d = v + t"], answer: "d = v · t" },
        { question: "Perímetro: P = 4L. Despeja 'L':", options: ["L = P / 4", "L = P - 4", "L = 4 / P", "L = 4P"], answer: "L = P / 4" },
        { question: "Densidad: ρ = m / V. Despeja 'V':", options: ["V = m / ρ", "V = m · ρ", "V = ρ / m", "V = m + ρ"], answer: "V = m / ρ" },
        { question: "Fuerza: F = m · a. Despeja 'a':", options: ["a = F / m", "a = F · m", "a = m / F", "a = F - m"], answer: "a = F / m" },
        { question: "Ley de Ohm: V = I · R. Despeja 'I':", options: ["I = V / R", "I = V · R", "I = R / V", "I = V - R"], answer: "I = V / R" },
        { question: "Área Círculo: A = π · r². Despeja 'r':", options: ["r = √(A / π)", "r = A / π", "r = (A / π)²", "r = √(A · π)"], answer: "r = √(A / π)" },
        { question: "Presión: P = F / A. Despeja 'F':", options: ["F = P · A", "F = P / A", "F = A / P", "F = P + A"], answer: "F = P · A" },
        { question: "Energía: E = m · c². Despeja 'm':", options: ["m = E / c²", "m = E · c²", "m = √(E/c)", "m = E - c²"], answer: "m = E / c²" },
        { question: "Pendiente: y = mx + b. Despeja 'x':", options: ["x = (y - b) / m", "x = y - b - m", "x = (y + b) / m", "x = m / (y - b)"], answer: "x = (y - b) / m" },
        { question: "Volumen Cilindro: V = πr²h. Despeja 'h':", options: ["h = V / (πr²)", "h = V · πr²", "h = V / π", "h = √(V/π)"], answer: "h = V / (πr²)" },
        { question: "Trabajo: W = F · d. Despeja 'd':", options: ["d = W / F", "d = W · F", "d = F / W", "d = W - F"], answer: "d = W / F" },
        { question: "Circunferencia: C = 2πr. Despeja 'r':", options: ["r = C / (2π)", "r = 2π / C", "r = C - 2π", "r = C / π"], answer: "r = C / (2π)" },
        { question: "Calor: Q = mCeΔT. Despeja 'm':", options: ["m = Q / (CeΔT)", "m = Q · Ce · ΔT", "m = CeΔT / Q", "m = Q - CeΔT"], answer: "m = Q / (CeΔT)" },
        { question: "Interés Simple: I = Crt. Despeja 't':", options: ["t = I / (Cr)", "t = I · C · r", "t = Cr / I", "t = I - Cr"], answer: "t = I / (Cr)" },

        // Retos lógicos (10 preguntas)
        { question: "Si 2/x = 4, entonces x es:", options: ["x = 0.5", "x = 2", "x = 8", "x = 4"], answer: "x = 0.5" },
        { question: "Si x + x/2 = 3, entonces x es:", options: ["x = 2", "x = 1.5", "x = 1", "x = 3"], answer: "x = 2" },
        { question: "Despeja x en: ax + b = 0", options: ["x = -b / a", "x = b / a", "x = a / b", "x = -a / b"], answer: "x = -b / a" },
        { question: "Despeja x en: x/a = b/c", options: ["x = (a · b) / c", "x = (a · c) / b", "x = b / (a · c)", "x = a + b - c"], answer: "x = (a · b) / c" },
        { question: "Si 10 = 50 / x, entonces x es:", options: ["x = 5", "x = 500", "x = 0.2", "x = 40"], answer: "x = 5" },
        { question: "Si x² + y² = z², despeja x:", options: ["x = √(z² - y²)", "x = z - y", "x = √(z² + y²)", "x = z² / y²"], answer: "x = √(z² - y²)" },
        { question: "Si 3x = 3x, la solución es:", options: ["Todos los números", "Sin solución", "x = 0", "x = 1"], answer: "Todos los números" },
        { question: "Si x + 5 = x + 10, la solución es:", options: ["Sin solución", "Todos los números", "x = 5", "x = 0"], answer: "Sin solución" },
        { question: "Si x/x = 1, x no puede ser:", options: ["0", "1", "-1", "Cualquier número"], answer: "0" },
        { question: "Despeja x en: 1 / (1/x) = 5", options: ["x = 5", "x = 1/5", "x = 1", "x = 0"], answer: "x = 5" }
    ]
};

// Variable global necesaria para script.js
let questionBank = [];