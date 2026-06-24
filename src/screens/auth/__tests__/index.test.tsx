import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import AuthScreen from '../index';

jest.mock('../../../auth', () => ({
  onAuthenticate: jest.fn(),
  openDeviceSecuritySettings: jest.fn(),
}));

import { onAuthenticate, openDeviceSecuritySettings } from '../../../auth';

describe('AuthScreen', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('calls onAuthSuccess when authentication succeeds on mount', async () => {
    (onAuthenticate as jest.Mock).mockResolvedValueOnce({ success: true });

    const onAuthSuccess = jest.fn();
    await render(<AuthScreen onAuthSuccess={onAuthSuccess} />);

    await waitFor(() => {
      expect(onAuthSuccess).toHaveBeenCalled();
    });
  });

  test('shows "Set Authentication to Proceed" when not enrolled and pressing Go to Settings triggers openDeviceSecuritySettings when re-auth fails', async () => {
    (onAuthenticate as jest.Mock)
      .mockResolvedValueOnce({ success: false, error: 'not_enrolled' })
      .mockResolvedValueOnce({ success: false, error: 'unknown' });

    const onAuthSuccess = jest.fn();
    const { getByText } = await render(<AuthScreen onAuthSuccess={onAuthSuccess} />);

    await waitFor(() => expect(getByText('Set Authentication to Proceed')).toBeTruthy());

    await act(() => {
      fireEvent.press(getByText('Go to Settings'));
    });

    await waitFor(() => expect(openDeviceSecuritySettings).toHaveBeenCalled());
    expect(onAuthSuccess).not.toHaveBeenCalled();
  });

  test('when not enrolled and pressing Go to Settings, if second auth succeeds then onAuthSuccess is called and settings not opened', async () => {
    (onAuthenticate as jest.Mock)
      .mockResolvedValueOnce({ success: false, error: 'not_enrolled' })
      .mockResolvedValueOnce({ success: true });

    const onAuthSuccess = jest.fn();
    const { getByText } = await render(<AuthScreen onAuthSuccess={onAuthSuccess} />);

    await waitFor(() => expect(getByText('Set Authentication to Proceed')).toBeTruthy());

    await act(() => {
      fireEvent.press(getByText('Go to Settings'));
    });

    await waitFor(() => expect(onAuthSuccess).toHaveBeenCalled());
    expect(openDeviceSecuritySettings).not.toHaveBeenCalled();
  });

  test('shows "Not authenticated." and Try Again retries auth and succeeds', async () => {
    (onAuthenticate as jest.Mock)
      .mockResolvedValueOnce({ success: false, error: 'user_cancel' })
      .mockResolvedValueOnce({ success: true });

    const onAuthSuccess = jest.fn();
    const { getByText } = await render(<AuthScreen onAuthSuccess={onAuthSuccess} />);

    await waitFor(() => expect(getByText('Not authenticated.')).toBeTruthy());

    await act(() => {
      fireEvent.press(getByText('Try Again'));
    });

    await waitFor(() => expect(onAuthSuccess).toHaveBeenCalled());
  });
});
