const Manager = require('../lib/Manager');

test('creates an employee object', () => {
    const manager = new Manager('John Smith', 123456, 'john.smith@email.com', 623333333);

    // check to ensure the employee class is constructed as expected
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
})

// get name test
test('ensure getName method returns the objects name', () => {
    const manager = new Manager('John Smith', 123456, 'john.smith@email.com', 623333333);
    expect(manager.getName()).toEqual(manager.name);
})

// get id test
test('ensure getID method returns the objects id', () => {
    const manager = new Manager('John Smith', 123456, 'john.smith@email.com', 623333333);
    expect(manager.getId()).toEqual(manager.id);
})

// get email test
test('ensure getEmail method returns the objects email', () => {
    const manager = new Manager('John Smith', 123456, 'john.smith@email.com', 623333333);
    expect(manager.getEmail()).toEqual(manager.email);
})

// get role test
test('ensure getRole method returns the objects role', () => {
    const manager = new Manager('John Smith', 123456, 'john.smith@email.com', 623333333);
    expect(manager.getRole()).toEqual('Manager');
})

