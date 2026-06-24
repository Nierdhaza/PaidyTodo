import { render, fireEvent, cleanup } from '@testing-library/react-native';
import InputBar from '../index';
import { useTodosStore } from '../../../../../store/todos';

describe('InputBar', () => {
  beforeEach(() => {
    useTodosStore.setState({
      todos: [],
      selectedTodo: null,
      text: '',
      addTodo: jest.fn(),
      removeTodo: jest.fn(),
      updateTodo: jest.fn(),
      setTodos: jest.fn(),
      setSelectedTodo: jest.fn(),
      setText: jest.fn(),
    });
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test('pressing ADD calls addTodo with trimmed text', async () => {
    const addTodoMock = jest.fn();
    useTodosStore.setState({ text: '  New item  ', addTodo: addTodoMock } as any);

    const { getByText } = await render(<InputBar />);

    fireEvent.press(getByText('ADD'));
    expect(addTodoMock).toHaveBeenCalledWith('New item');
  });

  test('when editing, pressing UPDATE calls updateTodo and clears selection', async () => {
    const updateTodoMock = jest.fn();
    const setTextMock = jest.fn();
    const setSelectedTodoMock = jest.fn();

    useTodosStore.setState({
      todos: [{ id: '1', text: 'existing', createdAt: Date.now() }],
      selectedTodo: { id: '1', text: 'existing', createdAt: Date.now() },
      text: ' updated ',
      updateTodo: updateTodoMock,
      setText: setTextMock,
      setSelectedTodo: setSelectedTodoMock,
    });

    const { getByText } = await render(<InputBar />);
    fireEvent.press(getByText('UPDATE'));

    expect(updateTodoMock).toHaveBeenCalledWith('1', 'updated');
    expect(setTextMock).toHaveBeenCalledWith('');
    expect(setSelectedTodoMock).toHaveBeenCalledWith(null);
  });

  test('changing input to blank clears selectedTodo and calls setText', async () => {
    const setTextMock = jest.fn();
    const setSelectedTodoMock = jest.fn();

    useTodosStore.setState({
      selectedTodo: { id: '1', text: 'existing', createdAt: Date.now() },
      text: 'existing',
      setText: setTextMock,
      setSelectedTodo: setSelectedTodoMock,
    });

    const { getByPlaceholderText } = await render(<InputBar />);
    const input = getByPlaceholderText('Enter here');

    fireEvent.changeText(input, '   ');

    expect(setSelectedTodoMock).toHaveBeenCalledWith(null);
    expect(setTextMock).toHaveBeenCalledWith('   ');
  });
});
