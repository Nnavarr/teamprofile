const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John Smith', 123456, 'john.smith@email.com');

    // check to ensure the employee class is constructed as expected
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

// get name test
test('ensure getName method returns the objects name', () => {
    const employee = new Employee('John Smith', 123456, 'john.smith@email.com');
    expect(employee.getName()).toEqual(employee.name);
})

// get id test
test('ensure getID method returns the objects id', () => {
    const employee = new Employee('John Smith', 123456, 'john.smith@email.com');
    expect(employee.getId()).toEqual(employee.id);
})

// get email test
test('ensure getEmail method returns the objects email', () => {
    const employee = new Employee('John Smith', 123456, 'john.smith@email.com');
    expect(employee.getEmail()).toEqual(employee.email);
})

// get role test
test('ensure getRole method returns the objects role', () => {
    const employee = new Employee('John Smith', 123456, 'john.smith@email.com');
    expect(employee.getRole()).toEqual('Employee');
})

