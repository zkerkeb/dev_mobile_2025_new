import { useCounter } from '@/context/CounterContext';
import { Text, View } from 'react-native';

export function CounterDisplay() {
  const counterValue = useCounter();
  console.log('CounterDisplay rendered with value:', counterValue);
  // const { count } = useContext(CounterContext);

  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 48, fontWeight: 'bold', color: 'white' }}>{counterValue.count}</Text>
    </View>
  );
}
