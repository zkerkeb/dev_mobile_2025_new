import { View, TouchableOpacity, Text } from 'react-native';
import { useCounter } from '@/context/CounterContext';

export function CounterButtons() {
  const { increment, decrement } = useCounter();

  return (
    <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
      <TouchableOpacity
        style={{ backgroundColor: '#007AFF', padding: 20, borderRadius: 10 }}
        onPress={decrement}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: '#007AFF', padding: 20, borderRadius: 10 }}
        onPress={increment}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
