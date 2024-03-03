import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
};

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const TabBarIcon: React.FC<Props> = (props) => (
  <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
);

const Layout: React.FC = () => {
  return (
    <Tabs initialRouteName="one">
      <Tabs.Screen
        name="one"
        options={{
          title: 'Tab One',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
