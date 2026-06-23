import { Text, Pressable, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useTodosStore, type Todo } from '../../../../store/todos';

interface TodoItemProps {
  item: Todo;
};

export default function TodoItem({ item }: TodoItemProps) {
  const removeTodo = useTodosStore(({ removeTodo }) => removeTodo);
  const toggleTodo = useTodosStore(({ toggleTodo }) => toggleTodo);
  const setSelectedTodo = useTodosStore(({ setSelectedTodo }) => setSelectedTodo);

  return (
    <TouchableOpacity style={styles.item} onPress={() => setSelectedTodo(item.id)} activeOpacity={0.6}>
      <Pressable
        onPress={() => toggleTodo(item.id)}
        accessibilityRole="button"
        style={[styles.dot, item.completed && styles.dotCompleted]}
      />
      <Text style={[styles.itemText, item.completed && styles.itemTextCompleted]} numberOfLines={1}>
        {item.text}
      </Text>
      <Pressable onPress={() => removeTodo(item.id)} style={styles.removeBtn} accessibilityRole="button">
        <Text style={styles.removeText}>REMOVE</Text>
      </Pressable>
    </TouchableOpacity>
  );
}