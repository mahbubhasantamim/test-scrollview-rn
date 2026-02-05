import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

export default function AppContent() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', e =>
      setKeyboardHeight(e.endCoordinates.height),
    );
    const hide = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardHeight(0),
    );

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={{ fontSize: 24, marginBottom: 16 }}>Some Content</Text>

        {Array.from({ length: 25 }).map((_, i) => (
          <Text key={i} style={{ marginBottom: 12 }}>
            This is content line {i + 1}
          </Text>
        ))}
      </ScrollView>

      {/* Input + Submit */}
      <View
        style={{
          padding: 16,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderColor: '#eee',
          marginBottom: keyboardHeight,
        }}
      >
        <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
          <OtpInput
            numberOfDigits={4}
            onTextChange={text => console.log(text)}
            type="numeric"
          />
        </View>

        <TouchableOpacity
          style={{
            height: 48,
            borderRadius: 8,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: '#fff' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
