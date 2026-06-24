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
    <KeyboardAvoidingView keyboardVerticalOffset={80} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
    </KeyboardAvoidingView>
  );
}

/**
 * 4) try to write button component using Pressable
 */
