import { TestWatcher } from 'jest';
const todolist = require('../modules/todoList');
test('see just message', () => {
  expect(todolist()).toBe('hello test');
});
