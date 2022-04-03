const Manager = require('../lib/Manager');


test('creates a manager object', () => {
    const manager = new Manager('Madi', 34, 'madi@gmail.com', 355);

    expect(manager.officeNumber).toEqual(expect.any(Number));

});