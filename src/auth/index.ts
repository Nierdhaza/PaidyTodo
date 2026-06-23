import * as LocalAuthentication from 'expo-local-authentication';
import * as Linking from 'expo-linking';
import * as IntentLauncher from 'expo-intent-launcher';
import { Platform } from 'react-native';

export const onAuthenticate = async (): Promise<LocalAuthentication.LocalAuthenticationResult> => {
  try {
    const enrolledLevel = await LocalAuthentication.getEnrolledLevelAsync();

    if (enrolledLevel === LocalAuthentication.SecurityLevel.NONE) {
      return { success: false, error: 'not_enrolled' };
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      return { success: false, error: 'not_enrolled' };
    }

    return await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate with Face ID / Fingerprint',
      fallbackLabel: 'Use Passcode',
      disableDeviceFallback: false,
    });
  } catch {
    return { success: false, error: 'unknown' };
  }
};

export const openDeviceSecuritySettings = async (): Promise<boolean> => {
  if (Platform.OS === 'ios') {
    await Linking.openSettings();
    return true;
  }

  const actions = [
    IntentLauncher.ActivityAction.BIOMETRIC_ENROLL,
    IntentLauncher.ActivityAction.FINGERPRINT_ENROLL,
    IntentLauncher.ActivityAction.SECURITY_SETTINGS,
  ];

  for (const action of actions) {
    try {
      await IntentLauncher.startActivityAsync(action);
      return true;
    } catch (e) {
      console.debug('Intent failed:', action, e);
    }
  }

  return false;
};