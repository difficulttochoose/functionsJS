console.log('isAdult(20): ', isAdult(20)); // true
console.log('isAdult(4): ', isAdult(4)); // false

console.log('checkMultiplicity(25, 5): ', checkMultiplicity(25, 5)); // true
console.log('checkMultiplicity(15, 3): ', checkMultiplicity(15, 3)); // true
console.log('checkMultiplicity(15, 5): ', checkMultiplicity(15, 5)); // true
console.log('checkMultiplicity(15, 4): ', checkMultiplicity(15, 4)); // false

console.log('isTriangle(6, 2, 5): ', isTriangle(6, 2, 5)); //true
console.log('isTriangle(1, 2, 3): ', isTriangle(1, 2, 3)); //false

console.log('areaOfATriangle(4, 5, 6): ', areaOfATriangle(4, 5, 6));
console.log('areaOfATriangle(35, 92, 59): ', areaOfATriangle(35, 92, 59));
console.log('areaOfATriangle(1, 2, 3): ', areaOfATriangle(1, 2, 3));

console.log('areaOfARhombus(4, 7): ', areaOfARhombus(4, 7));

console.log('surfaceAreaOfACylinder(7, 19): ', surfaceAreaOfACylinder(7, 19));
console.log('surfaceAreaOfACylinder(8.56, 3.89): ', surfaceAreaOfACylinder(8.56, 3.89));

console.log('areaOfARectangle(16, 79): ', areaOfARectangle(16, 79));

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
