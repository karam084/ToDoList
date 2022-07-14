import addNewItem from './src/modules/todoList.js';
import newFunction from './src/modules/newFunction.js';
import isStorageAvailable from './src/modules/isStorageAvailable.js';

describe('Tests to add tasks to list and storage:', () => {
  const TodoList = new TodoList();
  test("should return false when '' is entered as a task.", () => {
    expect(TodoList.addNewItem('')).toBeFalsy();
  });
  test("should return true when 'wash car' is entered.", () => {
    expect(TodoList.addNewItem('wash car')).toBe('wash car');
  });
  /*test('should return 1 when checking te jsDOM since one task has been added.', () => {
      expect(getAmountOfTaskFromDOM()).toBe(1);
    });*/
  test("should return true when 'clean room' is entered as a task.", () => {
    expect(TodoList.addNewItem('clean room')).toBeTruthy();
  });
  /*test('should return 2 tasks from the DOM.', () => {
      expect(getAmountOfTaskFromDOM()).toBe(2);
    });*/
});
