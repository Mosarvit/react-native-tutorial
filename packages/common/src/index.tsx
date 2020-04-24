/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export const App = () => {

  const [counter, setCounter] = useState(0);

  return (

    <View  >

      <Text  >{counter}</Text>

      <Text  >{counter}</Text>

      <Text  >{counter}</Text>

      <Text  >{counter}</Text>
      <Button title="incement" onPress={() => { setCounter(counter + 1) }} />
    </View>

  );
};
