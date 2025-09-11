import { enableAppSwitcherProtectionAsync } from 'expo-screen-capture'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  useEffect(() => {
    enableAppSwitcherProtectionAsync()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Demo of enableAppSwitcherProtectionAsync race condition. If you move the app to the background and back quickly, multiple blur layers will be created over the app. But only the last one will get removed, causing an unrecoverable state.</Text>
      <Text style={styles.text}>To fix, the iOS module’s showPrivacyOverlay needs a guard statement to make it idempotent.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    maxWidth: 400,
    fontSize: 18,
    marginBottom: 18,
  }
});
