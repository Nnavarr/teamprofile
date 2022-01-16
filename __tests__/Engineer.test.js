const Engineer = require('../lib/Engineer');

test('creates an employee object', () => {
    const engineer = new Engineer('John Smith', 123456, 'john.smith@email.com', 'githubname');

    // check to ensure the employee class is constructed as expected
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
})

// get name test
test('ensure getName method returns the objects name', () => {
    const engineer = new Engineer('John Smith', 123456, 'john.smith@email.com', 'githubname');
    expect(engineer.getName()).toEqual(engineer.name);
})

// get id test
test('ensure getID method returns the objects id', () => {
    const engineer = new Engineer('John Smith', 123456, 'john.smith@email.com', 'githubname');
    expect(engineer.getId()).toEqual(engineer.id);
})

// get email test
test('ensure getEmail method returns the objects email', () => {
    const engineer = new Engineer('John Smith', 123456, 'john.smith@email.com', 'githubname');
    expect(engineer.getEmail()).toEqual(engineer.email);
})

// get role test
test('ensure getRole method returns the objects role', () => {
    const engineer = new Engineer('John Smith', 123456, 'john.smith@email.com', 'githubname');
    expect(engineer.getRole()).toEqual('Engineer');
})

// get github name
test('ensure github name is return', () => {
    const engineer = new Engineer('John Smith', 123456, 'john.smith@email.com', 'githubname');
    expect(engineer.getGithub()).toEqual(expect.any(String));
})

