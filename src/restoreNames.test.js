'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

   it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
   });

   it(`should not return anything from the function`, () => {
    const result = restoreNames(users);
    expect(result).toBe(undefined);
  });

  it(`set correct 'firstName' to users who is equal to 'undefined'`, () => {
    restoreNames(users);
    expect(users[0].firstName).toBe("Jack");
  });

  it(`set correct 'firstName' to users who do not have it`, () => {
    restoreNames(users);
    expect(users[1].firstName).toBe("Mike");
  });
  // write tests here
});
