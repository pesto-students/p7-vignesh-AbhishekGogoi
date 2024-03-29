function memoize(fn) {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}

function add(...args) {
    return args.reduce((total, current) => total + current);
}

const memoizeAdd = memoize(add)

console.log(memoizeAdd(100, 100, 100))


console.log(memoizeAdd(100, 100))



console.log(memoizeAdd(10, 200))
console.log(memoizeAdd(10, 200))


console.log(memoizeAdd(5, 25))
console.log(memoizeAdd(5, 25))
