import React, { useEffect, useRef, useState } from 'react';
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
  const scrollRef = useRef<ScrollView>(null);
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
      <ScrollView
        ref={scrollRef}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 16,
        }}
      >
        <Text style={{ fontSize: 24, marginBottom: 16 }}>Some Content</Text>

        {Array.from({ length: 18 }).map((_, i) => (
          <Text key={i} style={{ marginBottom: 12 }}>
            Content line {i + 1}
          </Text>
        ))}

        <View style={{ flex: 1 }} />

        <View>
          <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
            <OtpInput
              numberOfDigits={4}
              onTextChange={text => console.log(text)}
              type="numeric"
              onFocus={() => scrollRef.current?.scrollToEnd({ animated: true })}
            />
          </View>

          <TouchableOpacity
            style={{
              height: 48,
              borderRadius: 8,
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff' }}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Keyboard spacer */}
        <View style={{ height: keyboardHeight }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
