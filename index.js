
/**
 * Check user age for majority
 * @param {number} n - user's age
 * @returns {boolean}
 */
function isAdult(n) {
    return n > 17;
}

/**
 * Check the multiplicity of the first number by the second
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
function checkMultiplicity(a, b) {
    return a % b === 0;
}

/**
 * Determine the possibility of the existence of a triangle on the sides.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean} - true if the existence of a triangle is possible
 */
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

/**
 * Area of a triangle (Heron's formula)
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {string|number}
 */
function areaOfATriangle(a, b, c) {
    if (isTriangle(a, b, c)) {
        const p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
    return 'This is not a triangle';
}

/**
 * Area of a rhombus
 * @param {number} d1 - first diagonal of a rhombus
 * @param {number} d2 - second diagonal of a rhombus
 * @returns {number}
 */
function areaOfARhombus(d1, d2) {
    return d1 * d2 / 2;
}

/**
 * Surface area of a cylinder
 * @param {number} r - radius
 * @param {number} h - height
 * @returns {number}
 */
function surfaceAreaOfACylinder(r, h) {
    return 2 * Math.PI * r * (h + r);
}

/**
 * Area of a rectangle
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function areaOfARectangle(a, b) {
    return a * b;
}
