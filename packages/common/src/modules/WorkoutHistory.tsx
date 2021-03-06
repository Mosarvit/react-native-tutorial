import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';

interface WorkoutHistoryProps {

}

export const WorkoutHistory: React.FC<WorkoutHistoryProps> = observer(() => {
  const routerStore = React.useContext(RouterStoreContext)
  return (
    <View>
      <Text>Workout History page</Text>
      <Button title="create Workout" onPress={() => {
        routerStore.screen = "CurrentWorkout"
      }} />
    </View>
  );
});