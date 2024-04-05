import React from 'react';
import {View, Button} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import {useState} from 'react';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = task => {
    if (!tasks.includes(task)) {
      setTasks([...tasks, task]);
    } else {
      alert('Task already exists!');
    }
  };
  return (
    <MainLayout>
      <View>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
