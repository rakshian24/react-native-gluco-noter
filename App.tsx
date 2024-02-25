import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Gluco Noter App</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
