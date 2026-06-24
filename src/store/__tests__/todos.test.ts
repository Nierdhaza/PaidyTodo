import { useTodosStore } from '../todos';

beforeEach(() => {
  useTodosStore.setState({
    todos: [],
    selectedTodo: null,
    text: '',
  });
});

test('addTodo adds todo and clears text', () => {
  const add = useTodosStore.getState().addTodo;
  add('hello');
  const { todos, text } = useTodosStore.getState();
  expect(todos.length).toBe(1);
  expect(todos[0].text).toBe('hello');
  expect(text).toBe('');
});

test('updateTodo updates item and selectedTodo when matches', () => {
  useTodosStore.setState({
    todos: [{ id: '1', text: 'old', createdAt: 1 }],
    selectedTodo: { id: '1', text: 'old', createdAt: 1 },
  });

  useTodosStore.getState().updateTodo('1', 'new');

  const { todos, selectedTodo } = useTodosStore.getState();
  expect(todos[0].text).toBe('new');
  expect(selectedTodo?.text).toBe('new');
});

test('removeTodo removes item and clears selection when matched', () => {
  useTodosStore.setState({
    todos: [
      { id: '1', text: 'x', createdAt: 1 },
      { id: '2', text: 'y', createdAt: 2 },
    ],
    selectedTodo: { id: '1', text: 'x', createdAt: 1 },
    text: 'x',
  });

  useTodosStore.getState().removeTodo('1');

  const { todos, selectedTodo, text } = useTodosStore.getState();
  expect(todos.find((t) => t.id === '1')).toBeUndefined();
  expect(selectedTodo).toBeNull();
  expect(text).toBe('');
});

test('setSelectedTodo sets selectedTodo and text', () => {
  useTodosStore.setState({
    todos: [{ id: '1', text: 'item', createdAt: 1 }],
  });

  useTodosStore.getState().setSelectedTodo('1');

  const { selectedTodo, text } = useTodosStore.getState();
  expect(selectedTodo?.id).toBe('1');
  expect(text).toBe('item');
});

test('setText updates text', () => {
  useTodosStore.setState({ text: '' });

  useTodosStore.getState().setText('hello');

  const { text } = useTodosStore.getState();
  expect(text).toBe('hello');
});

test('setTodos replaces todos array', () => {
  const items = [{ id: 'a', text: 'A', createdAt: 1 }];
  useTodosStore.getState().setTodos(items);

  const { todos } = useTodosStore.getState();
  expect(todos).toEqual(items);
});
