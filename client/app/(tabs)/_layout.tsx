import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="asset-and-wallet"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'wallet' : 'wallet-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="token"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wait"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'time' : 'time-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
