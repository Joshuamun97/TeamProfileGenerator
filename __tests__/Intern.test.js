const {test} = require('@jest/globals');
const Employee = require ('../lib/Employee');
const Intern = require('../lib/Intern');

test ('creates an intern object', () => {
    const intern = new Intern('Intern');
    expect(typeof(intern)).toBe('object');
});

test ('Gets the interns school', () => {
    const intern = new Intern('Intern1', '2', 'email', 'school1');
    expect(intern.school).toBe('school1')
});

test('getRole() returns Intern', () => {
    const intern = new Intern('Intern');
    expect(intern.getRole()).toBe('Intern');
});