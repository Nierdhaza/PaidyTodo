import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import AuthScreen from './src/screens/auth';
import TodoScreen from './src/screens/todo';

export default function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  let component;

  if (!isAuthed) {
    component = <AuthScreen onAuthSuccess={() => setIsAuthed(true)} />;
  } else {
    component = <TodoScreen />;
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: '#F3F4F6', flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {component}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
