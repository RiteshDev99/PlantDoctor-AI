import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CustomHeader from "@/src/components/customHeader";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#4cb051',
                header: ({ route, options }) => (
                    <CustomHeader
                        routeName={route.name}
                        title={options.title || route.name}
                    />
                ),
                tabBarStyle: {
                    paddingBottom: insets.bottom,
                    backgroundColor:'#121212',
                    height: 60 + insets.bottom,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color={color} />         
                    ),
                }}
            />
            <Tabs.Screen
                name="aiDoctor"
                options={{
                    title: 'Doctor',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="microscope" size={24} color={color} />      
                    ),
                }}
            />
        </Tabs>
    );
}
