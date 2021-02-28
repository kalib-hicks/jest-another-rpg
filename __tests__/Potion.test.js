const Potion = require('../lib/Potion.js');

test('creates a health potion object'), () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

function Potion(name) {
    this.name = name;

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports.Potion;

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect.(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});