import { Stack } from 'expo-router';

const TokenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Tokens',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Token Details',
          headerShown: true,
          presentation: 'card',
          animation: 'slide_from_right',
        }}
      />
    </Stack>
  );
};

export default TokenLayout;
