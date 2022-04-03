const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Madi', 34, 'madi@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

