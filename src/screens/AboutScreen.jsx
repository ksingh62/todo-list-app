import React from 'react';
import {View, Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({navigation}) => {
  return (
    <MainLayout>
      <View>
        <Text>This is the About Screen</Text>
        <Text>App Name: Incredible ToDo List App</Text>
        <Text>Your Name: Kapilmeet Singh</Text>
        <Text>Current Date: 05-04-2024</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
};

export default AboutScreen;
