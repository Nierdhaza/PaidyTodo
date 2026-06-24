import { KeyboardAvoidingView, View, TextInput, Pressable, Text, Platform } from 'react-native';
import { styles } from './styles';
import { useTodosStore } from '../../../../store/todos';

export default function InputBar() {
  const text = useTodosStore(({ text }) => text);
  const setText = useTodosStore(({ setText }) => setText);
  const setSelectedTodo = useTodosStore(({ setSelectedTodo }) => setSelectedTodo);
  const selectedTodo = useTodosStore(({ selectedTodo }) => selectedTodo);

  const handleChangeText = (value: string) => {
    if (!value.trim()) {
      setSelectedTodo(null);
    }
    setText(value);
  };

  const handleSubmit = () => {
    const { addTodo, updateTodo, setText } = useTodosStore.getState();

    const trimmed = text.trim();
    if (!trimmed) return;

    if (selectedTodo) {
      updateTodo(selectedTodo.id, trimmed);
      setText('');
      setSelectedTodo(null);
    } else {
      addTodo(trimmed);
    }
  };

  return (
    // TODO: test on real device because KeyboardAvoidingView doesn't work on simulator
    // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <View style={styles.inputWrap}>
      <TextInput
        style={styles.input}
        placeholder="Enter here"
        placeholderTextColor="#D1D5DB"
        value={text}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <Pressable onPress={handleSubmit} style={styles.addBtn} accessibilityRole="button">
        <Text style={styles.addText}>{selectedTodo ? 'UPDATE' : 'ADD'}</Text>
      </Pressable>
    </View>
    // </KeyboardAvoidingView>
  );
}

/**
 * 3) write unit tests
 * 4) try to write button component using Pressable
 * 5) extend theme file with paddings (s, xs, m, l, xl), margins (s, xs, m, l, xl), borderRadius (s, xs, m, l, xl)
 * 2) test keyboard avoiding view on real device
 */
