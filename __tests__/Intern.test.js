const Intern = require('../lib/Intern');

test('creates an employee object', () => {
    const intern = new Intern('John Smith', 123456, 'john.smith@email.com', 'Arizona State University');

    // check to ensure the employee class is constructed as expected
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
})

// get name test
test('ensure getName method returns the objects name', () => {
    const intern = new Intern('John Smith', 123456, 'john.smith@email.com', 'Arizona State University');
    expect(intern.getName()).toEqual(intern.name);
})

// get id test
test('ensure getID method returns the objects id', () => {
    const intern = new Intern('John Smith', 123456, 'john.smith@email.com', 'Arizona State University');
    expect(intern.getId()).toEqual(intern.id);
})

// get email test
test('ensure getEmail method returns the objects email', () => {
    const intern = new Intern('John Smith', 123456, 'john.smith@email.com', 'Arizona State University');
    expect(intern.getEmail()).toEqual(intern.email);
})

// get role test
test('ensure getRole method returns the objects role', () => {
    const intern = new Intern('John Smith', 123456, 'john.smith@email.com', 'Arizona State University');
    expect(intern.getRole()).toEqual('Intern');
})

// get school
test('ensure School is returned', () => {
    const intern = new Intern('John Smith', 123456, 'john.smith@email.com', 'Arizona State University');
    expect(intern.getSchool()).toEqual(expect.any(String));
})

