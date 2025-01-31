import {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    const newGoals = [...goals, enteredGoal];
    setGoals(newGoals);
    setEnteredGoal('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>      
        {
          goals.map((goal, i) => <Text key={i}>{goal}</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // Toma todo el espacio disponible
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },  
  inputContainer: {
    // Toma 1/6 del espacio disponible
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    // Toma 5/6 del espacio disponible
    flex: 5,
  }
});
