// obj to became an interable it has to have at the following prerequisite
const obj = {
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step === 1) {
                    return { value: 'HELLO', done: false };
                } else if (step === 2) {
                    return { value: 'WORLD', done: false };
                }
                return { value: undefined, done: true };
            }
        };
        return iterator;
    }
};

function normalFunction() {
    console.log('HELLO');
    console.log('WORLD');
}

function* generatorFunction() {
    yield 'HELLO'; // yield === stop
    yield 'WORLD';
}

const generatlorObject = generatorFunction();

for (const word of generatlorObject) {
    console.log(word);
}