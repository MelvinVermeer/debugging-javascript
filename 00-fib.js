const fibRecusive = (num) => {
    if (num <= 1) {
        return 1
    }

    return fibRecusive(num - 1) + fibRecusive(num - 2);
}

const fibWhile = (num) => {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

function fibMem(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibMem(num - 1, memo) + fibMem(num - 2, memo);
}

module.exports = {
    fibRecusive,
    fibWhile,
    fibMem,
}