import { create } from 'zustand';

export interface Todo {
  id: string;
  text: string;
  createdAt: number;
}

type TodosState = {
  todos: Todo[];
  selectedTodo: Todo | null;
  text: string;
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  setTodos: (todos: Todo[]) => void;
  setSelectedTodo: (id: string | null) => void;
  setText: (text: string) => void;
};

export const useTodosStore = create<TodosState>((set) => ({
  todos: [],
  selectedTodo: null,
  text: '',
  setText: (textValue: string) => set({ text: textValue }),

  addTodo: (text: string) => {
    const id = String(Date.now());
    const todo = { id, text, createdAt: Date.now() };
    set((state) => ({ todos: [todo, ...state.todos], text: '', selectedTodo: null }));
  },

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
      selectedTodo: state.selectedTodo?.id === id ? null : state.selectedTodo,
      text: state.selectedTodo?.id === id ? '' : state.text,
    })),

  updateTodo: (id, text) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
      selectedTodo:
        state.selectedTodo?.id === id ? { ...state.selectedTodo, text } : state.selectedTodo,
    })),

  setTodos: (todos: Todo[]) => set({ todos }),

  setSelectedTodo: (id: string | null) =>
    set((state) => {
      const selectedTodo = state.todos.find((todo) => todo.id === id) ?? null;
      return {
        selectedTodo,
        text: selectedTodo ? selectedTodo.text : '',
      };
    }),
}));
