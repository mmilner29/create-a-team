const Engineer = require('../lib/Engineer');


test('creates an engineer object', () => {
    const engineer = new Engineer('Madi', 34, 'madi@gmail.com', 'mmilner29');

    expect(engineer.github).toEqual(expect.any(String));

});