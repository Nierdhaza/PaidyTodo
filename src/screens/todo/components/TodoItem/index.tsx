import { Text, Pressable, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useTodosStore, type Todo } from '../../../../store/todos';

interface TodoItemProps {
  item: Todo;
}

export default function TodoItem({ item }: TodoItemProps) {
  const removeTodo = useTodosStore(({ removeTodo }) => removeTodo);
  const setSelectedTodo = useTodosStore(({ setSelectedTodo }) => setSelectedTodo);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelectedTodo(item.id)}
      activeOpacity={0.6}
    >
      <View style={styles.dot} />
      <Text style={styles.itemText} numberOfLines={1}>
        {item.text}
      </Text>
      <Pressable
        onPress={() => removeTodo(item.id)}
        style={styles.removeBtn}
        accessibilityRole="button"
      >
        <Text style={styles.removeText}>REMOVE</Text>
      </Pressable>
    </TouchableOpacity>
  );
}
