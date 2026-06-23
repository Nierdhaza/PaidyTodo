import { useState } from 'react';
import AuthScreen from './src/screens/auth';
import TodoScreen from './src/screens/todo';

export default function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  if (!isAuthed) {
    return <AuthScreen onAuthSuccess={() => setIsAuthed(true)} />;
  }

  return <TodoScreen />;
}
