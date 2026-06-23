import { useEffect } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { styles } from './styles';
import { useTodosStore, Todo } from '../../store/todos';
import { InputBar, TodoItem } from './components';

const keyExtractor = (item: Todo) => item.id;
const renderItem = ({ item }: { item: Todo }) => <TodoItem item={item} />

export default function TodoScreen() {
  const todos = useTodosStore(({ todos }) => todos);
  const setTodos = useTodosStore(({ setTodos }) => setTodos);

  useEffect(() => {
    if (!todos.length) {
      setTodos([
        { id: '1', text: 'First Item', completed: false, createdAt: Date.now() - 3000 },
        { id: '2', text: 'Second Item', completed: false, createdAt: Date.now() - 2000 },
        { id: '3', text: 'Third Item', completed: false, createdAt: Date.now() - 1000 },
      ]);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO:</Text>

      <FlatList
        data={todos}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <InputBar />
    </View>
  );
}