import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import ContactScreen from './src/screens/ContactScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { COLORS } from './src/constants/theme';

const Tab = createBottomTabNavigator();

function Tabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopWidth: 0,
          elevation: 8,
          shadowOpacity: 0.1,
          paddingBottom: insets.bottom,
          paddingTop: 8,
          height: 56 + insets.bottom,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>🏠</Text> }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>ℹ️</Text> }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>💼</Text> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>👤</Text> }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>📧</Text> }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
