const Intern = require('../lib/Intern');


test('creates an intern object', () => {
    const intern = new Intern('Madi', 34, 'madi@gmail.com', 'UofA');

    expect(intern.school).toEqual(expect.any(String));

});