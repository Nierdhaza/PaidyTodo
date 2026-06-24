import { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LocalAuthenticationResult } from 'expo-local-authentication';

import { onAuthenticate, openDeviceSecuritySettings } from '../../auth';

import { styles } from './styles';

interface RenderStateOptions {
  message: string;
  buttonTitle: string;
  onPress: () => void;
  subtitle: string;
}

function StateView({ message, buttonTitle, onPress, subtitle }: RenderStateOptions) {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.text}>{message}</Text>
        <Text style={styles.subText}>{subtitle}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

interface AuthScreenProps {
  onAuthSuccess: () => void;
}

export default function AuthScreen({ onAuthSuccess }: AuthScreenProps) {
  const [authState, setAuthState] = useState<LocalAuthenticationResult | null>(null);

  const runAuth = async () => {
    const result = await onAuthenticate();
    setAuthState(result);
    if (result.success) onAuthSuccess();
  };

  useEffect(() => {
    runAuth();
  }, []);

  const handleOpenSettings = async () => {
    const authResult = await onAuthenticate();
    setAuthState(authResult);

    if (authResult.success) {
      onAuthSuccess();
      return;
    }

    await openDeviceSecuritySettings();
  };

  if (!authState?.success && authState?.error === 'not_enrolled') {
    return (
      <StateView
        message="Set Authentication to Proceed"
        subtitle="Please set up Face ID / Fingerprint or Passcode in your device settings."
        buttonTitle="Go to Settings"
        onPress={handleOpenSettings}
      />
    );
  }

  if (!authState?.success) {
    return (
      <StateView
        message="Not authenticated."
        subtitle="Please try again."
        buttonTitle="Try Again"
        onPress={runAuth}
      />
    );
  }

  return null;
}
