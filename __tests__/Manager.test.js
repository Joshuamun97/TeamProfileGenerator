const {test} = require('@jest/globals');
const Employee = require ('../lib/Employee');
const Manager = require('../lib/Manager');

test ('creates a manager object', () => {
    const manager = new Manager('Manager');
    expect(typeof(manager)).toBe('object');
});

test ('Gets the managers officeNumber', () => {
    const manager = new Manager('Manager', '1', 'email', '1');
    expect(manager.getOfficeNumber()).toBe('1');
});

test('getRole() returns Manager', () => {
    const manager = new Manager('Manager');
    expect(manager.getRole()).toBe('Manager');
});