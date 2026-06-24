import { render, fireEvent, cleanup } from '@testing-library/react-native';
import TodoItem from '../index';
import { useTodosStore } from '../../../../../store/todos';

describe('TodoItem', () => {
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

  test('pressing item triggers setSelectedTodo with id', async () => {
    const setSelectedTodoMock = jest.fn();
    useTodosStore.setState({ setSelectedTodo: setSelectedTodoMock });

    const item = { id: '1', text: 'Hello world', createdAt: 1 };
    const { getByText } = await render(<TodoItem item={item} />);

    fireEvent.press(getByText('Hello world'));

    expect(setSelectedTodoMock).toHaveBeenCalledWith('1');
  });

  test('pressing REMOVE triggers removeTodo with id', async () => {
    const removeTodoMock = jest.fn();
    useTodosStore.setState({ removeTodo: removeTodoMock } as any);

    const item = { id: '1', text: 'Hello world', createdAt: 1 };
    const { getByText } = await render(<TodoItem item={item} />);

    fireEvent.press(getByText('REMOVE'));
    expect(removeTodoMock).toHaveBeenCalledWith('1');
  });
});
