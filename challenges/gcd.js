/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    const min = Math.min(a, b);
    for (let i = max; i > 0; i--) {
        if (a % i === 0 && b % i === 0) return i;
    }
}

module.exports = gcd;